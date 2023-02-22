import { useState, useEffect } from "react"
import { Container, Card, Button, Form } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utilities"
import { productsService } from '../../services/Products'
import { Spinner } from "../../components"

const ItemDetail = () => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSize, setSelectedSize] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    productsService.get(id)
      .then(data => setProduct(data))
      .finally(() => setIsLoading(false))
  }, [id])

  const quantity = getItemQuantity(product.id, selectedSize);
  const isInCart = quantity > 0;

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  }

  return (
    <>
      {isLoading && <Spinner animation="border" />}
      {!isLoading && (
        <Container className="my-5" style={{ display: "flex", justifyContent: "center" }}>
          <Card style={{ width: "30rem" }}>
            <Card.Title className="text-center">{product.title}</Card.Title>
            <Card.Header className="align-right">{formatCurrency(product.price)}</Card.Header>
            <Card.Img src={product.img} alt={product.title} width="100%" />
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">Categoría: {product.categoryId}</Card.Subtitle>
              <Card.Text>{product.description}</Card.Text>
              <div className="mt-3 mb-3">
                <Form.Label>Talla:</Form.Label>
                <Form.Select value={selectedSize} onChange={handleSizeChange}>
                  <option value={null}>Seleccionar talla</option>
                  {Object.keys(product.stockBySize).map(size => (
                    <option key={size} value={size} disabled={product.stockBySize[size] === 0}>{size}</option>
                  ))}
                </Form.Select>
              </div>
              <div className="d-flex justify-content-between align-items-center">

                <Button
                  variant={isInCart ? "outline-secondary" : "secondary"}
                  onClick={() => increaseCartQuantity(product.id, selectedSize)}
                  disabled={!selectedSize || product.stockBySize[selectedSize] === 0}
                >
                  {isInCart ? `Agregar otro (${quantity})` : "Agregar al Carrito"}
                </Button>
                {isInCart && (
                  <div className="d-flex align-items-center">
                    <Button variant="outline-dark" onClick={() => decreaseCartQuantity(product.id, selectedSize)}>-</Button>
                    <div className="mx-2">{quantity}</div>
                    <Button variant="outline-dark" onClick={() => increaseCartQuantity(product.id, selectedSize)}>+</Button>
                    <Button variant="outline-danger" className="ms-2" onClick={() => removeFromCart(product.id, selectedSize)}>Eliminar</Button>
                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        </Container>
      )}
    </>
  );
};

export { ItemDetail };
