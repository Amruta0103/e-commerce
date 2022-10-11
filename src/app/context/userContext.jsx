import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail ] = useState();
  const [mobile, setMobile ] = useState();
  const [address, setAddress ] = useState();
  const [passWord, setPassWord] = useState();
  const [input, setInput ] = useState([]);
  return (
    <UserContext.Provider
      value={{ input, setInput, firstName,setFirstName,lastName,setLastName, email, setEmail, mobile, setMobile, address, setAddress, passWord, setPassWord }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
