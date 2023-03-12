import { useState, useEffect } from "react";
import { ItemListContainer, Spinner, Pagination } from "../..";
import { Container, Row, Col } from 'react-bootstrap';
import { productsService } from "../../../services/Products";

const ITEMS_PER_PAGE = 6

// Consejo:
// --------
// El componente esta muy bien pero yo hubiese armado algo mas genérico para poder reutilziarlo
// Por ej: ItemsGrid y que reciba como props { items, qty, cols, isLoading, onItemClicked, btnText }.
// items: traes todos los productos a mostrar.
// qty: cuantos mostrás por pagina.
// cols: para tener mas opciones de visualización, podrías recibir un entero y en base a ese valor, 
// definir el sm.
// isLoading: como el get de los products lo haces en el parent, vas a necesitar avisarle a este 
// componente cuando esta en loading.
// onItemClicked: reaccionás al evento de click del botón del item y en el parent decidís que haces 
// (Ver ahora, agregar, ver detalle, etc)

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
