import "./pages.css";
import React, { useState } from "react";
import { useUser } from "../context/userContext";
import { useAuth } from "../context/authContext";
import { Link } from 'react-router-dom';


export default function Login() {
  const { email, setEmail, passWord, setPassWord} = useUser();

  return (
    <div className="Login">
      <div className="loginBox">
        <legend>Email</legend>
        <input onChangeCapture={(e)=> setEmail(e.target.value)} type="text" placeholder="Enter your name email"></input>
        <legend>PASSWORD</legend>
        <input onChangeCapture={(e)=>setPassWord(e.target.value)} type="password" placeholder="Pass..."></input>
        <br /><br />
        <button onClick={()=>console.log(email, passWord)} className="login-btn">Log In</button>
        <br />
      </div>
      <div>
        <h4>New here, Sign Up&nbsp;
          <Link to="/signup">here</Link>
        </h4>
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