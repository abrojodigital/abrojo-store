import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const BannerOfertas = () => {
  return (
    <section>
    <Container
      className="bg-cover"
      style={{ backgroundImage: 'url(assets/img/cover-17.jpg)' }}
    >
      <Row className="py-12 bg-dark-10">
        <Col className="text-center text-white">
          <h4>Summer Styles</h4>
          <h2 className="display-1 text-uppercase">50% off</h2>
          <Link to="/listproducts" className="link-underline text-reset mx-4 my-4">
            Shop ofertas
          </Link>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export { BannerOfertas }