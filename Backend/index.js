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


const sellerLoginRouter = require('./routes/seller_login');
app.use("/seller_login", sellerLoginRouter);


const verifyRouter = require('./routes/verify');
app.use("/verify", verifyRouter);


const orderSellerRouter = require('./routes/orderSeller');
app.use("/order_seller", orderSellerRouter);


const practiceRouter = require('./routes/practice');
app.use("/practice", practiceRouter);


const countCustomerRouter = require('./routes/countCustomer');
app.use("/count_customer", countCustomerRouter);


const productListingRouter = require('./routes/productListing');
app.use("/product-listing", productListingRouter);


const buyerProfileRouter = require('./routes/buyer_profile');
app.use("/buyer_profile", buyerProfileRouter);


app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}/`);
});
