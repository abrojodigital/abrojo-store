import { useState, useEffect } from "react";
import Spinner from '../../common/Spinner'
import Banner from "../../common/Banner";
import CardProduct from "../../common/CardProduct";
import products from "../../../Data/products.json"
import BannerOfertas from "../BannerOfertas";
import SectionIdeas from "./SectionIdeas";
import DetallesShop from "./DetallesShop";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(false)

  // por ahora solo para que tenga algo de sentido el useEffect. Funciona solo setTimeOut()
   const cargaProductos = async () => {
    setLoading(true)
    setTimeout( () => {
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
   cargaProductos();
  }
    , [])

  return (
    <div className="home" id="Home">
      <Banner imgBackGround="assets/img/cover-26.jpg" title="Colección 2023" caption="Ver ahora" heref="#season2023" />

      {loading ? <Spinner /> : null}

      {/* Esto a futuro debe leerse de la bbdd y mostrar paginando */}
      <div className="section py-12">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <CardProduct product={products[0]} caption="Ver ahora" />
            </div>
            <div className="col-sm-4">
              <CardProduct product={products[1]} caption="Ver ahora" />
            </div>
            <div className="col-sm-4">
              <CardProduct product={products[2]} caption="Ver ahora" />
            </div>
          </div>
          <div className="row justify-content-center pt-12">
            <div className="col-12 col-md-10">
              <div className="row align-items-center">
                <div className="col-6">
                  <CardProduct product={products[3]} caption="Ver ahora" />
                </div>
                <div className="col-6">
                  <CardProduct product={products[4]} caption="Ver ahora" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <CardProduct product={products[5]} caption="Ver ahora" />
            </div>
            <div className="col-sm-4">
              <CardProduct product={products[6]} caption="Ver ahora" />
            </div>
            <div className="col-sm-4">
              <CardProduct product={products[8]} caption="Ver ahora" />
            </div>
          </div>
        </div>
      </div>

      <BannerOfertas />
      <SectionIdeas />
      <DetallesShop />
    </div>
  );
}

export default ItemListContainer;