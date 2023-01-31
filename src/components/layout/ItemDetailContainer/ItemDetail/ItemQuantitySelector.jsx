import { useState } from "react"
import { ButtonGroup, Button, FormControl } from "react-bootstrap"

const ItemQuantitySelector = () => {
  const [cant, setCant] = useState(0);
  return (
    <ButtonGroup className="btn-toolbar">
    <ButtonGroup className="btn-group btn-group-sm">
      <Button
        variant="light"
        onClick={() => setCant((c) => c - 1)}
      >
        -
      </Button>
      <FormControl
        className="form-control"
        placeholder={cant}
        readOnly
      />
      <Button
        variant="light"
        onClick={() => setCant((c) => c + 1)}
      >
        +
      </Button>
      <Button
        variant="light"
        onClick={() => setCant(0)}
      >
        <i className="fe fe-x"></i>
      </Button>
    </ButtonGroup>
  </ButtonGroup>
  );
}

export default ItemQuantitySelector;