import { useState, useEffect } from "react"
import { ItemListContainer, Spinner } from "../../components"
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useParams, useNavigate } from "react-router-dom"
import { productsService, categoriesService } from "../../services"

const ListProducts = () => {
  const { catId } = useParams()
  const [isLoading, setisLoading] = useState(true)
  const [error, setError] = useState(null)
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoadingCats, setisLoadingCats] = useState(true)
  const [value, setValue] = useState(catId !== undefined ? catId : "todas")

  const navigate = useNavigate()
  // const [search, setSearch] = useSearchParams() // ya lo usaré

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (value !== "todas") {
          data = await productsService.getByCategory(value);
        } else {
          data = await productsService.getAll();
        }
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, [value]);

  useEffect(() => {
    categoriesService.getAll()
      .then(data => {
        data.unshift({id:"SOLOPARALAPOPU", name:"todas", description:"Todas las categorías"})
        setCategories(data)
      })
      .then(_ => setisLoadingCats(false))
    }, [])

    console.log(categories)

  if (error) {
    return (
      <Container className="my-5">
        <h3>Hubo un error al intentar cargar los artículos</h3>
        <p>{error}</p>
      </Container>
    )
  }

  return (
    <Container className="my-5">
      {isLoadingCats ? <Spinner /> :
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
            {
              categories.map( (category) => {
                return (
                  <option value={category.name}>{category.description}</option>
                )
              })
            }
            </Form.Control>
          </Form.Group>
        </Form>
      }
      <Container className="py-12">
        {isLoading ? <Spinner /> :
          <Row md={2} xs={1} lg={3} className="g-3">
            {
              products.map(({ id, title, description, price, img }, index) => (
                <Col key={index} sm={4}>
                  <ItemListContainer
                    id={id}
                    product={title}
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