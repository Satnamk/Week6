const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
});

const Book = mongoose.model("Book", bookSchema);

// Get all Books
const getBooks = async (req, res) => {
  const books = await Book.find({});
  res.status(200).json(books);
};

// Add one Book
const addBook = async (req, res) => {
  const { title, author, genre } = req.body;
  const newBook = new Book({ title, author, genre });
  await newBook.save();
  res.status(201).json(newBook);
};

// Delete Book by ID
const deleteBook = async (req, res) => {
  const { id } = req.params;

  const book = await Book.findByIdAndDelete({ _id: id });
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.status(200).json({ message: "Book deleted successfully" });
};

// Delete all Books
const deleteAllBooks = async (req, res) => {
  const result = await Book.deleteMany({}); 
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} books successfully` });
};

// Update Book by ID
const updateBook = async (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  const book = await Book.findOneAndUpdate({ _id: id }, updatedBook);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.status(200).json(book);
};

module.exports = { getBooks, addBook, deleteBook, deleteAllBooks, updateBook, };
