import { Link } from "react-router-dom"
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { Row, Col, ListGroupItem, Image, Button } from "react-bootstrap"
import { formatCurrency } from "../../../utilities"
import products from "../../../Data/products.json"

const ItemCart = ({ id, quantity }) => {

  const { removeFromCart } = useShoppingCart()
  const product = products.find((i) => i.id === id)
  if (!product) return null

  return (
    <ListGroupItem>
    <Row className="align-items-center">
      <Col className="col-4">
        <Link to="/">
          <Image className="img-fluid" src={product.img} alt={product.product} />
        </Link>
      </Col>
      <Col className="col-4">
        <p className="fs-sm fw-bold mb-7">
          <Link className="text-body" to="/">{product.product}</Link> <br />
          <span className="text-muted">{formatCurrency(product.price)}</span>
        </p>
      </Col>
      <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(product.id)}>
        &times;
      </Button>
    </Row>
  </ListGroupItem>

  );
}

export { ItemCart }