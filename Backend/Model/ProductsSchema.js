const mongoose= require('mongoose');

const productsSchema = new mongoose.Schema({
    productName: {
        type:String,
        require: true
    },
    district: {
        type: String,
        require: true
    },
    division: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    seller: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false

    }

})
const Products = mongoose.model("PRODUCTS",productsSchema);
module.exports = Products;