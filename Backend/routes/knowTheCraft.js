const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


const KnowNav = require('../Model/KnowNavSchema');

router.get("/", async(req, res)=>{
    try {
        const result = await KnowNav.find();
        // console.log(`Products are ${result}`)
        res.json(result)
    } catch (error) {
        console.log(`Error while fetching products ${error}`)
    }
});



module.exports = router;