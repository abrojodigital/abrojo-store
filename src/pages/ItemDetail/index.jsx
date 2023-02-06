import { useState, useEffect } from "react"
import { Container, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import arrProducts from "../../Data/products.json"


const ItemDetail = () => {
  const [product, setProduct] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const promesa = new Promise((res) => {
      setTimeout(() => {
        res(arrProducts.find(p => p.id === parseInt(id)))
      }, 500)
    })
    promesa
      .then(data => setProduct(data))
  }, [])


  return (
    <Container className="my-5">
      <Card>
        <Card.Title>
          $ {product.price}
        </Card.Title>
        <Card.Img src={product.img} alt={product.product} />
        <Card.Body>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export { ItemDetail }