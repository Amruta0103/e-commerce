const express = require('express');
const productRoute = express.Router();
const { Product } = require("../models/products.model");

productRoute.route("/")
  .get(async(req,res)=>{
    try{
      const products = await Product.find({"_id":"60c9cbb926b6c3026f9e7f1e"})
      console.log("PRODUCTS MILE", products)
      res.status(200).json({ success: true, products });
    }
    catch(error){
      console.log("error hai")
      res.status(500).json({ success: false, error: error.message });
    }
  })

module.exports = productRoute