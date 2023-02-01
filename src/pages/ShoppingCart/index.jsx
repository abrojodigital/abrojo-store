import { Link } from "react-router-dom";
import { ItemCart, Spinner } from "../../components"
import { Container, Row, ListGroup, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import { productsService } from "../../utils/Products"

const ShoppingCart = () => {
  const [isLoading, setisLoading] = useState(true);
  const [products, setProducts] = useState([])

  useEffect(() => {
    productsService.getAllProducts().then(data => setProducts(data)).then(_ => setisLoading(false))
  }, [])
  return (
    <Container className="my-5">
      <Row className="lh-fixed fs-lg">
        <Col xs={12} className="text-center">
          <h2>Su carrito </h2>
        </Col>
      </Row>
      {!isLoading ?
        <>
          <ListGroup className="list-group-lg list-group-flush">
            <ItemCart product={products[4]} />
            <ItemCart product={products[2]} />
            <ItemCart product={products[3]} />
          </ListGroup>
        </>
        : <Spinner />}

      <Row className="justify-between lh-fixed fs-sm bg-light mt-auto">
        <Col xs={6}><strong>Subtotal</strong></Col>
        <Col xs={6} className="text-right"><h3>$00.00</h3></Col>
      </Row>

      <Row className="mt-3">
        <Col xs={12}>
        <Link className="btn w-100 btn-dark" to="/checkout">Continuar al Checkout</Link>
        </Col>
        <Col xs={12} className="mt-2">
        <Link className="btn w-100 btn-outline-dark mt-2" to="/">Seguir comprando</Link>
        </Col>
      </Row>
    </Container>
  )
}

export { ShoppingCart }