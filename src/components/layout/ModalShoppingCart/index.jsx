import { useState, useEffect } from "react"
import { Button, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../../context/ShoppingCartContext"
import { formatCurrency } from "../../../utilities"
import { ItemCart, Spinner } from "../../../components"
import { useAuth } from "../../../context/AuthContext"

const ModalShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems, getTotalCart } = useShoppingCart()
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuth()


  useEffect(() => {
    setIsLoading(false)
    getTotalCart().then(data => setTotal(data))
  }, [cartItems])

  const renderCart = () => (
    <Offcanvas.Body>
      <Stack gap={3}>
        {cartItems.map((cartItem) => (
          <ItemCart
            key={`${cartItem.id}-${cartItem.size}`}
            id={cartItem.id}
            size={cartItem.size}
            quantity={cartItem.quantity}
          />
        ))}
        <div className="ms-auto fw-bold fs-5">
          Total {formatCurrency(total)}
        </div>
        { user ? 
          <Button href="/checkout" variant="dark">Checkout</Button>
          :
          <Button href="/login" variant="dark">Login</Button>
        }
      </Stack>
    </Offcanvas.Body>
  )

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito de puro estilo</Offcanvas.Title>
      </Offcanvas.Header>
      {isLoading && <Spinner />}
      {!isLoading && renderCart()}
    </Offcanvas>
  )
}

export { ModalShoppingCart }
