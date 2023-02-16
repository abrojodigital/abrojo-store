import { createContext, useContext, useState } from "react";
import { ModalShoppingCart } from "../components";
import { useLocalStorage } from "../hooks/useLocalStorage";
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

  const getItemQuantity = (id) => {
    return (
      cartItems.find((item) => item.id === id) &&
      cartItems.find((item) => item.id === id).quantity
    ) || 0;
  }
  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (!currItems.find((item) => item.id === id)) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (
        currItems.find((item) => item.id === id) &&
        currItems.find((item) => item.id === id).quantity === 1
      ) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  const removeFromCart = (id) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const getTotalCart = async ( cartItems) => {
    const products = await productsService.getAll();
    const total = cartItems.reduce((total, cartItem) => total + (products.find(product => product.id === cartItem.id)?.price || 0) * cartItem.quantity, 0)
    return total
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
