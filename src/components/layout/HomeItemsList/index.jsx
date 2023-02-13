import { useState, useEffect } from "react";
import { ItemListContainer, Spinner } from "../..";
import arrProducts from "../../../Data/products.json"
import { Container, Row, Col } from 'react-bootstrap';

const HomeItemsList = () => {
  const [isLoading, setisLoading] = useState(true);
  const [products, setProducts] = useState([])

  useEffect(() => {
    const promesa = new Promise((res) => {
      setTimeout(() => {
        res(arrProducts)
      }, 500)
    })
    promesa
      .then(data => setProducts(data))
      .then( _ => setisLoading(false))
}, [])

  return (
    <div className="home" id="Home">
      {/* Esto a futuro debe leerse de la bbdd y mostrar paginando */}
      {
        isLoading ?
          <Spinner />
        :
        <Container className="py-12">
        <Row>
          {products.map((product, index) => (
            index < 3 ? (
              <Col sm={4} key={index}>
              <ItemListContainer
                  id={product.id}
                  product={product.title}
                  description={product.description}
                  price={product.price}
                  img={product.img}
                 />
              </Col>
            ) : null
          ))}
        </Row>
        <Row className="justify-content-center pt-12">
          <Col xs={12} md={10}>
            <Row className="align-items-center">
              {products.map((product, index) => (
                index >= 3 && index < 5 ? (
                  <Col xs={6} key={index}>
                  <ItemListContainer
                  id={product.id}
                  product={product.title}
                  description={product.description}
                  price={product.price}
                  img={product.img}
                 />
                  </Col>
                ) : null
              ))}
            </Row>
          </Col>
        </Row>
        <Row>
          {products.map((product, index) => (
            index >= 5 && index < 8 ? (
              <Col sm={4} key={index}>
              <ItemListContainer
                  id={product.id}
                  product={product.title}
                  description={product.description}
                  price={product.price}
                  img={product.img}
                 />
              </Col>
            ) : null
          ))}
        </Row>
      </Container>
      }
    </div>
  );
}

export { HomeItemsList }