
const express = require('express');
const router = express.Router();
const Credentials = require('../models/Credentials');


router.post('/signup', async (req, res) =>{
    try{
        const data = req.body // Assuming the request body contains the person data

        // Create a new Person document using the Mongoose model
        const newLib = new Credentials(data);

        // Save the new person to the database
        const response = await newLib.save();
        console.log('data saved');


        res.status(200).json({response: response});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})


// Route to handle login and redirect based on status
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await Credentials.findOne({ username, password });
      if (!user) {
        return res.status(401).send('Invalid credentials');
      }
      if (user.status) {
        // Respond with a success message if status is true
        return res.status(200).json({ message: 'User logged in successfully' });
      } else {
        // Redirect to another page if status is false (e.g., admin home)
        return res.redirect('/adminhome');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

module.exports = router;
