import { useState } from "react"

const ItemCart = ({ product }) => {
  const [cant, setCant] = useState(1)

  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-4">
          <a href="#...">
            <img className="img-fluid" src={product.img} alt={product.product} />
          </a>
        </div>
        <div className="col-4">
          <p className="fs-sm fw-bold mb-7">
            <a className="text-body" href="#...">{product.product}</a> <br />
            <span className="text-muted">$ {product.price}</span>
          </p>
          <div className="btn-toolbar">
            <div className="btn-group btn-group-sm">
              <button
                className="btn"
                onClick={() => setCant(cant => cant + 1)}>
                +
              </button>
              <div class="col-4">
              <input className="form-control" placeholder={cant} />
              </div>
              <button
                className="btn"
                onClick={() => setCant(cant => cant - 1)}>
                -
              </button>
              <button className="btn">
                <i className="fe fe-x"></i>
              </button>

            </div>

          </div>

        </div>
      </div>
    </li>
  );
}

export default ItemCart;