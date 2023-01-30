import { useState } from 'react'
import { ItemDetailContainer } from '../..'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

const ItemListContainer = ({ product, caption }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card">
      <h5 className="card-title">$ {product.price}</h5>
      <img src={product.img} className="card-img-top" alt={product.product} />
      <div className="card-body">
        <h5 className="card-title">{product.product}</h5>
        <p className="card-text">{product.description}</p>
        {/* <a className="btn btn-link px-0 text-body" href="#itemDetailContainer">
          {caption}<i className="fe fe-arrow-right ms-2"></i>
        </a> */}
  
        <Button variant="primary" onClick={handleShow} className="me-2 btn-dark">
        {caption}
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{product.product}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ItemDetailContainer product = {product}/>
        </Offcanvas.Body>
      </Offcanvas>

      </div>

    </div>
  )
}

export { ItemListContainer }
