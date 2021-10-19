import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);
  const [wishItem, setWishItem] = useState([]);
  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, wishItem, setWishItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
