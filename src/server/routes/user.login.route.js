const express = require('express');
const userLoginRoute = express.Router();
const {User} = require('../models/users.model');

userLoginRoute.route("/")
  .get(async(req,res) => {
    try{
      const {email, passWord} = req.body;
      const findUser = await User.find({"email":email});
      if(findUser){
        if(findUser[0].passWord === passWord){
          return res.status(200).json({message:"successful login"})
        }else{
          return res.status(401).json({message: "Invalid credentials"})
        }
      }else{
        return res.status(500).json({message:"send them to sign up"})
      }
    }
    catch(error){
      return res.status(500).json({error})
    }
  })

module.exports = userLoginRoute;