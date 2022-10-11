const express = require('express');
const userSignUpRoute = express.Router();
const User = require('../models/users.model');

userSignUpRoute.route("/")
  .get(async(req,res)=> {
    try{
    const {email} = req.body;
    console.log("ye hai", email)
    const foundUser = await User.find({})
    console.log("line 11", foundUser)
    return res.json({message:"success"})
    }
    catch(error){
      res.json({error:error})
    }
  })
  .post(async(req,res) => {
    try{
      const {firstName,lastName,email, mobile,address} = req.body;
      const findUser = await User.find({"email":email});
      if(findUser){
        res.status(200).json({message: "user already exists"+ email})
      }else{
        const newUser = new User({
          firstName: firstName,
          lastName: lastName,
          mobileNo: mobile,
          email: email,
          address: address,
        }); 
        const savingUserInfo = await newUser.save();
        console.log(savingUserInfo);
      }
    }
    catch(error){
      res.status(500).json({error})
    }
  })
module.exports = userSignUpRoute;