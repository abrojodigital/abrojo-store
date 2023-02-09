import { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import arrProducts from "../../Data/products.json";

const ItemDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const fetchData = async () => {
    const data = arrProducts.find(p => p.id === parseInt(id));
    setTimeout(() => {
      setProduct(data);
    }, 500);
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <Container className="my-5" style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "30rem" }}>
        <Card.Header className="align-right">$ {product.price}</Card.Header>
        <Card.Title className="text-center">{product.product}</Card.Title>
        <Card.Img src={product.img} alt={product.product} />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Categoría: {product.categoryId}</Card.Subtitle>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="dark" style={{ float: "left" }}>Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export { ItemDetail };
