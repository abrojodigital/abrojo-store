import { Card } from "react-bootstrap"
import AddItemButton from "./AddItemButton"
import ItemQuantitySelector from "./ItemQuantitySelector"

const Description = ({ product }) => {
  return (
    <Card>
      <Card.Title>
        $ {product.price}
      </Card.Title>
      <Card.Img src={product.img} alt={product.product} />
      <Card.Body>
        <Card.Text>{product.description}</Card.Text>
        <ItemQuantitySelector />
        <AddItemButton id={product.id}/>
      </Card.Body>
    </Card>
  )
}

export default Description