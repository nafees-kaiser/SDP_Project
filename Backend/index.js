const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

dotenv.config({ path: './config.env' });
require('./Database/conn');

const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use(cors());


const registerRouter = require('./routes/register');
app.use("/register",registerRouter);


const registerSellerRouter = require('./routes/register_seller');
app.use("/register_seller",registerSellerRouter);


const loginRouter = require('./routes/login');
app.use("/login",loginRouter);



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
  
      // Create an object to store unique buyer names and the number of orders
      const buyerOrderCount = {};
  
      for (const order of orders) {
        const buyer = await Buyer.findById(order.buyerId).exec();
        
        const buyerName = buyer.name; // Assuming the name property exists in the buyer model
        if (!buyerOrderCount[buyerName]) {
          buyerOrderCount[buyerName] = 1;
        } else {
          buyerOrderCount[buyerName]++;
        }
      }
      
      // Convert the object into an array of objects for response
      const uniqueBuyers = Object.keys(buyerOrderCount).map((buyerName) => ({
        buyerName,
        orderCount: buyerOrderCount[buyerName],
      }));
      console.log(uniqueBuyers);
      res.json(uniqueBuyers);
    } catch (error) {
      console.error(`Error while fetching products: ${error}`);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  






  
  
  
  app.get('/count_customer/:id', async (req, res) => {
    try {
      const id = req.params.id;
    // Find and populate the orders
    const orders = await Order
      .find({ sellerId: id })
      .populate('product.productId')
      .exec();

    if (!orders) {
      console.log("No results found.");
      return res.status(404).json({ message: "No results found." });
    }

    // Create an object to store unique buyer names and the number of orders
    const buyerOrderCount = {};

    for (const order of orders) {
      const buyer = await Buyer.findById(order.buyerId).exec();
      const buyerName = buyer.name; // Assuming the name property exists in the buyer model
      if (!buyerOrderCount[buyerName]) {
        buyerOrderCount[buyerName] = 1;
      } else {
        buyerOrderCount[buyerName]++;
      }
    }

    // Convert the object into an array of objects for response
    const uniqueBuyers = Object.keys(buyerOrderCount).map((buyerName) => ({
      buyerName,
      orderCount: buyerOrderCount[buyerName],
    }));

    // Sort the uniqueBuyers array by orderCount in descending order
    uniqueBuyers.sort((a, b) => b.orderCount - a.orderCount);

    // Get the top 5 buyers
    const topBuyers = uniqueBuyers.slice(0, 5);

    res.json(topBuyers);
  } catch (error) {
    console.error(`Error while fetching products: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const sellerLoginRouter = require('./routes/seller_login');
app.use("/seller_login", sellerLoginRouter);


const verifyRouter = require('./routes/verify');
app.use("/verify", verifyRouter);


const orderRouter = require('./routes/order');
app.use("/order", orderRouter);


const productListingRouter = require('./routes/productListing');
app.use("/product-listing", productListingRouter);


const buyerProfileRouter = require('./routes/buyer_profile');
app.use("/buyer_profile", buyerProfileRouter);


app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}/`);
});
