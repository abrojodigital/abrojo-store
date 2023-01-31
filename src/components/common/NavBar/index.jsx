import {CartWidget, SearchWidget} from "../../widgets"
import { Link } from "react-router-dom"
import { Button, Container, Image, Nav } from "react-bootstrap"

const NavBar = () => {
  return (
    <Nav className="navbar navbar-expand navbar-li">
      <Container>
        {/* branding */}
        <Link to="/">
          <Image
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
        <Button className="navbar-toggler d-block" variant="light" type="button" data-bs-toggle="offcanvas" data-bs-target="#modalSidebar">
          <span className="navbar-toggler-icon"></span>
        </Button>
      </Container>
    </Nav>
  )
}

export { NavBar }

