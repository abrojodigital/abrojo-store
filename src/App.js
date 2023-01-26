import * as React from "react"
import { Container } from "react-bootstrap"
import { ItemListContainer, Header, Footer, BannerOfertas, ShopDetails, SectionIdeas} from './components'
import { useEffect } from "react"
import { useState } from "react"

export default function App() {
  const [isLoading, setisLoading] = useState(true);
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null);

  const msgGreeting = "Deja que nuestros diseños te lleven a un viaje de confianza y seguridad, donde cada detalle cuenta y tu imagen es lo primordial"

  async function fetchData () {
    try {
      const response = await fetch('Data/products.json')
      if (response.ok) {
        setProducts(await response.json())
        setError(null)
        setisLoading(false)
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
  }, [isLoading])

  return (
    <Container>
    { !isLoading ?
      <>
      <Header products={products} />
      <ItemListContainer products={products} greeting={msgGreeting} />
      <BannerOfertas />
      <SectionIdeas />
      <ShopDetails />
      <Footer />
      </>
      :
      <h1>Cargando...</h1>
    }
    </Container>
  )
}