import { Link } from "react-router-dom"
import { ItemCart, Spinner } from "../../components"
import { Container, Row, Col, Stack } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utilities"
import { useAuth } from "../../context/AuthContext"

const ShoppingCart = () => {
  const { cartItems, getTotalCart } = useShoppingCart()
  const { user } = useAuth()
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
    getTotalCart().then(data => setTotal(data))
  }, [cartItems])


  const renderCart = () => (
    <Row>
      <Stack gap={3}>
        {cartItems.map((cartItem) => (
          <ItemCart key={cartItem.id} {...cartItem} />
        ))}
        <div className="ms-auto fw-bold fs-5">
          Total {formatCurrency(total)}
        </div>
      </Stack>
    </Row>
  )

  return (
    <Container className="my-5">
      <Row className="lh-fixed fs-lg">
        <Col xs={12} className="text-center">
          <h2>Su carrito </h2>
        </Col>
      </Row>
      {isLoading && <Spinner />}
      {!isLoading && renderCart()}

      <Row className="mt-3">
        <Col xs={12}>
          {
            user ?
              <Link className="btn w-100 btn-dark" to="/checkout">Continuar al Checkout</Link>
              :
              <Link className="btn w-100 btn-dark" to="/login">Login de Usuario</Link>
          }
        </Col>
        <Col xs={12} className="mt-2">
          <Link className="btn w-100 btn-outline-dark mt-2" to="/">Seguir comprando</Link>
        </Col>
      </Row>
    </Container>
  )
}

export { ShoppingCart }