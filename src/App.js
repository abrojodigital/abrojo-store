import * as React from "react";
import { Container } from "react-bootstrap";
import Header from './components/Header/Header'; //Include Header
import Home from './components/Home'; //Include Header
import Footer from './components/Footer'; //Include Header

export default function App() {
  return (
    <Container>
      <Header />
      <Home />
      <Footer />
    </Container>
  )
}