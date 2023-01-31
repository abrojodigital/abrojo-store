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
        <p className="card-text">{product.description}</p>
        <ItemQuantitySelector />
        <AddItemButton />
      </Card.Body>
    </Card>
  )
}

export default Description