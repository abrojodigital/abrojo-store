import { useState } from "react";
import { Form } from 'react-bootstrap';
import ItemResult from "./ItemResult"

const ModalSearch = ({ products }) => {
  const [value, setValue] = useState("0");

  const getFilteredProducts = () => {
    const res = products.filter(product => product.categoryId === value || value === "0")
    return res
  }


  return (
    <div className="offcanvas offcanvas-end" id="modalSearch" tabIndex="1" role="dialog" aria-hidden="true">
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
        <i className="fe fe-x" aria-hidden="true"></i>
      </button>

      <div className="offcanvas-header lh-fixed fs-lg">
        <strong className="mx-auto">Buscador de Productos</strong>
      </div>

      <div className="offcanvas-body">
        <Form>
          <Form.Group>
            <h5 srOnly>Categoría a filtrar</h5>
            <Form.Control as="select"
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
              }}
            >
              <option value="0">Todas las categorías</option>
              <option value="1">Camisas</option>
              <option value="5">Camisetas</option>
              <option value="3">Prenda Superior</option>
              <option value="4">Pantalones | Bermudas</option>
              <option value="2">Zapatos</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>

      <div className="offcanvas-body border-top fs-sm">
        <p>Resultados de la búsqueda:</p>
        {
          getFilteredProducts().map((product, index) => (
            <ItemResult product={product} />))
        }
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