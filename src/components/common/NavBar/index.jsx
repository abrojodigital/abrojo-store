import { CartWidget, SearchWidget } from "../../widgets"
import { Container, Image, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const NavBar = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" className="mb-3">
        <Container>
          {/* branding */}
          <LinkContainer to="/">
            <Navbar.Brand >
              <Image
                src="assets/img/AbrojoStore.png"
                width="130"
                height="130"
                className="d-inline-block align-top"
                alt="Abrojo Store"
              />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <ul className="navbar-nav d-none d-md-flex ms-auto">
                <li className="nav-item">
                  <SearchWidget />
                </li>
                <li className="nav-item ms-lg-n1">
                  <CartWidget items="3" />
                </li>
              </ul>
            </Nav>
            <Nav >
              <LinkContainer to="/historia"><Nav.Link>Acerca Nuestro</Nav.Link></LinkContainer>
              <LinkContainer to="/contact"><Nav.Link>Contáctenos</Nav.Link></LinkContainer>
              <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                <LinkContainer to="/products/category/1">
                  <NavDropdown.Item>Camisas</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/products/category/5">
                  <NavDropdown.Item>Camisetas</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/products/category/3">
                  <NavDropdown.Item>Prenda superior</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/products/category/4">
                  <NavDropdown.Item>Pantalones | Bermudas</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/products/category/2">
                  <NavDropdown.Item>Zapatos</NavDropdown.Item>
                </LinkContainer>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )
}

export { NavBar }

