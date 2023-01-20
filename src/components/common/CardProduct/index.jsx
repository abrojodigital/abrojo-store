function CardProduct({ product, caption }) {
  return (
    <div className="card">
            <h5 class="card-title">$ {product.price}</h5>

      <img src={product.img} className="card-img-top" alt={product.product} />
      <div class="card-body">
        <h5 class="card-title">{product.product}</h5>
        <p class="card-text">{product.description}</p>
        <a className="btn btn-link px-0 text-body" href="#link">
          {caption}<i className="fe fe-arrow-right ms-2"></i>
        </a>
      </div>

    </div>
  )
}

export default CardProduct;
