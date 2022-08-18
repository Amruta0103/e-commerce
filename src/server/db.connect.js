const mongoose = require("mongoose");
const uri = "mongodb+srv://AmrutaD03:Amu@las16#@amruta-d-cluster.jdnzp.mongodb.net/?retryWrites=true&w=majority"
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