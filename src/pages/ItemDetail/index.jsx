import { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import arrProducts from "../../Data/products.json";

const ItemDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = arrProducts.find(p => p.id === parseInt(id));
      setTimeout(() => {
        setProduct(data);
      }, 500);
    };
    fetchData();
  }, [id]);

  return (
    <Container className="my-5">
      <Card style={{ width: "30rem" }}>
        <Card.Header className="align-right">$ {product.price}</Card.Header>
        <Card.Img src={product.img} alt={product.product} />
        <Card.Body>
          <Card.Title className="text-center">{product.product}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Categoría: {product.categoryId}</Card.Subtitle>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export { ItemDetail };
