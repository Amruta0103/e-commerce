const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./db/db.connection')
const productRoute = require('./routes/products.route')

connectDB();

app.use(cors())

app.use(express.json())

app.use("/products",productRoute)

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.listen(3000, () => {
  console.log("Server Started");
})