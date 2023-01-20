import CartWidget from "../../widgets/CartWidget"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-li">
      <div className="container">
        {/* branding */}
        <a href="#home">
          <img
            src="assets/img/AbrojoStore.png"
            width="120"
            height="120"
            className="d-inline-block align-top"
            alt="Abrojo Store"
          />
        </a>
        <ul className="navbar-nav d-none d-md-flex ms-auto">
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="offcanvas" href="#modalSearch">
              <i className="fe fe-search"></i>
            </a>
          </li>
          {/* <li className="nav-item ms-lg-n4">
            <a className="nav-link" href="#">
              <i className="fe fe-user"></i>
            </a>
          </li>
          <li className="nav-item ms-lg-n4">
            <a className="nav-link" href="#">
              <i className="fe fe-heart"></i>
            </a>
          </li> */}
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

export default NavBar

