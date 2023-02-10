import { Button } from "react-bootstrap"
import { useShoppingCart } from "../../../context/ShoppingCartContext"

const CartWidget = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <>
      {/* { cartQuantity > 0 && (
      <a className="nav-link" data-bs-toggle="offcanvas" onClick={openCart} href="#">
      <span data-cart-items={cartQuantity}>
        <i className="fe fe-shopping-cart"></i>
      </span>
    </a>
    )} */}
    {cartQuantity > 0 && (
        <Button
          onClick={openCart}
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          className="rounded-circle btn-light">
          <i className="fe fe-shopping-cart"></i>
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%,25%)"
            }}
          >
            {cartQuantity}
          </div>
        </Button>)}
    </>
  )
}

export { CartWidget }