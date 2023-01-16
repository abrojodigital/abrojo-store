function ModalNewsLetterVl() {
  return (
    <div className="modal fade" id="modalNewsletterVertical" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">


            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close">
              <i className="fe fe-x" aria-hidden="true"></i>
            </button>


            <div className="modal-body mt-2 me-2 ms-2 py-10 bg-cover text-center text-white" style={{ backgroundImage: "url(assets/img/cover-26.jpg)" }}>


              <h4>Subscribe to Newsletter and get 15% Discount</h4>


              <p className="mb-0 fs-lg">
                On your next purchase
              </p>

            </div>


            <div className="modal-body py-9">


              <form>
                <div className="row gx-5">
                  <div className="col">


                    <label className="visually-hidden" for="modalNewsletterVerticalEmail">Enter Email *</label>
                    <input className="form-control form-control-sm" id="modalNewsletterVerticalEmail" type="email" placeholder="Enter Email *" />

                  </div>
                  <div className="col-auto">


                    <button className="btn btn-sm btn-dark" type="submit">
                      Subscribe
                    </button>

                  </div>
                </div>
              </form>

            </div>


            <div className="modal-footer justify-content-center pt-0">


              <div className="form-check">


                <input className="form-check-input" id="modalNewsletterVerticalCheckbox" type="checkbox" />


                <label className="form-check-label fs-xs" for="modalNewsletterVerticalCheckbox">
                  Prevent this Pop-up
                </label>

              </div>

            </div>

          </div>

        </div>
      </div>
  )
}

export default ModalNewsLetterVl