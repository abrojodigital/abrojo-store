import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import arrProducts from "../../Data/products.json"


const ItemDetail = () => {
  const [product, setProduct] = useState({})

  const {id} = useParams()

  useEffect(() => {
    const promesa = new Promise((res) => {
      setTimeout(() => {
        res(arrProducts.find(p => p.id === id))
      }, 500)
    })
    promesa
      .then(data => setProduct(data))
  }, [])


  return (
    <Card>
      <Card.Title>
        $ {product.price}
      </Card.Title>
      <Card.Img src={product.img} alt={product.product} />
      <Card.Body>
        <p className="card-text">{product.description}</p>
      </Card.Body>
    </Card>
  )
}

export { ItemDetail }