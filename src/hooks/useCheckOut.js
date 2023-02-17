import { useState, useEffect } from "react"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { productsService, ordersService } from "../services"

const useCheckOut = ({ buyerInfo }) => {
  const { cartItems, getTotalCart, clearCart } = useShoppingCart()
  const [total, setTotal] = useState(0)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [products, setProducts] = useState([])
  const [formError, setFormError] = useState(false)
  const [stockError, setStockError] = useState("")
  const [idPedido, setIdPedido] = useState("")

  // Validamos que haya suficiente stock para todos los productos en el carrito
  const validateStock = (productsMap) => {
    for (const cartItem of cartItems) {
      const product = productsMap[cartItem.id]
      if (product.stock < cartItem.quantity) {
        throw new Error(`No hay suficiente stock para el producto ${product.title}`)
      }
    }
  }

  // Actualizamos el stock de los productos en Firestore
  const updateStock = async () => {
    const updatedProducts = products.map(product => {
      const cartItem = cartItems.find(item => item.id === product.id)
      if (cartItem) {
        return { ...product, stock: product.stock - cartItem.quantity }
      }
      return product
    })
    for (const product of updatedProducts) {
      await productsService.updateStock(product.id, { stock: product.stock })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    const productsMap = products.reduce((map, product) => {
      map[product.id] = product
      return map
    }, {})

    const items = cartItems.map(({ id, quantity }) => {
      const { title, price } = productsMap[id]
      return { id, title, price, quantity }
    })

    try {
      validateStock(productsMap)
      updateStock()

      // Enviamos los datos del comprador y del carrito a Firestore
      const idPedido = await ordersService.addOrder({
        buyer: buyerInfo,
        items,
        total,
        date: new Date(),
      })
      setIdPedido(idPedido)
      // Limpiamos el carrito
      clearCart()

      // Marcamos el formulario como enviado
      setFormSubmitted(true)
    } catch (error) {
      console.error("Error al enviar el pedido a Firestore:", error.message)
      // Manejo de errores específicos
      if (error.message.startsWith("No hay suficiente stock")) {
        // Mostramos un mensaje de error específico en el formulario
        setStockError(error.message)
      } else {
        // Mostramos un mensaje de error genérico en el formulario
        setFormError(true)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await productsService.getAll()
      setProducts(data)
      getTotalCart(cartItems).then(data => setTotal(data))
    }

    fetchData()
  }, [cartItems])

  return {
    total,
    buyerInfo,
    isSubmitting,
    formSubmitted,
    formError,
    stockError,
    idPedido,
    handleSubmit,
  }
}

export { useCheckOut }