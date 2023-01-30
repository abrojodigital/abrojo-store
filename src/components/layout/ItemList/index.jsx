import { ItemListContainer, Banner } from "../../";

const ItemList = ({products, greeting}) => {

  return (
    <div className="home" id="Home">
      <Banner imgBackGround="assets/img/cover-26.jpg" title="Colección 2023" caption="Ver ahora" heref="#season2023" greeting={greeting}/>

      {/* Esto a futuro debe leerse de la bbdd y mostrar paginando */}
      <div className="section py-12">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <ItemListContainer product={products[0]} caption="Ver ahora" />
            </div>
            <div className="col-sm-4">
              <ItemListContainer product={products[1]} caption="Ver ahora" />
            </div>
            <div className="col-sm-4">
              <ItemListContainer product={products[2]} caption="Ver ahora" />
            </div>
          </div>
          <div className="row justify-content-center pt-12">
            <div className="col-12 col-md-10">
              <div className="row align-items-center">
                <div className="col-6">
                  <ItemListContainer product={products[3]} caption="Ver ahora" />
                </div>
                <div className="col-6">
                  <ItemListContainer product={products[4]} caption="Ver ahora" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <ItemListContainer product={products[5]} caption="Ver ahora" />
            </div>
            <div className="col-sm-4">
              <ItemListContainer product={products[6]} caption="Ver ahora" />
            </div>
            <div className="col-sm-4">
            <ItemListContainer product={products[8]} caption="Ver ahora" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ItemList }