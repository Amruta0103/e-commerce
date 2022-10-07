import { createContext, useContext, useState } from "react";

export const SignUpContext = createContext();

export function SignUpProvider({ children }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLatName] = useState();
  const [email, setEmail ] = useState();
  const [mobile, setMobile ] = useState();
  const [address, setAddress ] = useState();
  return (
    <SignUpContext.Provider
      value={{ firstName,setFirstName,lastName,setLatName, email, setEmail, mobile, setMobile, address, setAddress }}
    >
      {children}
    </SignUpContext.Provider>
  );
}

export function useSignUp() {
  return useContext(SignUpContext);
}
