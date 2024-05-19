
const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {

    notice: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);

const notification = mongoose.model("notice1", notificationSchema );
module.exports = notification;
