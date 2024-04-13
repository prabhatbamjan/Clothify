const dotenv=require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const jwt=require('jsonwebtoken');
const multer=require('multer');
const path=require('path');
const cors=require('cors');
const PORT = process.env.PORT || 5000;
const userRoute= require("./routes/userRoute")

//connect to mongodb

mongoose
.connect(process.env.MONGO_URI)
.then(() =>{
  app.listen(PORT, ( )=> {
    console.log(`server running on port ${PORT}`)


  })
}
)
.catch((error) =>console.log(error) )
//Routes
app.get("/",(req,res) => {
    res.send("helloe world");
})
//Middlewares
app.use(express.json());
app.use(express.urlencoded( {extended :false}));
// app.use(bodyParser.json());
//app middlewares
app.use("/api/users",userRoute);