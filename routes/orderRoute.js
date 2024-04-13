const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const {
  createOrder,
  getOrder,
  getOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/orderController");
const { upload } = require("../utils/fileUpload");

router.post("/", protect, upload.single("image"), createOrder);
router.patch("/:id", protect, upload.single("image"), updateOrder);
router.get("/", protect, getOrder);
router.get("/:id", protect, getOrder);
router.delete("/:id", protect, deleteOrder);

module.exports = router;
