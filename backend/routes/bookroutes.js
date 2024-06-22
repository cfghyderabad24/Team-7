const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// POST route to add a person
router.post('/add-book', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).send(newBook);
    } catch (err) {
        res.status(400).send(err);
    }
});

// GET route to retrieve book details by ISBN using path parameter
router.get('/getbook/:ISBN', async (req, res) => {
    try {
        const ISBN = req.params['ISBN'];

        console.log(ISBN);

        const book = await Book.findOne({ ISBN });
        if (!book) {
            return res.status(404).send('Book not found');
        }

        res.status(200).send(book);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


module.exports = router;