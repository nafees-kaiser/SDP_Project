const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    area: {
        type: String,
        require: false
    },
    district: {
        type: String,
        require: false
    },
    division: {
        type: String,
        require: false
    },
    password: {
        type: String,
        require: true
    }

})
const User = mongoose.model("USER",userSchema);
module.exports = User;