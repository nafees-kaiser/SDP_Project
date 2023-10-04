const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const app = express();

dotenv.config({ path: './config.env' });
require('./Database/conn');

const Buyer = require('./Model/BuyerSchema');
const Products = require('./Model/ProductsSchema');
const Order = require('./Model/OrderSchema');
const Seller = require('./Model/SellerSchema');

const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use(cors());

// Handle user registration
app.post('/register', async (req, res) => {
  try {
    const userData = req.body;
    console.log("UserData: "+ userData.mobileNumber);
    const existingUser = await Buyer.findOne({ email: userData.email });
    // Add validation logic here to ensure data is complete and valid
    if (!userData.name || !userData.email || !userData.password) {
      alert('Incomplete user data');
      return res.status(400).json({ error: 'Incomplete user data' });
    }
    else if (existingUser) {
      alert('User with this email already exists');
      return res.status(400).json({ error: 'User with this email already exists' });
    }
    else 
    {
      const newUser = new Buyer(userData);
      const user = await newUser.save();
      res.status(201).json(user);
      console.log('User saved to the database(BACKEND)');
    }
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user');
    console.log('Error in database');
  }
});



app.post('/register_seller', async (req, res) => {
  try {
    const userData = req.body;
    console.log("UserData: "+ userData.mobileNumber);
    const existingUser = await Seller.findOne({ email: userData.email });
    // Add validation logic here to ensure data is complete and valid
    if (!userData.name || !userData.email || !userData.password) {
      alert('Incomplete user data');
      return res.status(400).json({ error: 'Incomplete user data' });
    }
    else if (existingUser) {
      alert('User with this email already exists');
      return res.status(400).json({ error: 'User with this email already exists' });
    }
    else 
    {
      const newUser = new Seller(userData);
      const user = await newUser.save();
      res.status(201).json(user);
      console.log('User saved to the database(BACKEND)');
    }
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user');
    console.log('Error in database');
  }
});





app.post('/login', async (req,res)=>{
  const { email, password } = req.body;

  try {
    const user = await Buyer.findOne({ email, password });

    if (user) {
      // User is found, and the credentials match
      res.json({ success: true, message: 'Login successful' });
    } else {
      // User not found or incorrect credentials
      res.status(401).json({ success: false, message: 'Login failed' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


app.post('/seller_login', async (req,res)=>{
  const { email, password } = req.body;

  try {
    const user = await Seller.findOne({ email, password });

    if (user) {
      // User is found, and the credentials match
      res.json({ success: true, message: 'Login successful' });
    } else {
      // User not found or incorrect credentials
      res.status(401).json({ success: false, message: 'Login failed' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});



app.post('/verify', async (req, res) => {
  const userData = req.body;
  console.log("SMTP: "+ userData.mobileNumber);
  try {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
        user: 'sdpproject74@gmail.com',
        pass: 'hvog wqha iigv oatn',
      }
    });
    const random = Math.floor(Math.random() * 10001);
    const info = await transporter.sendMail({
      from: "sdp_project74@gmail.com" , // sender address
      to: userData.email , // list of receivers
      subject: "User Authentication Code from Heritage Craft Connect✔", // Subject line
      text: `Your Registration Code is ${random}`, // plain text body
  
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.status(200).json({ data: random });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Email could not be sent." });
  }
});


app.get('/product-listing', async(req, res)=>{
    try {
        const result = await Products.find();
        // console.log(`Products are ${result}`)
        res.json(result)
    } catch (error) {
        console.log(`Error while fetching products ${error}`)
    }
});

app.get('/individual-product/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        // console.log(id);
        const result = await Products.findById(id);
        // console.log(`The singular product is ${result}`)
        res.json(result);
    } catch (error) {
        console.log(`Error while fetching singular product\n ${error}`)
    }
})
app.get('/buyer_profile', async(req, res)=>{
    try {
        const id = "651adc5c7bea3ef7b5ff632f";
        const result = await Buyer.findById(id);
        res.json(result);
    } catch (error) {
        console.log(`Error while fetching buyer\n ${error}`)
    }
})



app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}/`);
});
