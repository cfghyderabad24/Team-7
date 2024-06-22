const mongoose = require('mongoose');

// Define a schema
const bookSchema = new mongoose.Schema({
  ISBN: { type: Number, unique: true },
  book_title: { type: String },
  genre: { type: String },
  level: { type: Number },
  copies_of_books: { type: Number },
  frequency_of_checkout: { type: Number }
});


// Define a model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
