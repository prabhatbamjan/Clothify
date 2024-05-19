const express = require("express");
const app = express();
const notice= require("../controller/notification");



// Get All Products
app.get("/get", notice.getAllNotice);
app.get("/delete/:id", notice.deletenotice);


module.exports = app;