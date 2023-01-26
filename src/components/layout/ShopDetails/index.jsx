function ShopDetails() {
  return (
    <section className="py-10 bg-light">
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-6 col-lg-3">
              <div className="text-center mb-6 mb-lg-0">
                <div className="mb-4 h3 text-primary">
                  <i className="fe fe-truck"></i>
                </div>
                <h6 className="heading-xxs mb-1">
                  Envío Gratis
                </h6>
                <p className="mb-0 fs-sm text-muted">
                  En compras superiores a $ 100
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="text-center mb-6 mb-lg-0">
                <div className="mb-4 h3 text-primary">
                  <i className="fe fe-repeat"></i>
                </div>
                <h6 className="mb-1 heading-xxs">
                  Devoluciones gratis
                </h6>
                <p className="mb-0 fs-sm text-muted">
                  Devolvemos su dinero antes de 30 días
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="text-center mb-6 mb-md-0">
                <div className="mb-4 h3 text-primary">
                  <i className="fe fe-lock"></i>
                </div>
                <h6 className="mb-1 heading-xxs">
                  Compra segura
                </h6>
                <p className="mb-0 fs-sm text-muted">
                  Estás en buenas manos
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="text-center">
                <div className="mb-4 h3 text-primary">
                  <i className="fe fe-tag"></i>
                </div>
                <h6 className="mb-1 heading-xxs">
                  Más de 1000 estilos
                </h6>
                <p className="mb-0 fs-sm text-muted">
                  Tenemos todo lo que necesitas
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
   );
}

export { ShopDetails }