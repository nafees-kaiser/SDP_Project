const express = require('express');
const router = express.Router();

const Buyer = require('../Model/BuyerSchema');


router.get('/', async (req, res) => {
    try {
        const id = "651adc5c7bea3ef7b5ff632f";
        const result = await Buyer.findById(id);
        res.json(result);
    } catch (error) {
        console.log(`Error while fetching buyer\n ${error}`)
    }
});

module.exports = router