const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

// READ (GET) all books
router.route("/").get(async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE (POST) a new book
router.route("/").post(async (req, res) => {
  try {
    const {
      username,
      title,
      author,
      genre,
      ISBN,
      publishedDate,
      description,
      duration,
      borrowedDate,
      returnDate,
    } = req.body;

    if (
      !username ||
      !title ||
      !author ||
      !ISBN ||
      !description ||
      !duration ||
      !borrowedDate ||
      !returnDate
    ) {
      return res
        .status(400)
        .json({ error: "All required field must be filled!" });
    }

    const newBook = new Book({
      username,
      title,
      author,
      genre,
      ISBN,
      publishedDate,
      description,
      duration: Number(duration),
      borrowedDate: Date.parse(borrowedDate),
      returnDate: Date.parse(returnDate),
    });

    const savedBook = await newBook.save();
    res.status(201).json({ msg: "Book added!", savedBook });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
