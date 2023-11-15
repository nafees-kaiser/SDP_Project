const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


const KnowNav = require('../Model/KnowNavSchema');
const Seller = require('../Model/SellerSchema');

router.get("/", async(req, res)=>{
    try {
        const result = await KnowNav.find();
        // console.log(`Products are ${result}`)
        res.json(result);
    } catch (error) {
        console.log(`Error while fetching products ${error}`);
    }
});

router.get("/:id",async(req, res)=>{
    try{
        const {id} = req.params;
        const result = await KnowNav.findById(id).populate("SellerId");
        // console.log(result);
        res.json(result);
    }
    catch(error){
        console.log(`Error while fetching know crafts ${error}`);
    }
});



module.exports = router;