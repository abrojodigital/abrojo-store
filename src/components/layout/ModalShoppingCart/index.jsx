import ItemCart from "./ItemCart"

const ModalShoppingCart = ({products}) => {

  return (
    <div className="offcanvas offcanvas-end" id="modalShoppingCart" tabindex="-1" role="dialog" aria-hidden="true">

      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
        <i className="fe fe-x" aria-hidden="true"></i>
      </button>

      <div className="offcanvas-header lh-fixed fs-lg">
        <strong className="mx-auto">Su carrito </strong>
      </div>

      <ul className="list-group list-group-lg list-group-flush">
        <ItemCart product={products[4]} />
        <ItemCart product={products[2]} />
        <ItemCart product={products[3]} />

      </ul>

      <div className="offcanvas-footer justify-between lh-fixed fs-sm bg-light mt-auto">
        <strong>Subtotal</strong> <strong className="ms-auto">$00.00</strong>
      </div>

      <div className="offcanvas-body">
        <a className="btn w-100 btn-dark" href="#...">Continuar al Checkout</a>
        <a className="btn w-100 btn-outline-dark mt-2" href="#...">Ver Carito</a>
      </div>

      <div className="d-none">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
          <i className="fe fe-x" aria-hidden="true"></i>
        </button>

        <div className="offcanvas-header lh-fixed fs-lg">
          <strong className="mx-auto">Su carrito ()</strong>
        </div>

        <div className="offcanvas-body flex-grow-0 my-auto">
          <h6 className="mb-7 text-center">Su carrito está vació 😞</h6>
          <a className="btn w-100 btn-outline-dark" href="#!">
            Continuar comprando
          </a>
        </div>
      </div>
    </div>
  )
}

export default ModalShoppingCart