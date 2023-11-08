const express = require('express');
const http = require('http')
//const {Server} = require('socket.io')
const cors = require('cors')
const router = express.Router();
const app=express()
app.use(cors())
const Message = require('../Model/MessageSchema');
const Conversation = require('../Model/ConversationSchema');
const Seller = require('../Model/SellerSchema');
const io= require('socket.io')(8080,{
    cors: {
        origin: 'http://localhost:5173',
    }
});
let users = []
io.on("connection",(socket) =>{
    console.log('User Connected ',socket.id)
    socket.on('addUser',userId =>{
        const isUserExist = users.find(user => user.userId === userId);
        if (!isUserExist) {
            const user = {userId,socketId: socket.id};
            users.push(user)
            io.emit('getUsers', users);
            console.log(user)
        }
        console.log(users)
        
    });
    socket.on('disconnect',()=>{
        users = users.filter(user => user.socketId !== socket.id);
        io.emit('getUsers',users);
    })
})

router.post('/',async (req,res)=>{
    try {

        const {conversationId,senderId,message} = req.body;
        const date_T = new Date();
        const newMessage = new Message({conversationId,senderId,message:message,date:date_T});
        await newMessage.save();
        res.send("Message sent successfully");
    } catch (error) {
        console.log(error,"Error")
    }
})


router.post('/conversation', async (req, res) => {
    try {
        //const id = "651adc5c7bea3ef7b5ff632f";
        const { senderId, receiverId } = req.body;
        const newConversation = new Conversation({ members: [senderId,receiverId] });
        await newConversation.save()
        res.status(200).send('Conversation created successfully')
    } catch (error) {
        console.log(`Error while posting conversation\n ${error}`)
    }
});
router.get('/conversation/:id', async (req, res) => {//id holo buyer er
    try {
        const userId = req.params.id;
        
        const conversation = await Conversation.find({members:{$in: [userId] } });
        console.log(conversation)
        const conversationUserData = Promise.all(conversation.map(async (conversation) => {
            const receiverId = await conversation.members.find((member) => member !== userId);
            const user= await Seller.findById(receiverId);
            return {
                user:{email:user.email,fullName:user.name },
                conversationId: conversation._id
            }
        }))
        res.json(await conversationUserData)
    } catch (error) {
        console.log(`Error while getting conversation\n ${error}`)
    }
});

module.exports = router;