import "./pages.css";
import React from "react";
import { useSignUp } from "../context/signupContext";


export default function SignUp() {
  const {setEmail,email} = useSignUp()
  const onChangeHandler = event => {
    setEmail(event.target.value);
 };
  return(
    <div className="SignUp">
      <h1>Heya! Fill in details below and be our valued member</h1>
      <div className="signupForm">
        <legend>First Name</legend>
        <input type="text" placeholder="..."></input>
        <legend>Last Name</legend>
        <input type="text" placeholder="..."></input>
        <legend>Email</legend>
        <input  type={email} placeholder="..." ></input>
        <p>{email}</p>
        <legend>Mobile No.</legend>
        <input type="text" placeholder="..."></input>
        <legend>Address</legend>
        <textarea placeholder="..." cols={30} rows={6}></textarea>
        <br/>
        <button onClick={onChangeHandler}>Sign up</button>
      </div>
    </div>
  )
}