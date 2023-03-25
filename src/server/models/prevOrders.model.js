const mongoose = require('mongoose'); 
// eslint-disable-next-line
const Products = require("./products.model");

// const PurchasedOnSchema = new mongoose.Schema(
//   {
//     timestamps: true,
//   }
// )

const PrevOrderSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Products.Product
    },
    title:{
      type: mongoose.Schema.Types.String,
      ref: Products.Product
    },
    price:{
      type: mongoose.Schema.Types.Number,
      ref: Products.Product
    },
    description:{
      type: mongoose.Schema.Types.String,
      ref: Products.Product
    },
  },
  {
    timestamps: true,
  }
)

// const PurchasedOn = new mongoose.model("PurchasedOn", PurchasedOnSchema);
const PrevOrders = new mongoose.model("PrevOrders", PrevOrderSchema);

module.exports = {PrevOrders} 