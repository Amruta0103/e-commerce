const express = require('express');
const userSignUpRoute = express.Router();
const User = require('../models/users.model');

userSignUpRoute.route("/")
  .post(async(req,res) => {
    try{
      const {email, firstName, lastName, mobileNo, address} = req.body;
      const findUser = await User.find({"email":email});
      if(findUser){
        res.status(200).json({message: "user already exists"+ email})
      }else{
        const newUser = new User({
          firstName: firstName,
          lastName: lastName,
          mobileNo: mobileNo,
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
module.exports = userSignUpRoute