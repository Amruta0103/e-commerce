const mongoose = require('mongoose');
const prevOrders = require('./prevOrders.model');

const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    firstName:{
      type:String,
      required:true,
    },
    lastName:{
      type:String,
      required:true,
    },
    email:{
      type:String,
      required:true,
    },
    mobileNo:{
      type:Number,
      required: true,
    },
    prevOrders:{
      type: mongoose.Schema.Types.Array,
      ref: "prevOrders",
      required: true,
    },
    // loggedIn:{
    //   type:mongoose.Schema.Types.Array,
    //   ref: logActivities,
    //   required: true,
    // },
  }
)

const User = new mongoose.model("User", UserSchema);

module.exports = { User };