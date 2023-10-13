const express = require('express');
const router = express.Router();

const Order = require('../Model/OrderSchema');
const Buyer = require('../Model/BuyerSchema');

 /*
      console.log("Orders:", JSON.stringify(orders.map(order => ({
        productId: order.product[0]?.productId,
        sellerId: order.product[0]?.productId?.seller,
        buyerId: order.buyerId,
        quantity: order.product[0]?.quantity 
      }), null, 2)));

    */

router.get('/',async (req,res)=>{
    try {
      const order = await Order.find();
      const orders = await Order.find().populate('product.productId');
      //res.json(orders);
     
      res.json(
        await Promise.all(
          orders.map(async (order, index) => {
            const user = await Buyer.findById(order.buyerId).exec();
            return {
              buyerId: order.buyerId,
              productName: order.product[index].productId.productName,
              quantity: order.product[index].quantity,
              price: order.product[index].productId.price,
              Date: order.date,
              Buyer: user,
            };
          })
        )
      );
        
  
    } catch(error){
      console.error("ERROR: "+error);
      res.status(500).json({ error: "Error retrieving orders" });
    }
  });

module.exports = router