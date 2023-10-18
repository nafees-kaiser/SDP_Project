const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true 
    },
    notificationDescription: {
        type: String,
        required: true 
    },
});

const Notifications = mongoose.model("Notifications", NotificationSchema);
module.exports = Notifications;
