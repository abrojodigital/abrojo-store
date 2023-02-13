import { Card, Button } from "react-bootstrap"
import { useShoppingCart } from "../../../context/ShoppingCartContext"
import { formatCurrency } from "../../../utilities"

const ItemDetailContainer = ({ product }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(product.id);
  return (

    <Card>
      <Card.Title>
        {formatCurrency(product.price)}
      </Card.Title>
      <Card.Img src={product.img} alt={product.title} />
      <Card.Body>
        <Card.Text>{product.description}</Card.Text>

        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => increaseCartQuantity(product.id)}
            >
              <svg className="mb-1" fill="white" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg> Agregar al Carrito
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-cetner justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button variant="outline-dark" onClick={() => decreaseCartQuantity(product.id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span>
                  En el carrito
                </div>
                <Button variant="outline-dark" onClick={() => increaseCartQuantity(product.id)}>+</Button>
              </div>
              <Button
                variant="dark"
                size="sm"
                onClick={() => removeFromCart(product.id)}
              >
                Eliminar
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export { ItemDetailContainer }
