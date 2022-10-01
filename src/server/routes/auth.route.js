const express = require('express');
const authRoute = express.Router();

authRoute.route("/")
  .post(async(req, res)=>{
    try{}
    catch(error){
      return res.status(500).json({error})
    }
  })

module.exports = authRoute