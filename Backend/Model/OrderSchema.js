const mongoose= require('mongoose');

const orderSchema = new mongoose.Schema({
    product: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        },
        quantity: {
            type: Number,
            require: true
        }

    },],
    buyerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer'
    },
    date:{
        type: Date,
        require: true
    },
    totalPrice: {
        type: Number,
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