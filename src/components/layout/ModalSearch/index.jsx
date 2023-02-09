import { useState } from "react";
import { Form, Container, Row, Col, ListGroup } from 'react-bootstrap';
import ItemResult from "./ItemResult";

const ModalSearch = ({ products }) => {
  const [value, setValue] = useState();

  const getFilteredProducts = () => {
    const id = value;
    const res = (id !== "todas" ? products.filter(product => product.categoryId === id ) : products)
    return res;
  }

  return (
    <Container className="offcanvas offcanvas-end" id="modalSearch" tabIndex="1" role="dialog" aria-hidden="true">
      <Row>
        <Col>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="fe fe-x" aria-hidden="true"></i>
          </button>

          <h3 className="offcanvas-header lh-fixed fs-lg text-center">Buscador de Productos</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form>
            <Form.Group>
              <h5>Categoría a filtrar</h5>
              <Form.Control as="select"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                }}
              >
                <option value="todas">Todas las categorías</option>
                <option value="camisas">Camisas</option>
                <option value="remeras">Camisetas</option>
                <option value="superior">Prenda Superior</option>
                <option value="pantalones">Pantalones | Bermudas</option>
                <option value="zapatos">Zapatos</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>Resultados de la búsqueda:</p>
          <ListGroup>
            {
              getFilteredProducts().map((product, index) => (
                <ItemResult key={index} product={product} />))
            }
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col className="d-none">
          <p className="mb-3 fs-sm text-center">
            No se encontraron resultados
          </p>
          <p className="mb-0 fs-sm text-center">
            😞
          </p>
        </Col>
      </Row>

    </Container>
  )
}

export { ModalSearch };
