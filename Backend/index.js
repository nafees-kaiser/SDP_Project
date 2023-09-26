const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const app = express();

dotenv.config({ path: './config.env' });
require('./Database/conn');
const User = require('./Model/UserSchema');
const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use(cors());

// Handle user registration
app.post('/register', async (req, res) => {
  try {
    const userData = req.body;
    console.log("UserData: "+ userData.mobileNumber);
    // Add validation logic here to ensure data is complete and valid
    if (!userData.name || !userData.email || !userData.password) {
      alert('Incomplete user data');
      return res.status(400).json({ error: 'Incomplete user data' });
    }

    // Check if the user with the given email already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      alert('User with this email already exists');
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Create a new user document and save it to the database
    const newUser = new User(userData);
    const user = await newUser.save();
    console.log("User: "+user);
    res.status(201).json(user);
    console.log('User saved to the database(BACKEND)');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user');
    console.log('Error in database');
  }
});







app.get('/', async (req, res) => {
  try {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
        user: 'shavoddin54@gmail.com',
        pass: '#Sh@01982711168',
      }
    });

    const info = await transporter.sendMail({
      from: "shavoddin54@gmail.com" , // sender address
      to: "hridoyshabuddin@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.json(info);

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Email could not be sent." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}/`);
});
