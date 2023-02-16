import { useState, useEffect } from "react";
import { Form, Button, Container, Row, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { productsService, ordersService } from "../../services";
import { formatCurrency } from "../../utilities";
import { ItemCart } from "../../components";

const Checkout = () => {
  const { cartItems, clearCart } = useShoppingCart();
  const [total, setTotal] = useState(0)
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [products, setProducts] = useState([])
  const [formError, setFormError] = useState(false)
  const [stockError, setStockError] = useState("")
  const [idPedido, setIdPedido] = useState("")

  const handleInputChange = (event) => {
    setBuyerInfo({
      ...buyerInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const productsMap = products.reduce((map, product) => {
      map[product.id] = product;
      return map;
    }, {});

    const items = cartItems.map(({ id, quantity }) => {
      const { title, price } = productsMap[id];
      return { id, title, price, quantity };
    });

    try {
      // Validamos que haya suficiente stock para todos los productos en el carrito
      for (const cartItem of cartItems) {
        const product = productsMap[cartItem.id];
        if (product.stock < cartItem.quantity) {
          throw new Error(`No hay suficiente stock para el producto ${product.title}`);
        }
      }

      // Actualizamos el stock de los productos en Firestore
      const updatedProducts = products.map(product => {
        const cartItem = cartItems.find(item => item.id === product.id);
        if (cartItem) {
          return { ...product, stock: product.stock - cartItem.quantity };
        }
        return product;
      });
      for (const product of updatedProducts) {
        await productsService.updateStock(product.id, { stock: product.stock });
      }

      // Enviamos los datos del comprador y del carrito a Firestore
      const idPedido = await ordersService.addOrder({
        buyer: buyerInfo,
        items,
        total,
        date: new Date(),
      });
      setIdPedido(idPedido)
      // Limpiamos el carrito
      clearCart();

      // Marcamos el formulario como enviado
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error al enviar el pedido a Firestore:", error.message);
      // Manejo de errores específicos
      if (error.message.startsWith("No hay suficiente stock")) {
        // Mostramos un mensaje de error específico en el formulario
        setStockError(error.message);
      } else {
        // Mostramos un mensaje de error genérico en el formulario
        setFormError(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  };



  useEffect(() => {
    const fetchData = async () => {
      const data = await productsService.getAll();
      setProducts(data);
      setTotal(productsService.getTotal(data, cartItems));
    };

    fetchData();
  }, [cartItems]);

  if (formSubmitted) {
    return (
      <Container className="my-3 text-center">
        <h1>¡Gracias por tu compra!</h1>
        <p>
          Hemos recibido tu pedido con el ID: <span className="h5">{idPedido}</span>.
        </p>
        <p>Guarda este ID para realizar el seguimiento de tu compra.</p>
      </Container>
    );
  }

  if (stockError !== "") {
    return (
      <Container className="my-3 text-center">
        <h1>Faltante de stock</h1>
        <p>
          Lo lamentamos mucho. {stockError}.
        </p>
      </Container>
    )
  }

  if (formError) {
    return (
      <Container className="my-3 text-center">
        <h1>Error en el envío</h1>
        <p>
          Lo lamentamos mucho. Hubo un error en el envío del formulario.
        </p>
      </Container>
    )
  }

  return (
    <Container className="my-3 w-75">
      <h1>Checkout</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={buyerInfo.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={buyerInfo.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={buyerInfo.phone}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={buyerInfo.address}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Row>
          <h3 className="m-5 text-center">Items en el carrito</h3>
        </Row>
        <Row className="row-cols-auto">
          <Stack gap={3}>
            {cartItems.map((cartItem) => (
              <ItemCart key={cartItem.id} {...cartItem} />
            ))}
          </Stack>
        </Row>

        <h3 className="m-5 text-center">{`El total a abonar es de: ${formatCurrency(total)}`}</h3>
        <Button className="btn-dark" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando pedido..." : "Realizar pedido"}
        </Button>
      </Form>

    </Container>
  );
};

export { Checkout }
