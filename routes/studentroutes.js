const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
//const {jwtAuthMiddleware, generateToken} = require('../jwt');

// POST route to add a person
router.post('/signup', async (req, res) =>{
    try{
        const data = req.body // Assuming the request body contains the person data

        // Create a new Person document using the Mongoose model
        const newStudent = new Student(data);

        // Save the new person to the database
        const response = await newStudent.save();
        console.log('data saved');


        res.status(200).json({response: response});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

module.exports = router;