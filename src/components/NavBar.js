import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Abrojo Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ShoppingCartIcon />

      </Container>
    </Navbar>
  )
}

export default NavBar

