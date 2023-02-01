import { Link } from "react-router-dom";

function AddItemButton(id) {
  return (
    <>
      <Link className="btn btn-link px-0 text-body" to={`/addtocart/:${id}`}>
        Agregar al Carrito<i className="fe fe-arrow-right ms-2"></i>
      </Link>
    </>
  );
}

export default AddItemButton;

