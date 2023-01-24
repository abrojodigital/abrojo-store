import * as React from "react"
import { Container } from "react-bootstrap"
import Header from './components/Header'
import ItemListContainer from './components/layout/ItemListContainer'
import Footer from './components/Footer'
import { useEffect } from "react"
import { useState } from "react"

export default function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('Data/products.json')
      if (response.ok) {
        setProducts(await response.json())
        setError(null)
      } else {
        setError("Hubo un error al obtener los datos");
        console.log(error)
      }
    } catch (error) {
      setError("No pudimos hacer la solicitud para obtener los datos");
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [products])

  return (
    <Container>
      <Header products={products} />
      <ItemListContainer products={products} />
      <Footer />
    </Container>
  )
}