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

// READ (GET) a specific book by ID
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a book by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book Entry not found" });
    }
    res.status(200).json({ message: "Book Entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE (PUT) a book by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        duration: Number(req.body.duration),
        borrowedDate: Date.parse(req.body.borrowedDate),
        returnDate: Date.parse(req.body.returnDate),
      },
      {
        new: true,
      }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  //   Book.findById(req.params.id)
  //     .then((book) => {
  //       book.username = req.body.username;
  //       book.title = req.body.title;
  //       book.author = req.body.author;
  //       book.genre = req.body.genre;
  //       book.ISBN = req.body.ISBN;
  //       book.publishedDate = req.body.publishedDate;
  //       book.description = req.body.description;
  //       book.duration = Number(req.body.duration);
  //       book.borrowedDate = Date.parse(req.body.borrowedDate);
  //       book.returnDate = Date.parse(req.body.returnDate);

  //       book
  //         .save()
  //         .then(() => res.json("Book updated!"))
  //         .catch((err) => res.status(400).json("Error: " + err));
  //     })
  //     .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
