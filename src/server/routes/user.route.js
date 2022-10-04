const express = require('express');
const userRoute = express.Router();
const User = require('../models/users.model');

userRoute.route("/")
  .get(async(req,res) => {
    try{
      const _id = req.params;
      if(_id){
        // const findUser = await User.findById(_id);
        // console.log("user route line 11:- ",findUser)
        res.status(200).json({message:"user exists"})
      }else{
        res.status(500).json({message: "user does not exist"})
      }
    }
    catch(error){
      res.status(500).json({error})
    }
  })
module.exports = userRoute