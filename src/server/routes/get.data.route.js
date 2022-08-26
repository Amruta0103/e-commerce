const express = require('express');
const productRoute = express.Router();
const { Product } = require("../models/products.model");
const { productData } = require("../data");
productRoute.route("/")
  // .get(async(req,res)=>{
  //   try{
  //     const products = await Product.find({})
  //     console.log("PRODUCTS MILE", products.map((item)=>item))
  //     res.status(200).json({ success: true});
  //   }
  //   catch(error){
  //     console.log("error hai")
  //     res.status(500).json({ success: false, error: error.message });
  //   }
  // })

  .post(async(req,res)=>{
    try{
      const addData = await Product.add({productData})
      res.json({addData});

      console.log("in try block",addData)
      res.send("in try block of products")
    }
    catch(error){
      res.status(500).json(error)
    }
  })

module.exports = productRoute