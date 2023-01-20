const ItemCart = ({ product }) => {
  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-4">
          <a href="#...">
            <img className="img-fluid" src={product.img} alt={product.product} />
          </a>
        </div>
        <div className="col-8">
          <p className="fs-sm fw-bold mb-6">
            <a className="text-body" href="#...">{product.product}</a> <br />
            <span className="text-muted">{product.price}</span>
          </p>
          <div className="d-flex align-items-center">
            <select className="form-select form-select-xxs w-auto">
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select>
            <a className="fs-xs text-gray-400 ms-auto" href="#!">
              <i className="fe fe-x"></i> Eliminar
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ItemCart;