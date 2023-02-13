import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItemResult = ({product}) => {
  return (
    <Row className="align-items-center position-relative mb-5">
      <Col xs={4} md={3}>
        <Image className="img-fluid" src={product.img} alt={product.title} />
      </Col>
      <Col className="position-static">
        <p className="mb-0 fw-bold">
          <Link className="stretched-link text-body" to="/products">{product.title}</Link> <br />
          <span className="text-muted">$ {product.price}</span>
        </p>
      </Col>
    </Row>
  );
}

export default ItemResult;