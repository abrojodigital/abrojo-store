import { useState, useEffect } from "react";
import { ItemListContainer, Spinner, Pagination } from "../..";
import { Container, Row, Col } from 'react-bootstrap';
import { productsService } from "../../../services/Products";

const ITEMS_PER_PAGE = 6

const HomeItemsList = () => {
  const [isLoading, setisLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    productsService.getAll()
      .then(data => setProducts(data))
      .then(_ => setisLoading(false))
  }, [])

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="home" id="Home">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Container className="py-12">
            <Pagination
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={products.length}
              paginate={paginate}
              currentPage={currentPage}
            />
            <Row>
              {currentItems.map((product, index) => (
                <Col sm={4} key={index}>
                  <ItemListContainer
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    img={product.img}
                  />
                </Col>
              ))}
            </Row>
            <Pagination
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={products.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </Container>
        </>
      )}
    </div>
  );
}

export { HomeItemsList };
