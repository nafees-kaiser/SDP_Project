const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


const Sells = require("../Model/SellsSchema");
const Seller = require("../Model/SellerSchema");
const Order = require("../Model/OrderSchema");
const Buyer = require("../Model/BuyerSchema");
const Cart = require("../Model/CartSchema")

router.get("/:id", async(req, res)=>{
    const id = req.params.id;
    // console.log(id);
    try {
        const buyer = await Buyer.findById(id);
        // console.log(buyer);
        // const products = await Order.find({orderStatus: {$eq: 'cart'}}).populate('product.productId');
        const cartProducts = await Cart.find({buyerId:id}).populate("productId");
        // console.log(cartProducts);
        res.json({buyer, cartProducts});
    } catch (error) {
        console.log(error);
    }
});
router.post("/:id",async(req, res)=>{
    const id = req.params.id;
    console.log(req.body);
    // const { _id } = req.body;
    try {
        // const order = await Order.findById(_id);
        // // console.log(order);
        // order.orderStatus = 'pending';
        // const savedData = await order.save();
        // // console.log(savedData);
        // res.send(true);
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;