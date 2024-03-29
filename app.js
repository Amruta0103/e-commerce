const express = require('express');
const app = express();
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require("./src/server/db.connect.js");


const productRoute = require("./src/server/routes/get.data.route");
const userLoginRoute = require("./src/server/routes/user.login.route");
const userSignUpRoute = require("./src/server/routes/user.signup.route");

connectDB();

app.use(cors())

app.use(express.json())

app.use("/products",productRoute);
app.use("/login",userLoginRoute);
app.use("/signup", userSignUpRoute);

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.listen(8080, () => {
  console.log("Server Started");
})