import { useState, useEffect } from "react"
import { Container, Card, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utilities"
import { productsService } from '../../services/Products'

const ItemDetail = () => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    productsService.get(id)
      .then(data => setProduct(data))
  }, [])

  const quantity = getItemQuantity(product.id)


  return (
    <Container className="my-5" style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "30rem" }}>
        <Card.Header className="align-right">{formatCurrency(product.price)}</Card.Header>
        <Card.Title className="text-center">{product.title}</Card.Title>
        <Card.Img src={product.img} alt={product.title} />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Categoría: {product.categoryId}</Card.Subtitle>
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
    </Container>
  );
};

export { ItemDetail };
