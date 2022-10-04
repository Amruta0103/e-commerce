import "./pages.css";
import React, { useState } from "react";
import { useAuth } from "../components/authProvider";


export default function SignUp() {
  return(
    <div className="SignUp">
      <h1>Heloooo</h1>
      <div className="signupForm">
        <legend>First Name</legend>
        <input type="text" placeholder="..."></input>
      </div>
    </div>
  )
}