import { Link } from "react-router-dom"
import { Row, Col, ListGroupItem, Image } from "react-bootstrap"
import ItemQuantitySelector from "../../layout/ItemDetailContainer/ItemDetail/ItemQuantitySelector"
import { formatCurrency } from "../../../utilities"

const ItemCart = ({ product }) => {

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
       <ItemQuantitySelector />
      </Col>
    </Row>
  </ListGroupItem>

  );
}

export { ItemCart }