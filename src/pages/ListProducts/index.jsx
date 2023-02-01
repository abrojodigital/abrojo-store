import { useState, useEffect } from "react";
import { getAllProducts } from "../../utils";
import { ItemListContainer, Spinner } from "../../components";
import { Container, Row, Col, Form } from 'react-bootstrap';

const ListProducts = () => {
  const [isLoading, setisLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [value, setValue] = useState('');

  const getFilteredProducts = () => {
    const res = products.filter( product => product.categoryId === value || value === "0")
    return res
  }

  useEffect(() => {
    getAllProducts()
      .then(data => setProducts(data))
      .then(_ => setValue("0"))
      .then(_ => setisLoading(false))
  }, [])

  return (
    <Container className="my-5">

      <Form>
        <Form.Group>
          <h3 srOnly>Categoría a filtrar</h3>
          <Form.Control as="select"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          >
            <option value="0">Todas las categorías</option>
            <option value="1">Camisas</option>
            <option value="5">Camisetas</option>
            <option value="3">Prenda Superior</option>
            <option value="4">Pantalones | Bermudas</option>
            <option value="2">Zapatos</option>
          </Form.Control>
        </Form.Group>
      </Form>

      <Container className="py-12">
        {isLoading ? <Spinner /> :
          <Row>
            {
              getFilteredProducts().map((product, index) => (
              <Col sm={4} key={index}>
                <ItemListContainer product={product} caption="Ver ahora" />
              </Col>
            )
            )}
          </Row>}

      </Container>

    </Container>
  );
}

export { ListProducts }