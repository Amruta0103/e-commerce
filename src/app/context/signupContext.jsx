import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export function CartProvider({ children }) {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLatName] = useState([]);
  return (
    <UserContext.Provider
      value={{ firstName,setFirstName,lastName,setLatName }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useCart() {
  return useContext(UserContext);
}
