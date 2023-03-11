import { CartWidget } from "../../widgets"
import { useState, useEffect } from "react"
import { Spinner } from "../../../components"
import { Container, Image, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { categoriesService } from "../../../services"
import { useAuth } from "../../../context/AuthContext"


const NavBar = () => {
  const [menuLinks, setMenuLinks] = useState()
  const [isLoading, setisLoading] = useState(true)
  const { user } = useAuth()


  useEffect(() => {
    categoriesService.getAll()
      .then(data => {
        const links = data.map(({name, description}) => {
          return {
            description: description,
            url: `/products/category/${name}`
          }
        })
        setMenuLinks(links)
        setisLoading(false)
      })
  }, [])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Navbar bg="white" expand="lg" className="mb-3">
          <Container>
            {/* branding */}
            <LinkContainer to="/">
              <Navbar.Brand >
                <Image
                  src="../../../assets/img/AbrojoStore.png"
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
                {
                  !user ?
                  <LinkContainer to="/login"><Nav.Link>Iniciar Sesión</Nav.Link></LinkContainer>
                  :
                  <LinkContainer to="/"><Nav.Link>{user.displayName}</Nav.Link></LinkContainer>
                }
                <LinkContainer to="/contact"><Nav.Link>Contáctenos</Nav.Link></LinkContainer>
                <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                  {menuLinks.map(menuLink => {
                    return (
                      <LinkContainer to={menuLink.url}>
                        <NavDropdown.Item>{menuLink.description}</NavDropdown.Item>
                      </LinkContainer>
                    )
                  })}
                </NavDropdown>
              </Nav>
              <Nav className="me-8" >
                <CartWidget />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  )
}

export { NavBar }

