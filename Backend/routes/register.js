const express = require('express');
const router = express.Router();
const Buyer = require('../Model/BuyerSchema');
const multer = require('multer'); 
const path = require('path');

const storage = multer.diskStorage({
  /*
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  */
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  },
});


const upload = multer({ storage: storage });

router.post('/', upload.single('img'), async (req, res) => {
  try {
    const userData = req.body;
    const existingUser = await Buyer.findOne({ email: userData.email });
    console.log(req.file)
    if (!userData.name || !userData.email || !userData.password) {
      return res.status(400).json({ error: 'Incomplete user data' });
    } else if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    } else {
      // Check if 'req.file' exists to determine if the user uploaded an image
      const imgPath = req.file ? req.file.path : './images/383718348_883324090001131_6322558451816880116_n.jpg';

      const newUser = new Buyer({
        ...userData,
        img: imgPath,
      });

      const user = await newUser.save();
      res.status(201).json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user');
  }
});

module.exports = router;
