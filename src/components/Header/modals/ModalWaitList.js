function ModalWaitList() {
  return ( 
    <div className="modal fade" id="modalWaitList" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">


        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <i className="fe fe-x" aria-hidden="true"></i>
        </button>


        <div className="modal-header lh-fixed fs-lg">
          <strong className="mx-auto">Wait List</strong>
        </div>


        <div className="modal-body">
          <div className="row mb-6">
            <div className="col-12 col-md-3">


              <a href="#">
                <img className="img-fluid mb-7 mb-md-0" src="assets/img/product-6.jpg" alt="..." />
              </a>

            </div>
            <div className="col-12 col-md-9">


              <p>
                <a className="fw-bold text-body" href="#">Cotton floral print Dress</a>
              </p>


              <div className="form-check form-check-inline form-check-size mb-2">
                <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeOne" value="6" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                <label className="form-check-label" for="modalWaitListSizeOne">3XS</label>
              </div>
              <div className="form-check form-check-inline form-check-size mb-2">
                <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeTwo" value="6.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                <label className="form-check-label" for="modalWaitListSizeTwo">2XS</label>
              </div>
              <div className="form-check form-check-inline form-check-size mb-2">
                <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeThree" value="7" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                <label className="form-check-label" for="modalWaitListSizeThree">XS</label>
              </div>
              <div className="form-check form-check-inline form-check-size mb-2">
                <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeFour" value="7.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" checked />
                <label className="form-check-label" for="modalWaitListSizeFour">S</label>
              </div>
              <div className="form-check form-check-inline form-check-size mb-2">
                <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeFive" value="8" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                <label className="form-check-label" for="modalWaitListSizeFive">M</label>
              </div>
              <div className="form-check form-check-inline form-check-size mb-2">
                <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeSix" value="8.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                <label className="form-check-label" for="modalWaitListSizeSix">LG</label>
              </div>
              <div className="form-check form-check-inline form-check-size mb-2">
                <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeSeven" value="9" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                <label className="form-check-label" for="modalWaitListSizeSeven">XL</label>
              </div>
              <div className="form-check form-check-inline form-check-size mb-2">
                <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeEight" value="9.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                <label className="form-check-label" for="modalWaitListSizeEight">2XL</label>
              </div>
              <div className="form-check form-check-inline form-check-size mb-2">
                <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeNine" value="10" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                <label className="form-check-label" for="modalWaitListSizeNine">3XL</label>
              </div>
              <div className="form-check form-check-inline form-check-size mb-2">
                <input type="radio" className="form-check-input" name="modalWaitListSize" id="modalWaitListSizeTen" value="10.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                <label className="form-check-label" for="modalWaitListSizeTen">4XL</label>
              </div>

            </div>

          </div>
          <div className="row">
            <div className="col-12">


              <p className="fs-sm text-center text-gray-500">
                Justo ut diam erat hendrerit morbi porttitor,
                per eu curabitur diam sociis.
              </p>

            </div>
          </div>
          <div className="row gx-5 mb-2">
            <div className="col-12 col-md-6">


              <div className="form-group">
                <label className="visually-hidden" for="listName">Your Name</label>
                <input className="form-control" id="listName" type="text" placeholder="Your Name *" required />
              </div>

            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label className="visually-hidden" for="listEmail">Your Name</label>
                <input className="form-control" id="listEmail" type="email" placeholder="Your Emai *" required />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <button className="btn btn-dark" type="submit">Subscribe</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
   );
}

export default ModalWaitList;