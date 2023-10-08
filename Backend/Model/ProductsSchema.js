const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true // Corrected from "require" to "required"
    },
    price: {
        type: Number, // Corrected data type
        required: true
    },
    storedQuantity: {
        type: Number, // Corrected data type
        required: true
    },
    district: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    wishlist: {
        type: Boolean,
        default: false
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller'
    },
    description: {
        type: String,
        required: false
    }
});

const Products = mongoose.model("Products", productsSchema); // Corrected model name
module.exports = Products;
