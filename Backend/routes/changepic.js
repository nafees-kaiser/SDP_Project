const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('../cloudinary');


const Buyer = require('../Model/BuyerSchema');

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
const upload = multer({ storage: storage });

router.post('/:buyerId', upload.single('img'), async (req, res) => {
  try {
    const { buyerId } = req.params;

    // Check if the buyer exists
    const result = await Buyer.findById(buyerId);
    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

    //   console.log('Image Buffer Size:', req.file.buffer.length);
      async function run(imgBuffer) {
        try {
          // Upload the image to Cloudinary
          const response = await cloudinary.uploader.upload_stream(
            (error, result) => {
              if (error) {
                console.error('Error uploading to Cloudinary:', error);
                throw new Error('Image upload to Cloudinary failed');
              }
              return result;
            }
          ).end(imgBuffer);
  
          // Extract and return the Cloudinary URL from the response
          return response.secure_url;
        } catch (error) {
          console.error('Error uploading to Cloudinary:', error);
          throw new Error('Image upload to Cloudinary failed');
        }
      }
  
      const cloudinaryUrl = await run(req.file.buffer); // Use req.file.buffer instead of req.file.originalname
      result.img = cloudinaryUrl;
  
      console.log('Uploaded image URL:', cloudinaryUrl);
      await result.save();
  
      res.status(200).json({ success: true });
  
    } catch (error) {
      console.error('Error handling image upload:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;