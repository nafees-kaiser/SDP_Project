const express = require('express');
const router = express.Router();

const Seller = require('../Model/SellerSchema');

router.post('/', async (req, res) => {
  try {
    const userData = req.body;
    console.log("UserData: " + userData.mobileNumber);
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
    else {
      const newUser = new Seller(userData);
      const user = await newUser.save();
      res.status(200).json({ success: true, message: 'Login successful', id: user.id });
      console.log('User saved to the database(BACKEND)' + user.id);
    }

  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user');
    console.log('Error in database');
  }
});

module.exports = router