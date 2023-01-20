const ItemResult = ({product}) => {
  return (
    <div className="row align-items-center position-relative mb-5">
      <div className="col-4 col-md-3">
        <img className="img-fluid" src={product.img} alt={product.product} />
      </div>
      <div className="col position-static">
        <p className="mb-0 fw-bold">
          <a className="stretched-link text-body" href="#...">{product.product}</a> <br />
          <span className="text-muted">$ {product.price}</span>
        </p>
      </div>
    </div>
  );
}

export default ItemResult;