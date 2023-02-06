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

  useEffect(() => {
    const promesa = new Promise((res) => {
      setTimeout(() => {
        res(catId ? arrProducts.filter(p => p.categoryId === catId) : arrProducts)
      }, 500)
    })
    promesa
      .then(data => setProducts(data))
      .then(_ => setisLoading(false))
  }, [catId])

  useEffect(() => {
    const promesa = new Promise((res) => {
      setTimeout(() => {
        res(value ? arrProducts.filter(p => p.categoryId === value) : arrProducts)
      }, 500)
    })
    promesa
      .then(data => setProducts(data))
      .then(_ => setisLoading(false))
  }, [value])

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
          <Row>
            {
              products.map(({ id, product, description, price, img }, index) => (
                <Col sm={4} key={index}>
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