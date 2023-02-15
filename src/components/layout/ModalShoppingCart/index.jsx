import { useState, useEffect } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { formatCurrency } from "../../../utilities";
import { ItemCart, Spinner } from "../../../components"
import { productsService } from "../../../services/Products";
import { Link } from "react-router-dom"

const ModalShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart()
  const [total, setTotal] = useState(0)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      const data = await productsService.getAll();
      setProducts(data);
      setIsLoading(false);
      setTotal(productsService.getTotal(data, cartItems));
    };

    fetchData();
  }, [cartItems]);

  const renderCart = () => (
    <Offcanvas.Body>
      <Stack gap={3}>
        {cartItems.map((cartItem) => (
          <ItemCart key={cartItem.id} {...cartItem} />
        ))}
        <div className="ms-auto fw-bold fs-5">
          Total {formatCurrency(total)}
        </div>
        <Button href="/checkout" variant="dark">Checkout</Button>  
      </Stack>
    </Offcanvas.Body>
  );

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito de puro estilo</Offcanvas.Title>
      </Offcanvas.Header>
      {isLoading && <Spinner />}
      {!isLoading && renderCart()}
    </Offcanvas>
  );
};

export { ModalShoppingCart };
