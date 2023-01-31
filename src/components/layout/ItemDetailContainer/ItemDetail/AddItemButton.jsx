import { Link } from "react-router-dom";

function AddItemButton() {
  return (
    <>
      <Link className="btn btn-link px-0 text-body" to="/addtocart">
        Agregar al Carrito<i className="fe fe-arrow-right ms-2"></i>
      </Link>
    </>
  );
}

export default AddItemButton;

