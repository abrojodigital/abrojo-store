import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import { Spinner, Header, ItemList, Footer, BannerOfertas, ShopDetails, SectionIdeas } from "../../components"

const Home = () => {
  const [isLoading, setisLoading] = useState(true);
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null);

  const fetchData = async () => {
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

  const msgGreeting = "Deja que nuestros diseños te lleven a un viaje de confianza y seguridad, donde cada detalle cuenta y tu imagen es lo primordial"


  return (
    <Container>
      {
        !isLoading ?
          <>
            <Header products={products} />
            <ItemList products={products} greeting={msgGreeting} />
          </>
          :
          <Spinner />
      }
      <BannerOfertas />
      <SectionIdeas />
      <ShopDetails />
      <Footer />
    </Container>
  )
}

export { Home }

