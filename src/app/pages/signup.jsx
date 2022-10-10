import "./pages.css";
import React from "react";
import { useSignUp } from "../context/signupContext";


export default function SignUp() {
  const {setFirstName,setLastName, email, setEmail,setMobile,setAddress} = useSignUp()
  return(
    <div className="SignUp">
      <h1>Heya! Fill in details below and be our valued member</h1>
      <div className="signupForm">
        <legend>First Name</legend>
        <input onChangeCapture={(e)=> setFirstName(e.target.value)} type="text" placeholder="..."></input>
        <legend>Last Name</legend>
        <input onChangeCapture={(e)=> setLastName(e.target.value)} type="text" placeholder="..."></input>
        <legend>Email</legend>
        <input onChangeCapture={(e)=> setEmail(e.target.value)} placeholder="..." ></input>
        <p>{email}</p>
        <legend>Mobile No.</legend>
        <input onChangeCapture={(e)=> setMobile(e.target.value)} type="text" placeholder="..."></input>
        <legend>Address</legend>
        <textarea onChangeCapture={(e)=> setAddress(e.target.value)} placeholder="..." cols={30} rows={6}></textarea>
        <br/>
        <button onClick={()=>console.log("haha")}>Sign up</button>
      </div>
    </div>
  )
}