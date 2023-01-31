import { Container, Row, Col, Image, Button } from "react-bootstrap";

const SectionIdeas = () => {
  return (
    <section className="py-12">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={3}>
            <Image className="img-fluid mb-2" src="assets/img/product-71.jpg" alt="..." />
            <div className="mb-7 mb-md-0">
              <Button variant="dark" to="/">
                Outfits para todo el día
              </Button>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Image className="img-fluid mb-2" src="assets/img/product-72.jpg" alt="..." />
          </Col>
          <Col xs={12} md={4}>
            <h2 className="h1 mb-7">Nuestros Imprecindibles</h2>
            <p>
              El outfit diario es el lienzo con el que un hombre, en cada elección y combinación, se define y proyecta al mundo.
            </p>
            <p className="mb-8">
              Sinfonía de líneas firmes y elegantes que te llevan a pasos seguros a tus metas.
            </p>
            <Button variant="dark" href="#...">
              Descubre más
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export { SectionIdeas };
