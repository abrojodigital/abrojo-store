import { useState } from 'react'
import { ItemDetailContainer } from '../..'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Card } from 'react-bootstrap'

const ItemListContainer = ({ id, product, description, price, img }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card>
    <Card.Header>
      <Card.Title>$ {price}</Card.Title>
    </Card.Header>
    <Card.Img src={img} className="card-img-top" alt={product} />
      <Card.Body>
        <Card.Title >{product}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={handleShow} className="me-2 btn-dark">
          Ver Ahora
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{product}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ItemDetailContainer product={{ id, product, description, price, img }} />
          </Offcanvas.Body>
        </Offcanvas>
      </Card.Body>
    </Card>
  )
}

export { ItemListContainer }
