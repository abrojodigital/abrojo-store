import { createContext, useContext, useState } from "react";
import { ModalShoppingCart } from "../components";
import { useLocalStorage } from "../hooks/";
import { productsService } from "../services"

const ShoppingCartContext = createContext({});

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const clearCart = () => setCartItems([]);

  const getItemQuantity = (id, size) => {
    const item = cartItems.find((item) => item.id === id && item.size === size);
    return item ? item.quantity : 0;
  }

  const increaseCartQuantity = (id, size) => {
    setCartItems((currItems) => {
      const itemIndex = currItems.findIndex((item) => item.id === id && item.size === size);

      if (itemIndex === -1) {
        return [...currItems, { id, quantity: 1, size }];
      } else {
        const updatedItems = [...currItems];
        updatedItems[itemIndex].quantity++;
        return updatedItems;
      }
    });
  }

  const decreaseCartQuantity = (id, size) => {
    setCartItems((currItems) => {
      const itemIndex = currItems.findIndex((item) => item.id === id && item.size === size);

      if (itemIndex === -1) {
        return currItems;
      } else {
        const updatedItems = [...currItems];
        updatedItems[itemIndex].quantity--;

        if (updatedItems[itemIndex].quantity === 0) {
          updatedItems.splice(itemIndex, 1);
        }

        return updatedItems;
      }
    });
  }

  const removeFromCart = (id, size) => {
    setCartItems((currItems) => {
      return currItems.map((item) => {
        if (item.id === id && item.size === size) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      }).filter((item) => item.quantity > 0);
    });
  };

  const getTotalCart = async (cartItems) => {
    const products = await productsService.getAll();
    const total = cartItems.reduce((total, cartItem) => {
      const product = products.find((product) => product.id === cartItem.id);
      if (!product) {
        return total;
      }
      const price = product.prices.find((price) => price.size === cartItem.size)?.price || product.price;
      return total + price * cartItem.quantity;
    }, 0);
    return total;
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        clearCart,
        getTotalCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <ModalShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
