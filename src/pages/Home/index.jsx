import { Container } from "react-bootstrap"
import { HomeItemsList, BannerOfertas, ShopDetails, SectionIdeas, Banner } from "../../components"

const Home = () => {
  const msgGreeting = "Deja que nuestros diseños te lleven a un viaje de confianza y seguridad, donde cada detalle cuenta y tu imagen es lo primordial"


  return (
    <Container>
      <Banner
        imgBackGround="assets/img/cover-26.jpg"
        title="Colección 2023"
        caption="Ver ahora"
        greeting={msgGreeting}
      />
      <HomeItemsList greeting={msgGreeting} />
      <BannerOfertas />
      <SectionIdeas />
      <ShopDetails />
    </Container>
  )
}

export { Home }

