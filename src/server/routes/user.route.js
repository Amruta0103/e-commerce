const express = require('express');
const userRoute = express.Router();
const User = require('../models/users.model');

userRoute.route("/")
  .get(async(req,res) => {
    try{
      const id = req.params;
      if(id){
        res.status(200).json({message:"user exists"})
      }else{
        res.status(500).json({message: "user does not exist"})
      }
    }
    catch(error){
      res.status(500).json({error:error})
    }
  })
module.exports = userRoute