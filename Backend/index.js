const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
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

    // Add validation logic here to ensure data is complete and valid
    if (!userData.name || !userData.email || !userData.password) {
      return res.status(400).json({ error: 'Incomplete user data' });
    }

    // Check if the user with the given email already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Create a new user document and save it to the database
    const newUser = new User(userData);
    const user = await newUser.save();

    res.status(201).json(user);
    console.log('User saved to the database(BACKEND)');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user');
    console.log('Error in database');
  }
});







app.get('/', (req, res) => {
  res.send('Hello from mongo');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}/`);
});
