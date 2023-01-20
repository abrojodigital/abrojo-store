const Banner = ({ imgBackGround, title, caption, href }) => {
  let urlImg = imgBackGround

  return (
    <section>
      <div className="container">
        <div className="row">
        {/* Imagen */}
          <div className="col-12 col-md-8 col-lg-9 d-none d-md-block offset-md-n2 order-2">
            <div className="h-100 flickity-buttons-bottom-start">
              <div className="w-100 h-md-100 bg-cover" style={{ backgroundImage: `url(${urlImg})`}}></div>
            </div>

          </div>
          <div className="col-12 col-md-6 col-lg-5 py-15 order-1 position-relative">
            <h1 className="display-4 mb-8">
              {title}
            </h1>
            <a className="btn btn-dark" href={href}>
              {caption} <i className="fe fe-arrow-right ms-4"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;