const mongoose = require("mongoose");
const uri = "mongodb+srv://AmrutaD03:Amu%40las16%23@amruta-d-cluster.jdnzp.mongodb.net/?retryWrites=true&w=majority"
async function connectDB() {
    try {
        console.log("ohh its sever")
        const connection = await mongoose.connect(uri);
        if(connection) {
            console.log("Succesfully connected to the database");
        }
    } catch (error) {
        console.error("Mongoose connection failed", error);
    }
}


module.exports =  connectDB ;