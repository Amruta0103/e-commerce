const express = require('express');
const userLoginRoute = express.Router();
const User = require('../models/users.model');

userLoginRoute.route("/")
  .get(async(req,res) => {
    try{
      const {email} = req.body;
      // const email = info.email;
      // const findUser = await User.find({"email":email});
      console.log(email);
      if(email){
        res.status(200).json({message: "user exists "+ email})
      }else{
        res.status(500).json({message:"send them to sign up"})
      }
    }
    catch(error){
      res.status(500).json({error})
    }
  })
module.exports = userLoginRoute