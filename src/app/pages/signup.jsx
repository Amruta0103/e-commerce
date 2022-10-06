import "./pages.css";
import React, { useState } from "react";
import { useAuth } from "../components/authProvider";


export default function SignUp() {
  return(
    <div className="SignUp">
      <h1>Heya! Fill in details below and be our valued member</h1>
      <div className="signupForm">
        <legend>First Name</legend>
        <input type="text" placeholder="..."></input>
        <legend>Last Name</legend>
        <input type="text" placeholder="..."></input>
        <legend>Email</legend>
        <input type="text" placeholder="..."></input>
        <legend>Mobile No.</legend>
        <input type="text" placeholder="..."></input>
        <legend>Address</legend>
        <textarea placeholder="..." cols={30} rows={6}></textarea>
        <br/>
        <button>Sign up</button>
      </div>
    </div>
  )
}