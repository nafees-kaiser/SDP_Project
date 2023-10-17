const express = require('express');
const router = express.Router();

const Order = require('../Model/OrderSchema');
const Buyer = require('../Model/BuyerSchema');

router.get('/', async (req, res) => {
    try {
      const id = "651c5377783c0719018cd17f";  
      const orders = await Order
        .find({ sellerId: id })
        .populate('product.productId')
        .sort({ Date: 0 })
        .exec();
  
      if (!orders) {
        console.log("No results found.");
        return res.status(404).json({ message: "No results found." });
      }
  
      // Create an object to store unique buyer names and the number of orders
      const buyerOrderCount = {};
  
      for (const order of orders) {
        const buyer = await Buyer.findById(order.buyerId).exec();
        
        const buyerName = buyer.name; // Assuming the name property exists in the buyer model
        if (!buyerOrderCount[buyerName]) {
          buyerOrderCount[buyerName] = 1;
        } else {
          buyerOrderCount[buyerName]++;
        }
      }
      
      // Convert the object into an array of objects for response
      const uniqueBuyers = Object.keys(buyerOrderCount).map((buyerName) => ({
        buyerName,
        orderCount: buyerOrderCount[buyerName],
      }));
      console.log(uniqueBuyers);
      res.json(uniqueBuyers);
    } catch (error) {
      console.error(`Error while fetching products: ${error}`);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

module.exports = router