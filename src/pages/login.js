import '../App.css';
import React, { useState } from "react";
import { useAuth } from "../components/authProvider";
// import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { loginCreds } = useAuth();
  // const { state } = useLocation();
  // const navigate = useNavigate();
  const [ user, setUser ] = useState("");
  const [ pass, setPass ] = useState("");
  function loginHandler(){
    loginCreds(user, pass)
  }
  return (
    <div className="Login">
      <div className="loginBox">
        <h1> Chhabhi laaya kya? </h1>
        <legend>NAME</legend>
        <input onChange={(user)=> setUser(user.target.value)} type="text" placeholder="Enter your name user"></input>
        <legend>PASSWORD</legend>
        <input onChange={(pass)=> setPass(pass.target.value)} placeholder="Pass..."></input>
        <br /><br />
        <button className="login-btn" onClick={loginHandler} >Log In</button>
        <br />
        {/* <button onClick={()=>setLogin(false)}>log out</button> */}
      </div>
    </div>
  );
}




/* <div className="loginBox">
      <legend>ADDRESS</legend>
      <textarea placeholder="Enter your address"></textarea>
      <legend>PINCODE</legend>
      <input type="text"></input>
    </div> */