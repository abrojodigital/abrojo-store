import { useState } from 'react'
import { ItemDetailContainer } from '../..'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Card } from 'react-bootstrap'
import { formatCurrency } from "../../../utilities"

const ItemListContainer = ({ id, title, description, price, img, onClick }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card onClick = {onClick}>
    <Card.Header>
      <Card.Title>{formatCurrency(price)}</Card.Title>
    </Card.Header>
    <Card.Img src={img} className="card-img-top" alt={title} />
      <Card.Body>
        <Card.Title >{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={handleShow} className="me-2 btn-dark">
          Ver Ahora
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{title}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ItemDetailContainer product={{ id, title, description, price, img }} />
          </Offcanvas.Body>
        </Offcanvas>
      </Card.Body>
    </Card>
  )
}

export { ItemListContainer }
