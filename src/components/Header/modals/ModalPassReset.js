function ModalPassReset() {
  return (
    <div className="modal fade" id="modalPasswordReset" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">


        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <i className="fe fe-x" aria-hidden="true"></i>
        </button>


        <div className="modal-header lh-fixed fs-lg">
          <strong className="mx-auto">Forgot Password?</strong>
        </div>


        <div className="modal-body text-center">


          <p className="mb-7 fs-sm text-gray-500">
            Please enter your Email Address. You will receive a link
            to create a new password via Email.
          </p>


          <form>


            <div className="form-group">
              <label className="visually-hidden" for="modalPasswordResetEmail">
                Email Address *
              </label>
              <input className="form-control form-control-sm" id="modalPasswordResetEmail" type="email" placeholder="Email Address *" required />
            </div>


            <button className="btn btn-sm btn-dark">
              Reset Password
            </button>

          </form>

        </div>

      </div>

    </div>
  </div>
  )
}

export default ModalPassReset