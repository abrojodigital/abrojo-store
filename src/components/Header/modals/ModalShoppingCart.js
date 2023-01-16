const ModalShoppingCart = () => {
  return (
    <div className="offcanvas offcanvas-end" id="modalShoppingCart" tabindex="-1" role="dialog" aria-hidden="true">


      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
        <i className="fe fe-x" aria-hidden="true"></i>
      </button>


      <div className="offcanvas-header lh-fixed fs-lg">
        <strong className="mx-auto">Your Cart (2)</strong>
      </div>


      <ul className="list-group list-group-lg list-group-flush">
        <li className="list-group-item">
          <div className="row align-items-center">
            <div className="col-4">


              <a href="#">
                <img className="img-fluid" src="assets/img/product-6.jpg" alt="..." />
              </a>

            </div>
            <div className="col-8">


              <p className="fs-sm fw-bold mb-6">
                <a className="text-body" href="#">Cotton floral print Dress</a> <br />
                <span className="text-muted">$40.00</span>
              </p>


              <div className="d-flex align-items-center">


                <select className="form-select form-select-xxs w-auto">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                </select>


                <a className="fs-xs text-gray-400 ms-auto" href="#!">
                  <i className="fe fe-x"></i> Remove
                </a>

              </div>

            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row align-items-center">
            <div className="col-4">


              <a href="#">
                <img className="img-fluid" src="assets/img/product-10.jpg" alt="..." />
              </a>

            </div>
            <div className="col-8">


              <p className="fs-sm fw-bold mb-6">
                <a className="text-body" href="#">Suede cross body Bag</a> <br />
                <span className="text-muted">$49.00</span>
              </p>


              <div className="d-flex align-items-center">


                <select className="form-select form-select-xxs w-auto">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                </select>


                <a className="fs-xs text-gray-400 ms-auto" href="#!">
                  <i className="fe fe-x"></i> Remove
                </a>

              </div>

            </div>
          </div>
        </li>
      </ul>


      <div className="offcanvas-footer justify-between lh-fixed fs-sm bg-light mt-auto">
        <strong>Subtotal</strong> <strong className="ms-auto">$89.00</strong>
      </div>


      <div className="offcanvas-body">
        <a className="btn w-100 btn-dark" href="#">Continue to Checkout</a>
        <a className="btn w-100 btn-outline-dark mt-2" href="#">View Cart</a>
      </div>


      <div className="d-none">


        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
          <i className="fe fe-x" aria-hidden="true"></i>
        </button>


        <div className="offcanvas-header lh-fixed fs-lg">
          <strong className="mx-auto">Your Cart (0)</strong>
        </div>


        <div className="offcanvas-body flex-grow-0 my-auto">


          <h6 className="mb-7 text-center">Your cart is empty 😞</h6>


          <a className="btn w-100 btn-outline-dark" href="#!">
            Continue Shopping
          </a>

        </div>

      </div>

    </div>
  )
}

export default ModalShoppingCart