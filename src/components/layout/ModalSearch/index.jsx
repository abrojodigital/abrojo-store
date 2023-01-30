import ItemResult from "./ItemResult"

const ModalSearch = ({products}) => {

  return (
    <div className="offcanvas offcanvas-end" id="modalSearch" tabIndex="1" role="dialog" aria-hidden="true">
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
        <i className="fe fe-x" aria-hidden="true"></i>
      </button>

      <div className="offcanvas-header lh-fixed fs-lg">
        <strong className="mx-auto">Buscador de Productos</strong>
      </div>

      <div className="offcanvas-body">
        <form>
          <div className="form-group">
            <label className="visually-hidden" htmlFor="modalSearchCategories">Categorías:</label>
            <select className="form-select" id="modalSearchCategories" defaultValue={1}>
              <option selected>Todas las categorías</option>
              <option>Camisas</option>
              <option>Camisetas</option>
              <option>Prenda Superior</option>
              <option>Pantalones | Bermudas</option>
              <option>Zapatos</option>
            </select>
          </div>
          <div className="input-group input-group-merge">
            <input className="form-control" type="search" placeholder="Buscar" />
            <div className="input-group-append">
              <button className="btn btn-outline-border" type="submit">
                <i className="fe fe-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>


      <div className="offcanvas-body border-top fs-sm">
        <p>Resultados de la búsqueda:</p>

        <ItemResult product={products[0]} />
        <ItemResult product={products[2]} />

        <a className="btn btn-link px-0 text-reset" href="#...">
          Ver todo <i className="fe fe-arrow-right ms-2"></i>
        </a>
      </div>

      <div className="offcanvas-body d-none">
        <p className="mb-3 fs-sm text-center">
          No se encontraron resultados
        </p>
        <p className="mb-0 fs-sm text-center">
          😞
        </p>
      </div>

    </div>
  )
}

export { ModalSearch }