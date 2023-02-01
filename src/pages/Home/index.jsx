import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import { Spinner, ItemList, BannerOfertas, ShopDetails, SectionIdeas, Banner } from "../../components"
import { getAllProducts } from "../../utils/Products"

const Home = () => {
  const [isLoading, setisLoading] = useState(true);
  const [products, setProducts] = useState([])

  useEffect(()=>{
    getAllProducts().then( data => setProducts(data)).then(_ => setisLoading(false))
  }, [] )

  const msgGreeting = "Deja que nuestros diseños te lleven a un viaje de confianza y seguridad, donde cada detalle cuenta y tu imagen es lo primordial"


  return (
    <Container>
    <Banner 
        imgBackGround="assets/img/cover-26.jpg"
        title="Colección 2023"
        caption="Ver ahora"
        greeting={msgGreeting}
      />
      {
        !isLoading ?
          <>
            <ItemList products={products} greeting={msgGreeting} />
          </>
          :
          <Spinner />
      }
      <BannerOfertas />
      <SectionIdeas />
      <ShopDetails />
    </Container>
  )
}

export { Home }

