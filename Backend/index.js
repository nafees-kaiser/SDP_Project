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
      res.status(200).json({ success: true, message: 'Login successful', id:user.id });
      console.log('User saved to the database(BACKEND)'+ user.id);
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
    console.log(user.id);
    if (user) {
      // User is found, and the credentials match
      res.status(200).json({ success: true, message: 'Login successful', id:user.id });
      
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
      res.status(200).json({ success: true, message: 'Login successful', id:user.id });
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

 /*
      console.log("Orders:", JSON.stringify(orders.map(order => ({
        productId: order.product[0]?.productId,
        sellerId: order.product[0]?.productId?.seller,
        buyerId: order.buyerId,
        quantity: order.product[0]?.quantity 
      }), null, 2)));

    console.log(
      await Promise.all(
        orders.map(async (order, index) => {
          const user = await Buyer.findById(order.buyerId).exec();
          return {
            buyerId: order.buyerId,
            productName: order.product[index].productId.productName,
            quantity: order.product[index].quantity,
            price: order.product[index].productId.price,
            Date: order.date,
            Buyer: user
          };
        })
      )
    );
      
    */

  app.get('/order_seller/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const orders = await Order
      .find({ sellerId: id })
      .populate('product.productId')
      .sort({ Date: -1 })
      .exec();

      console.log(orders);
      res.json(
        await Promise.all(
          orders.map(async (order, index) => {
            const product = await Products.findById(order.product[index]?.productId).exec();
            console.log(index +": "+order.product[0]?.productId);
            const buyer = await Buyer.findById(order.buyerId).exec();
            const seller = await Seller.findById(order.sellerId).exec();
            return {
              buyerId: order.buyerId,
              productName: order.product[0]?.productId.productName,
              quantity: order.product[0]?.quantity,
              price: order.product[0]?.productId.price,
              Date: order.date,
              Buyer: buyer,
              Seller: seller
            };
          })
        )
      );
  
      
    } catch (error) {
      console.error("ERROR: " + error);
      res.status(500).json({ error: "Error retrieving orders" });
    }
  });
    

  app.get('/practice', async (req, res) => {
    try {
      const id = "651c5377783c0719018cd17f";
      const orders = await Order
        .find({ sellerId: id })
        .populate('product.productId')
        .sort({ Date: 0 })
        .exec();
        
      if (!orders) {
        console.log("No results found.");
        return res.status(404).json({ message: "No results found." });
      }
  
      const promises = orders.map(async (order, index) => {
        console.log(`Processing order ${index}`);
        console.log("order.product"+order.product);
        console.log(order.product[0].productId);
  
        const product = order.product[0].productId;
  
        if (!product || !product.productName || !product.price) {
          console.log(`${index}: Product data is missing for this order`);
          return null;
        }
  
        const buyer = await Buyer.findById(order.buyerId).exec();
        const seller = await Seller.findById(order.sellerId).exec();
  
        return {
          buyerId: order.buyerId,
          productName: product.productName || "N/A",
          quantity: order.product[0].quantity || "N/A",
          price: product.price || "N/A",
          Date: order.date,
          Buyer: buyer,
          Seller: seller
        };
      });
  
      const results = await Promise.all(promises);
      
      // Filter out null entries (orders with missing or incomplete product data)
      //const filteredResults = results.filter(result => result !== null);
  
      res.json(results);
    } catch (error) {
      console.error(`Error while fetching products: ${error}`);
      res.status(500).json({ message: "Internal Server Error" });
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
