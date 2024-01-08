import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Product added sucessfully!");
  };
  const removeFromCart = (product) => {
    const updateCart = cart.filter((item) => item !== product);
    setCart(updateCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
