import { useState } from "react";

const ItemQuantitySelector = () => {
  const [cant, setCant] = useState(0);
  return (
    <div className="btn-toolbar">
      <div className="btn-group btn-group-sm">
        <button
          className="btn"
          onClick={_default => setCant(cant => cant - 1)}>
          -
        </button>
        <div className="col-4">
          <input className="form-control" placeholder={cant} />
        </div>
        <button
          className="btn"
          onClick={_ => setCant(cant => cant + 1)}>
          +
        </button>
        <button className="btn"
          onClick={_ => setCant(0)}>
          <i className="fe fe-x"></i>
        </button>
      </div>
    </div>
  );
}

export default ItemQuantitySelector;