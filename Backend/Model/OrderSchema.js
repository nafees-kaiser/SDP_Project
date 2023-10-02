const mongoose= require('mongoose');

const orderSchema = new mongoose.Schema({
    productId: {
        type:String,
        require: true
    },
    amount: {
        type: String,
        require: true
    },
    totalPrice: {
        type: String,
        require: true
    }

})
const Order = mongoose.model("ORDER",orderSchema);
module.exports = Order;