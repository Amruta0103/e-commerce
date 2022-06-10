const mongoose = require("mongoose");
const uri = "mongodb+srv://Amruta:Amu@las16#@cluster0.9qage.mongodb.net/paper-shop";

async function initializeDBConnection() {
    try {
        const connection = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        if (connection) {
            console.log("Succesfully connected to the database");
        }
    } catch (error) {
        console.error("Mongoose connection failed", error);
    }
}

module.exports = { initializeDBConnection };