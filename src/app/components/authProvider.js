import { createContext, useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/cart";
import { fakeAuthApi } from "./fake-auth";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ isLoggedin, setLogin] = useState(false);

  useEffect(()=>{
    const loginStatus = JSON.parse(localStorage?.getItem("login"));

    loginStatus?.isLoggedin && setLogin(true);
    console.log("hello",loginStatus,isLoggedin);
  },[isLoggedin])

  async function loginCreds(userName, passCode) {
    try {
      const response = await fakeAuthApi(userName, passCode);
      console.log(response);
      if (response.success) {
        setLogin(true);
        localStorage?.setItem(
          "login",
          JSON.stringify({ isLoggedIn: true })
        );
        console.log("ho gaya");
        <Routes>
        <Route path="/cart" element={<Cart/>}/></Routes>
      }
    } catch (error) {
      console.log("Sahi username password nahi pata kya?", error);
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedin, setLogin, loginCreds}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
};