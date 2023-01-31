import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Checkout = () => {
  
  return (
    <Container className="my-5">
      <Row className="lh-fixed fs-lg">
        <Col xs={12} className="text-center">
          <h2>Checkout de su compra </h2>
          <Link to="/">Volver al shop</Link>
        </Col>
      </Row>
    </Container>
  )
}

export { Checkout }