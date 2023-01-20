const CartWidget = ({ items }) => {
  return (
    <a className="nav-link" data-bs-toggle="offcanvas" href="#modalShoppingCart">
      <span data-cart-items={items}>
        <i className="fe fe-shopping-cart"></i>
      </span>
    </a>
  )
}

export default CartWidget;