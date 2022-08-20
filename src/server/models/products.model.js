const mongoose = require('mongoose');
// var Float = require('mongoose-float').loadType(mongoose);
const ProductSchema = new mongoose.Schema(
    {
        // _id: {
        //     type: String,
        //     unique: true
        // },
        image:{
          type: Array,
        },
        title: {
            type: String,
            required: [true, "Name is Mandatory to Enter"]
        },
        // brand: {
        //     type: String,
        //     required: [true, "Name is Mandatory to Enter"]
        // },
        price: {
            type: Number,
            required: [true, "Price is Mandatory to Enter"]
        },
        // quantity: {
        //     type: Number,
        //     required: [true, "Price is Mandatory to Enter"]
        // },
        // image: {
        //     type: mongoose.Schema.Types.Array,
        //     required: [true, "Price is Mandatory to Enter"]
        // },
        description: {
            type: String,
            required: [false, "Need a description"],
            min: [100, "minimum 100 chars needed..."],
        },
        // inStock: {
        //     type: String,
        //     required: [true, "Need stock status"],
        //     min: [100, "minimum 100 chars needed..."],
        // },
        //  fastDelivery: {
        //     type: String,
        //     required: [true, "Need stock status"],
        //     min: [100, "minimum 100 chars needed..."],
        // },
        // ratings: {
        //     type: Float,
        //     required: [true, "Need rating"],
        //     min: [0.1, "rating can't be zero"],
        // },
        // offer: String,
        // color: {
        //     type: Object,
        //     required: [true, "At least one color is necessary ..."]
        // },
        // reviews: mongoose.Schema.Types.Array,
        // freeDelivery: {
        //     type: Boolean,
        //     required: [false, "free delivery status not defined"]
        // }
    },
    // {
    //     timestamps: true
    // }
);

const Product = new mongoose.model("Product", ProductSchema);

module.exports = { Product };