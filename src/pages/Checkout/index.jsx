import { useState } from "react";
import { Form, Button, Container, Row, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities";
import { ItemCart, MyDocument } from "../../components";
import { useCheckOut } from "../../hooks";
import { PDFDownloadLink } from '@react-pdf/renderer';

const Checkout = () => {
  const { cartItems } = useShoppingCart();
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const {
    order,
    total,
    isSubmitting,
    formSubmitted,
    formError,
    stockError,
    idPedido,
    handleSubmit
  } = useCheckOut({ buyerInfo });

  if (formSubmitted) {
    return (
      <Container className="my-3 text-center w-75">
        <h1>¡Gracias por tu compra!</h1>
        <p>
          Hemos recibido tu pedido con el ID: <span className="h5">{idPedido}</span>.
        </p>
        <p>Guarda este ID para realizar el seguimiento de tu compra.</p>
        <PDFDownloadLink
          document={<MyDocument idPedido={idPedido} order = { order } />}
          fileName={`pedido-${idPedido}.pdf`}
        >
          <Button className="btn-dark">Descargar formulario de pedido</Button>
        </PDFDownloadLink>
      </Container>
    );
  }

  if (stockError !== "") {
    return (
      <Container className="my-3 text-center w-75">
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
            onChange={(e) => setBuyerInfo({ ...buyerInfo, name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={buyerInfo.email}
            onChange={(e) => setBuyerInfo({ ...buyerInfo, email: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={buyerInfo.phone}
            onChange={(e) => setBuyerInfo({ ...buyerInfo, phone: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={buyerInfo.address}
            onChange={(e) => setBuyerInfo({ ...buyerInfo, address: e.target.value })}
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
