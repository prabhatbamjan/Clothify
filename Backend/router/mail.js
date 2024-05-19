const express = require("express");
const app = express();
const mail = require("../controller/mail1");

// Add Product
app.post("/add", mail.sendMail);
module.exports = app;