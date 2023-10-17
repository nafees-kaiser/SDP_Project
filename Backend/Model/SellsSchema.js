const mongoose = require('mongoose');

const sellsSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Types.ObjectId,
        ref: "Products"
    },
    sellerId: {
        type: mongoose.Types.ObjectId,
        ref: "Seller"
    },
});

const Sells = mongoose.model("sells", sellsSchema); // Corrected model name
module.exports = Sells;

