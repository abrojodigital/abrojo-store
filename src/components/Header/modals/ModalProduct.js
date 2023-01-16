function ModalProduct() {
  return (
    <div className="modal fade" id="modalProduct" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
      <div className="modal-content">


        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <i className="fe fe-x" aria-hidden="true"></i>
        </button>


        <div className="container-fluid px-xl-0">
          <div className="row align-items-center mx-xl-0">
            <div className="col-12 col-lg-6 col-xl-5 py-4 py-xl-0 px-xl-0">

              <img className="img-fluid" src="assets/img/product-7.jpg" alt="..." />


              <a className="btn btn-sm w-100 btn-primary" href="#">
                More Product Info <i className="fe fe-info ms-2"></i>
              </a>

            </div>
            <div className="col-12 col-lg-6 col-xl-7 py-9 px-md-9">


              <h4 className="mb-3">Leather Sneakers</h4>


              <div className="mb-7">
                <span className="h5">$85.00</span>
                <span className="fs-sm">(In Stock)</span>
              </div>


              <form>
                <div className="form-group">


                  <p>
                    Color: <strong id="modalProductColorCaption">White</strong>
                  </p>


                  <div className="mb-8 ms-n1">
                    <div className="form-check form-check-inline form-check-img">
                      <input type="radio" className="form-check-input" id="modalProductColorOne" name="modalProductColor" data-toggle="form-caption" data-target="#modalProductColorCaption" value="White" style={{ backgroundImage: "url(assets/img/product-7.jpg)" }} checked />
                    </div>
                    <div className="form-check form-check-inline form-check-img">
                      <input type="radio" className="form-check-input" id="modalProductColorTwo" name="modalProductColor" data-toggle="form-caption" data-target="#modalProductColorCaption" value="Black" style={{ backgroundImage: "url(assets/img/product-49.jpg)" }} />
                    </div>
                  </div>

                </div>
                <div className="form-group">


                  <p>
                    Size: <strong><span id="modalProductSizeCaption">7.5</span> US</strong>
                  </p>


                  <div className="mb-2">
                    <div className="form-check form-check-inline form-check-size mb-2">
                      <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeOne" value="6" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                      <label className="form-check-label" for="modalProductSizeOne">6</label>
                    </div>
                    <div className="form-check form-check-inline form-check-size mb-2">
                      <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeTwo" value="6.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled />
                      <label className="form-check-label" for="modalProductSizeTwo">6.5</label>
                    </div>
                    <div className="form-check form-check-inline form-check-size mb-2">
                      <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeThree" value="7" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                      <label className="form-check-label" for="modalProductSizeThree">7</label>
                    </div>
                    <div className="form-check form-check-inline form-check-size mb-2">
                      <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeFour" value="7.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" checked />
                      <label className="form-check-label" for="modalProductSizeFour">7.5</label>
                    </div>
                    <div className="form-check form-check-inline form-check-size mb-2">
                      <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeFive" value="8" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                      <label className="form-check-label" for="modalProductSizeFive">8</label>
                    </div>
                    <div className="form-check form-check-inline form-check-size mb-2">
                      <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeSix" value="8.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                      <label className="form-check-label" for="modalProductSizeSix">8.5</label>
                    </div>
                    <div className="form-check form-check-inline form-check-size mb-2">
                      <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeSeven" value="9" data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled />
                      <label className="form-check-label" for="modalProductSizeSeven">9</label>
                    </div>
                    <div className="form-check form-check-inline form-check-size mb-2">
                      <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeEight" value="9.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled />
                      <label className="form-check-label" for="modalProductSizeEight">9.5</label>
                    </div>
                    <div className="form-check form-check-inline form-check-size mb-2">
                      <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeNine" value="10" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                      <label className="form-check-label" for="modalProductSizeNine">10</label>
                    </div>
                    <div className="form-check form-check-inline form-check-size mb-2">
                      <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeTen" value="10.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                      <label className="form-check-label" for="modalProductSizeTen">10.5</label>
                    </div>
                    <div className="form-check form-check-inline form-check-size mb-2">
                      <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeEleven" value="11" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                      <label className="form-check-label" for="modalProductSizeEleven">11</label>
                    </div>
                    <div className="form-check form-check-inline form-check-size mb-2">
                      <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeTwelve" value="12" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                      <label className="form-check-label" for="modalProductSizeTwelve">12</label>
                    </div>
                    <div className="form-check form-check-inline form-check-size mb-2">
                      <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeThirteen" value="13" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                      <label className="form-check-label" for="modalProductSizeThirteen">13</label>
                    </div>
                    <div className="form-check form-check-inline form-check-size mb-2">
                      <input type="radio" className="form-check-input" name="modalProductSize" id="modalProductSizeFourteen" value="14" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                      <label className="form-check-label" for="modalProductSizeFourteen">14</label>
                    </div>
                  </div>

                </div>
                <div className="form-group mb-0">
                  <div className="row gx-5">
                    <div className="col-12 col-lg-auto">


                      <select className="form-select mb-2">
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>

                    </div>
                    <div className="col-12 col-lg">


                      <button type="submit" className="btn w-100 btn-dark mb-2">
                        Add to Cart <i className="fe fe-shopping-cart ms-2"></i>
                      </button>

                    </div>
                    <div className="col-12 col-lg-auto">


                      <button className="btn btn-outline-dark w-100 mb-2" data-toggle="button">
                        Wishlist <i className="fe fe-heart ms-2"></i>
                      </button>

                    </div>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default ModalProduct