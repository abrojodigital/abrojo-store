import { useState, useEffect } from 'react'
import { ItemDetailContainer } from '../..'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Card } from 'react-bootstrap'
import { productsService } from '../../../utils'

const ItemListContainer = ({ prodId }) => {
  const [product, setProduct] = useState({})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    productsService.get(prodId).then(data => setProduct(data))
  }, [prodId])

  return (
    <Card>
    <Card.Header>
      <Card.Title>$ {product.price}</Card.Title>
    </Card.Header>
    <Card.Img src={product.img} className="card-img-top" alt={product.product} />
      <Card.Body>
        <Card.Title >{product.product}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary" onClick={handleShow} className="me-2 btn-dark">
          Ver Ahora
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{product.product}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ItemDetailContainer product={product} />
          </Offcanvas.Body>
        </Offcanvas>
      </Card.Body>
    </Card>
  )
}

export { ItemListContainer }
