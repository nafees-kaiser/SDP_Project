const mongoose= require('mongoose');

const orderSchema = new mongoose.Schema({
    productId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }],
    buyerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer'
    },
    date:{
        type: Date,
        require: true
    },
    quantity: {
        type: String,
        require: true
    },
    totalPrice: {
        type: String,
        require: true
    },
    orderStatus:{
        type: String,
        default: 'not ordered',
        enum: ['not ordered','cart', 'pending', 'ordered']
    }

})
const Order = mongoose.model("ORDER",orderSchema);
module.exports = Order;