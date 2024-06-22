// routes/transaction.js
const express = require('express');
const router = express.Router();
const Checkin_hist = require('../models/Checkin_hist');
const Book = require('../models/Book');

router.post('/preview', async (req, res) => {
    try {
        const { aadhar, ISBN, checkin, duedate, book_name, level, genre, checkout } = req.body;
        

        // Retrieve the book by ISBN and decrease the copies_of_books by 1
        const book = await Book.findOne({ ISBN });
        if (!book) {
            return res.status(404).send('Book not found');
        }
        if (book.copies_of_books <= 0) {
            return res.status(400).send('No copies available');
        }
        book.copies_of_books -= 1;
        await book.save();

        const newTransaction = new Checkin_hist({ aadhar, ISBN, checkin, duedate, book_name, level, genre, checkout });
        await newTransaction.save();
        res.status(201).send(newTransaction);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post('/checkout', async (req, res) => {
    try {
        const { aadhar, ISBN } = req.body;
        
        // Find the transaction by aadhar and ISBN
        const transaction = await Checkin_hist.findOne({ aadhar, ISBN });
        if (!transaction) {
            return res.status(404).send('Transaction not found');
        }

        // Update the checkout field with the current timestamp
        transaction.checkout = new Date();
        await transaction.save();

        // Retrieve the book by ISBN and increase the copies_of_books by 1
        const book = await Book.findOne({ ISBN });
        if (!book) {
            return res.status(404).send('Book not found');
        }
        book.copies_of_books += 1;
        await book.save();
        
        res.status(200).send(transaction);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
