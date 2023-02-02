import { Link } from "react-router-dom"

const ModalSideBar = () => {
  return (
    <div className="offcanvas offcanvas-end" id="modalSidebar" tabIndex="-1" role="dialog" aria-hidden="true">

        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
          <i className="fe fe-x" aria-hidden="true"></i>
        </button>

        <div className="offcanvas-body px-10 my-auto">
          <ul className="nav nav-vertical nav-unstyled fs-2" id="sidebarNav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/historia">
                Acerca de
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contactáctenos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Categorías
              </Link>
            </li>
          </ul>
        </div>

        <div className="moda-body px-10 py-9">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a className="text-gray-350" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-gray-350" href="#!">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-gray-350" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-gray-350" href="#!">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-gray-350" href="#!">
                <i className="fab fa-medium-m"></i>
              </a>
            </li>
          </ul>

          <div className="fs-xxs text-gray-350">
            © 2023 All rights reserved. Designed by Pablo Bersier.
          </div>

        </div>

      </div>
  )
}

export { ModalSideBar }