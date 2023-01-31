import {CartWidget, SearchWidget} from "../../widgets"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-li">
      <div className="container">
        {/* branding */}
        <Link to="/">
          <img
            src="assets/img/AbrojoStore.png"
            width="130"
            height="130"
            className="d-inline-block align-top"
            alt="Abrojo Store"
          />
        </Link>
        <ul className="navbar-nav d-none d-md-flex ms-auto">
          <li className="nav-item">
            <SearchWidget />
          </li>
          <li className="nav-item ms-lg-n1">
            <CartWidget items="3" />
          </li>
        </ul>
        <button className="navbar-toggler d-block ms-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#modalSidebar">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  )
}

export { NavBar }

