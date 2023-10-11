const mongoose = require('mongoose');

const ProductReviewSchema = new mongoose.Schema({
    reviewDescription: {
        type: String,
        required: true 
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    },
});

const Reviews = mongoose.model("Reviews", ProductReviewSchema);
module.exports = Reviews;
