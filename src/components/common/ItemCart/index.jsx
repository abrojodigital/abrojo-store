import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import products from "../../../Data/products.json";
import { formatCurrency } from "../../../utilities/formatCurrency";

const ItemCart = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = products.find((i) => i.id === id);
  if (!item) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.img}
        style={{ width: "75px", height: "125px", objectFit: "cover" }}
        alt={item.product}
      />
      <div className="me-auto">
        <div>
          {item.prodcut}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
        &times;
      </Button>
    </Stack>
  );
};

export { ItemCart };
