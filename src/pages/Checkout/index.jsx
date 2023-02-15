import { useState, useEffect } from "react";
import { Form, Button, Container, Row, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Firestore } from "firebase/firestore";
import { productsService } from "../../services/Products";
import { formatCurrency } from "../../utilities";
import { ItemCart } from "../../components";

const Checkout = () => {
  const { cartItems, clearCart } = useShoppingCart();
  const [total, setTotal] = useState(0)
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [products, setProducts] = useState([])

  const handleInputChange = (event) => {
    setBuyerInfo({
      ...buyerInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviamos los datos del comprador y del carrito a Firestore
      await Firestore.collection("orders").add({
        buyer: buyerInfo,
        items: cartItems,
        total,
        date: new Date(),
      });

      // Limpiamos el carrito
      clearCart();

      // Marcamos el formulario como enviado
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting order to Firestore:", error);
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
          Hemos recibido tu pedido. Te hemos enviado un correo electrónico con
          la confirmación de tu pedido y los detalles del envío.
        </p>
      </Container>
    );
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

        <Row className="row-cols-auto">
        <h3 className="m-5 text-center">Items en el carrito</h3>
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
