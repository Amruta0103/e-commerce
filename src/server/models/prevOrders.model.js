const mongoose = require('mongoose');
const Product = require('./products.model')

// const PurchasedOnSchema = new mongoose.Schema(
//   {
//     timestamps: true,
//   }
// )

const PrevOrderSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products"
    },
    title:{
      type: mongoose.Schema.Types.String,
      ref: "Products"
    },
    price:{
      type: mongoose.Schema.Types.Number,
      ref: "Products"
    },
    description:{
      type: mongoose.Schema.Types.String,
      ref: "Products"
    },
  },
  {
    timestamps: true,
  }
)

// const PurchasedOn = new mongoose.model("PurchasedOn", PurchasedOnSchema);
const PrevOrders = new mongoose.model("PrevOrders", PrevOrderSchema);

module.exports = {PrevOrders} 