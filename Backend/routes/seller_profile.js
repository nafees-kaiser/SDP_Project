const express = require('express');
const router = express.Router();

const Seller = require('../Model/SellerSchema');


router.get('/:id', async (req, res) => {
    try {
        //const id = "651adc5c7bea3ef7b5ff632f";
        const id= req.params.id;
        const result = await Seller.findById(id);
        res.json(result);
    } catch (error) {
        console.log(`Error while fetching buyer\n ${error}`)
    }
});

module.exports = router