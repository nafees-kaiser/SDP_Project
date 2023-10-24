const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer'
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller'
    },
    message: {
        type: String,
        required: true
    },
    attachment: {
        type: String,
        require: false
    },
    date: {
        type: Date,
        required: true 
    },
    
    
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
