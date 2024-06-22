// models/transaction.js
const mongoose = require('mongoose');
const Book = require('./Book.js');
const Student = require('./Student.js');

const transactionSchema = new mongoose.Schema({
  aadhar: { type: Number, required: true },
  ISBN: { type: Number, required: true },
  book_name: { type: String },
  level: { type: Number },
  genre: { type: String },
  checkin: { type: Date, required: true },
  checkout: { type: Date },
  duedate: { type: Date }
});

// Composite key on aadhar, ISBN, and checkin
transactionSchema.index({ aadhar: 1, ISBN: 1, checkin: 1 }, { unique: true });

// Pre-save hook to populate book details
transactionSchema.pre('save', async function(next) {
  try {
    const book = await Book.findOne({ ISBN: this.ISBN });
    if (book) {
      this.book_name = book.book_title;
      this.level = book.level;
      this.genre = book.genre;
    }
    next();
  } catch (error) {
    next(error);
  }
});

const Transaction = mongoose.model('Checkin_hist', transactionSchema);

module.exports = Transaction;
