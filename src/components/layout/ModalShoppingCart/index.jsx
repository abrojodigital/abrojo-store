import { useState, useEffect } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { formatCurrency } from "../../../utilities";
import { ItemCart, Spinner } from "../../../components"
import { productsService } from "../../../services/Products";

const checkout = total => {
    alert(`De acá vamos al checkout con un total de: ${total}`);
};

const ModalShoppingCart = ({ isOpen }) => {
    const { closeCart, cartItems } = useShoppingCart()
    const [total, setTotal] = useState(0)

    const [products, setProducts] = useState([])
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        productsService.getAll()
            .then(data => setProducts(data))
            .then(_ => setisLoading(false))
            .then(_ => setTotal(productsService.getTotal(products, cartItems)))
    }, [])

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito de puro estilo</Offcanvas.Title>
            </Offcanvas.Header>
            {
                isLoading ? <Spinner /> :
                    <>
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
                    </>
            }
        </Offcanvas>
    );
};


export { ModalShoppingCart }