const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
    },
    ISBN: {
      type: String,
      unique: true,
      required: true,
    },
    publishedDate: { type: Date },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    borrowedDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
