import { useState, useEffect } from "react";
import { Button, Stack, Dropdown } from "react-bootstrap";
import { Spinner } from "../..";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { productsService } from "../../../services/Products";
import { formatCurrency } from "../../../utilities/formatCurrency";

const ItemCart = ({ id, quantity, size }) => {
  const { removeFromCart } = useShoppingCart();
  const [item, setItem] = useState({});
  const [selectedSize, setSelectedSize] = useState(size);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    productsService.get(id)
      .then( data => setItem(data) )
      .then( data => setSizes(data.stockBySize) )
  }, [id]);

  if (!item) return <Spinner />;

  const handleSizeChange = (event) => {
    const selected = event.target.value;
    setSelectedSize(selected);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id, selectedSize);
  };

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.img}
        style={{ width: "75px", height: "125px", objectFit: "cover" }}
        alt={item.title}
      />
      <div className="me-auto">
        <div>
          {item.title}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </div>
        {sizes && (
          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-size">
                {selectedSize}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {sizes.map((size) => (
                  <Dropdown.Item key={size} value={size} onClick={handleSizeChange}>
                    {size}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={handleRemoveFromCart}>
        &times;
      </Button>
    </Stack>
  );
};

export { ItemCart };
