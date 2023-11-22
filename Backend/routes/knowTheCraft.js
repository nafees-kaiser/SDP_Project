const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


const KnowNav = require('../Model/KnowNavSchema');
const Seller = require('../Model/SellerSchema');

router.get("/", async (req, res) => {
    try {
        const { division, district, search } = req.query;
        const query = {
            ...(district ? { Product_District: { $in: district.split(',').map(dist => new RegExp(`^${dist}$`, 'i')) } } : {}),
            ...(division ? { Product_Division: new RegExp(`^${division}$`, 'i') } : {}),
            ...(
                search
                    ? {
                        $or: [
                            { Artisan_Title: { $regex: search, $options: 'i' } },
                            { Product_District: { $regex: search, $options: 'i' } },
                            { Product_Division: { $regex: search, $options: 'i' } },
                            // Add more fields as needed
                        ],
                    }
                    : {}
            ),
        }
        // console.log("Before formatting\n", req.query);
        // console.log("After formatting\n", query);

        const result = await KnowNav.find(query);
        // console.log(`Products are ${result}`)
        res.json(result);
    } catch (error) {
        console.log(`Error while fetching products ${error}`);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await KnowNav.findById(id).populate("SellerId");
        // console.log(result);
        res.json(result);
    }
    catch (error) {
        console.log(`Error while fetching know crafts ${error}`);
    }
});



module.exports = router;