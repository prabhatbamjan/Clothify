const Product = require("../models/product");
const  notification = require("../models/notification");

const notice = async (req, res) => {
  try {
    const lowStockProducts = await Product.find({ stock: { $lt: 10 } })
      .sort({ _id: -1 })
      .select('name stock');

    // Prepare notices for insertion
    const notices = [];
    for (const product of lowStockProducts) {
        // Check if notice already exists for this product
        const existingNotice = await notification.findOne({ notice: `Product ${product._id} is low in stock` });
        if (!existingNotice) {
            notices.push({
                notice: `Product ${product._id} is low in stock`,
            });
        }
    }

    // Insert notices into the "Notice" collection
    if (notices.length > 0) {
        await notification.insertMany(notices);
    }

    // Respond with the low stock products

} catch (error) {
    console.error(error);
    res.status(500).send('Server error');
}

  };
  const getAllNotice = async (req, res) => {
    notice()
    try {
      const allnotice = await notification.find().sort({ _id: -1 });
      res.json(allnotice);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  };
  const deletenotice = async (req, res) => {
    const { _id } = req.body;
    try {
      // Delete the notification by _id
      const result = await notification.deleteOne({ _id: _id });
      if (result.deletedCount === 1) {
        res.json({ message: 'Notification deleted successfully' });
      } else {
        res.status(404).json({ error: 'Notification not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  };
  module.exports = {
   
    getAllNotice,
    deletenotice,
  };