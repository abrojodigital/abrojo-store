import * as React from "react"
import { Container } from "react-bootstrap"
import Header from './components/Header'
import ItemListContainer from './components/layout/ItemListContainer'
import Footer from './components/Footer'

export default function App() {
  return (
    <Container>
      <Header />
      <ItemListContainer />
      <Footer />
    </Container>
  )
}