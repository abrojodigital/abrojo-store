import { useState, useEffect } from "react"
import arrProducts from "../../Data/products.json"
import { ItemListContainer, Spinner } from "../../components"
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useParams, useNavigate, useSearchParams } from "react-router-dom"

const ListProducts = () => {
  const { catId } = useParams()
  const [isLoading, setisLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [value, setValue] = useState(catId)

  const navigate = useNavigate()
  const [search, setSearch] = useSearchParams() // ya lo usaré

  const filteredProducts = value !== "todas" ? arrProducts.filter(p => p.categoryId === value) : arrProducts;

  useEffect(() => {
    setisLoading(true);
    (async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setProducts(filteredProducts);
      setisLoading(false);
    })();
  }, [value]);

  return (
    <Container className="my-5">
      <Form>
        <Form.Group>
          <h3>Categoría a filtrar</h3>
          <Form.Control as="select"
            value={value}
            onChange={(e) => {
              e.preventDefault()
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

      <Container className="py-12">
        {isLoading ? <Spinner /> :
          <Row md={2} xs={1} lg={3} className="g-3">
            {
              products.map(({ id, product, description, price, img }, index) => (
                <Col key={index} sm={4}>
                  <ItemListContainer
                    id={id}
                    product={product}
                    description={description}
                    price={price}
                    img={img}
                    onClick={() => navigate(`/item/${id}`)}
                  />
                </Col>
              )
              )}
          </Row>}
      </Container>
    </Container>
  );
}

export { ListProducts }