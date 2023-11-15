const express = require('express');
const router = express.Router();

const Products = require('../Model/ProductsSchema');
const Sells = require('../Model/SellsSchema')

router.get('/', async(req, res)=>{
    try {
        const result = await Products.find();
        // console.log(`Products are ${result}`)
        res.json(result)
    } catch (error) {
        console.log(`Error while fetching products ${error}`)
    }
});

router.get('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        // console.log(id);
        const result = await Products.findById(id);
        // console.log(`The singular product is ${result}`)
        const seller = await Sells.find({productId: id}).populate('productId').populate('sellerId');
        // console.log('The seller awaae is ', seller);

        res.json(seller);
    } catch (error) {
        console.log(`Error while fetching singular product\n ${error}`)
    }
})

module.exports = router