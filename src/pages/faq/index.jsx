import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";

const FaqPage = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="text-center">Preguntas frecuentes</h1>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                  ¿Cómo puedo realizar un pedido?
              </Card.Header>
                <Card.Body>
                  Para realizar un pedido en nuestra tienda online, siga los siguientes pasos:
                  <ol>
                    <li>Navegue por nuestro catálogo y seleccione los productos que desea comprar</li>
                    <li>Agregue los productos a su carrito de compras</li>
                    <li>Inicie sesión o cree una cuenta si aún no es un cliente registrado</li>
                    <li>Ingrese la información de envío y pago</li>
                    <li>Confirme su pedido y realice el pago</li>
                    <li>Recibirá un correo electrónico de confirmación con los detalles de su pedido</li>
                  </ol>
                </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                  ¿Cuáles son los métodos de pago disponibles?
              </Card.Header>
                <Card.Body>
                  Ofrecemos varios métodos de pago seguros, incluyendo tarjeta de crédito, débito, PayPal y transferencia bancaria.
                </Card.Body>
            </Card>
            {/* <!-- Agregue más preguntas y respuestas aquí --> */}
          </Accordion>
        </Col>
      </Row>
    </Container>
    
  );
};


export { FaqPage }