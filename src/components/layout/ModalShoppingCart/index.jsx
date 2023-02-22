import { useState, useEffect } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { formatCurrency } from "../../../utilities";
import { ItemCart, Spinner } from "../../../components"

const ModalShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems, getTotalCart } = useShoppingCart()
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    setIsLoading(false);
    getTotalCart(cartItems).then(data => setTotal(data))
  }, [cartItems]);

  const renderCart = () => (
    <Offcanvas.Body>
      <Stack gap={3}>
        {cartItems.map((cartItem) => (
          <ItemCart
            key={`${cartItem.id}-${cartItem.size}`}
            id={cartItem.id}
            size={cartItem.size}
            quantity={cartItem.quantity}
          />
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
