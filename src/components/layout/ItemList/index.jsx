import { ItemListContainer, Banner } from "../../";
import { Container, Row, Col } from 'react-bootstrap';

const ItemList = ({ products }) => {

  return (
    <div className="home" id="Home">
      {/* Esto a futuro debe leerse de la bbdd y mostrar paginando */}
      <Container className="py-12">
        <Row>
          {products.map((product, index) => (
            index < 3 ? (
              <Col sm={4} key={index}>
                <ItemListContainer product={product} caption="Ver ahora" />
              </Col>
            ) : null
          ))}
        </Row>
        <Row className="justify-content-center pt-12">
          <Col xs={12} md={10}>
            <Row className="align-items-center">
              {products.map((product, index) => (
                index >= 3 && index < 5 ? (
                  <Col xs={6} key={index}>
                    <ItemListContainer product={product} caption="Ver ahora" />
                  </Col>
                ) : null
              ))}
            </Row>
          </Col>
        </Row>
        <Row>
          {products.map((product, index) => (
            index >= 5 && index < 8 ? (
              <Col sm={4} key={index}>
                <ItemListContainer product={product} caption="Ver ahora" />
              </Col>
            ) : null
          ))}
        </Row>
      </Container>

    </div>
  );
}

export { ItemList }