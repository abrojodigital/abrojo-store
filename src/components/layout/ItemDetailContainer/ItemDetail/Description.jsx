import AddItemButton from "./AddItemButton"
import ItemQuantitySelector from "./ItemQuantitySelector"

const Description = ({ product }) => {
  return (
    <div className="card">
      <h3 className="card-title">$ {product.price}</h3>

      <img src={product.img} className="card-img-top" alt={product.product} />
      <div className="card-body">
        {/* <h4 className="card-title">{product.product}</h4> */}
        <p className="card-text">{product.description}</p>
        <ItemQuantitySelector />
        <AddItemButton />
      </div>
    </div>
  )
}

export default Description