//import express
const express = require("express");
//import dotenv
const dotenv = require("dotenv").config();
//import routes path
const path = require("./routes/contactRoutes");
const userPath = require("./routes/userRegister");
const errorhandler = require("./middleware/errorhandler");
const connectDb = require("./config/bdConnection");

connectDb();
const app = express();

//create env port
const port = process.env.PORT || 5000;
// creat get request
// app.get("/api/contacts", (req, res) => {
//     res.send("Get all contacts");
//   });
app.use(express.json());

//middleware
app.use("/api/contacts", path);
app.use("/api/users",  userPath);
app.use(errorhandler);
//server listen
app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
