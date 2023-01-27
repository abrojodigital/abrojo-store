
import { useState } from 'react'

function ItemDetailContainer({ product }) {
  const [cant, setCant] = useState(0);
  return (


      <div className="card">
        <h3 className="card-title">$ {product.price}</h3>

        <img src={product.img} className="card-img-top" alt={product.product} />
        <div className="card-body">
          {/* <h4 className="card-title">{product.product}</h4> */}
          <p className="card-text">{product.description}</p>
          <div className="btn-toolbar">
            <div className="btn-group btn-group-sm">
            <button
                className="btn"
                onClick={() => setCant(cant => cant - 1)}>
                -
              </button>
              <div className="col-4">
                <input className="form-control" placeholder={cant} />
              </div>
              <button
                className="btn"
                onClick={() => setCant(cant => cant + 1)}>
                +
              </button>
              <button className="btn"
                onClick={() => { return true }}>
                <i className="fe fe-x"></i>
              </button>
            </div>
          </div>
          <a className="btn btn-link px-0 text-body" href="#link">
            Agregar al Carrito<i className="fe fe-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
  )
}

export { ItemDetailContainer }
