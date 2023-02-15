import { useState, useEffect } from "react"
import { Card, Button, Spinner } from "react-bootstrap"
import { useShoppingCart } from "../../../context/ShoppingCartContext"
import { productsService } from "../../../services/Products";
import { formatCurrency } from "../../../utilities"


const ItemDetailContainer = ({ id }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productsService.get(id)
      .then(data => setProduct(data))
      .finally(() => setIsLoading(false))
  }, [id]);

  const quantity = getItemQuantity(product.id);
  const isInCart = quantity > 0;

  return (
    <>
      {isLoading && <Spinner animation="border" />}
      {!isLoading && (
        <Card>
          <Card.Img variant="top" src={product.img} alt={product.title} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{formatCurrency(product.price)}</Card.Subtitle>
            <Card.Text>{product.description}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Button
                variant={isInCart ? "outline-secondary" : "secondary"}
                onClick={() => increaseCartQuantity(product.id)}
              >
                {isInCart ? `Agregar otro (${quantity})` : "Agregar al Carrito"}
              </Button>
              {isInCart && (
                <div className="d-flex align-items-center">
                  <Button variant="outline-dark" onClick={() => decreaseCartQuantity(product.id)}>-</Button>
                  <div className="mx-2">{quantity}</div>
                  <Button variant="outline-dark" onClick={() => increaseCartQuantity(product.id)}>+</Button>
                  <Button variant="outline-danger" className="ms-2" onClick={() => removeFromCart(product.id)}>Eliminar</Button>
                </div>
              )}
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  )
}

export { ItemDetailContainer }
