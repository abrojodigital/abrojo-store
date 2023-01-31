import { Container, Row, Col, Card } from "react-bootstrap";

const ShopDetails = () => {
  return (
    <section className="py-10 bg-light">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3} className="text-center mb-6 mb-lg-0">
            <Card className="mb-4">
              <Card.Body>
                <i className="fe fe-truck h3 text-primary mb-4"></i>
                <h6 className="heading-xxs mb-1">Envío Gratis</h6>
                <p className="mb-0 fs-sm text-muted">
                  En compras superiores a $100
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className="text-center mb-6 mb-lg-0">
            <Card className="mb-4">
              <Card.Body>
                <i className="fe fe-repeat h3 text-primary mb-4"></i>
                <h6 className="mb-1 heading-xxs">Devoluciones gratis</h6>
                <p className="mb-0 fs-sm text-muted">
                  Devolvemos su dinero antes de 30 días
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={3} className="text-center mb-6 mb-md-0">
            <Card className="mb-4">
              <Card.Body>
                <i className="fe fe-lock h3 text-primary mb-4"></i>
                <h6 className="mb-1 heading-xxs">Compra segura</h6>
                <p className="mb-0 fs-sm text-muted">
                  Estás en buenas manos
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={3} className="text-center">
            <Card className="mb-4">
              <Card.Body>
                <i className="fe fe-tag h3 text-primary mb-4"></i>
                <h6 className="mb-1 heading-xxs">Más de 1000 estilos</h6>
                <p className="mb-0 fs-sm text-muted">
                  Tenemos todo lo que necesitas
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export { ShopDetails }