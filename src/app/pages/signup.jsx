import "./pages.css";
import React from "react";
import { useUser } from "../context/userContext";


export default function SignUp() {
  const {setFirstName, firstName,setLastName, lastName, setEmail, email, setMobile, mobile, setAddress, address,passWord, setPassWord, input, setInput} = useUser()

  const values = [{
    email: email,
    firstName:firstName,
    lastName: lastName,
    mobile: mobile,
    address: address,
    passWord: passWord
  }];

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
        <legend>Password</legend>
        <input onChangeCapture={(e)=> setPassWord(e.target.value)} placeholder="..." ></input>
        <br/>
        <button onClick={()=> {setInput(values); console.log("this is input",input)}} >Sign up</button>

        {console.log(values)}
      </div>
    </div>
  )
}