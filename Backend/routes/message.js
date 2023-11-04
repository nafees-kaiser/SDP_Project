const express = require('express');
const http = require('http')
const {Server} = require('socket.io')
const cors = require('cors')
const router = express.Router();
const app=express()
app.use(cors())
const Buyer = require('../Model/BuyerSchema');
/*
const server = http.createServer(app);

const io = new Server(server,{
    cors: {
        origin:"http://localhost:5173",
        methods: ["GET","POST"],
    },
});

io.on("connection",(socket) =>{
    console.log(socket.id)
})
*/
router.get('/:id', async (req, res) => {
    try {
        //const id = "651adc5c7bea3ef7b5ff632f";
        const id= req.params.id;
        const result = await Buyer.findById(id);
        res.json(result);
    } catch (error) {
        console.log(`Error while fetching buyer\n ${error}`)
    }
});

module.exports = router;