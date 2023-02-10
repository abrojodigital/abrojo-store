import { Button } from "react-bootstrap"

const SearchWidget = () => {

  const openSearch = ()=>{}

  return (
    <Button
      onClick={openSearch}
      style={{ width: "3rem", height: "3rem", position: "relative" }}
      className="rounded-circle btn-light">
      <i className="fe fe-search"></i>
    </Button>
  )
}

export { SearchWidget }

// <a className="nav-link" data-bs-toggle="offcanvas" href="#modalSearch">
//       <i className="fe fe-search"></i>
// </a>