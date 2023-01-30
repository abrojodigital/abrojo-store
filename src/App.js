import * as React from "react"
import { Container } from "react-bootstrap"
import { ItemList, Header, Footer, BannerOfertas, ShopDetails, SectionIdeas} from './components'
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
      <ItemList products={products} greeting={msgGreeting} />
      </>
      :
      <h1>Cargando...</h1>
    }
      <BannerOfertas />
      <SectionIdeas />
      <ShopDetails />
      <Footer />
      
    </Container>
  )
}