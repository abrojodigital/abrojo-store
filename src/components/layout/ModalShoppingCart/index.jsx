import { Button, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { formatCurrency } from "../../../utilities";
import { ItemCart } from "../../../components"
import arrProducts from "../../../Data/products.json"

const checkout = total => {
    alert(`De acá vamos al checkout con un total de: ${total}`);
};

const getTotal = cartItems =>
    cartItems.reduce(
        (total, cartItem) =>
            total +
            (
                arrProducts.find(product => product.id === cartItem.id)?.price ||
                0
            ) *
            cartItem.quantity,
        0
    );

const ModalShoppingCart = ({ isOpen }) => {
    const { closeCart, cartItems } = useShoppingCart();
    const total = getTotal(cartItems);

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito de puro estilo</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(cartItem => (
                        <ItemCart key={cartItem.id} {...cartItem} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(total)}
                    </div>
                </Stack>
                <Button onClick={() => checkout(total)}>Checkout</Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};


export { ModalShoppingCart }