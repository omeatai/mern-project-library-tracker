import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../../contexts/bookContext";
const { format } = require("date-fns");

const BookList = () => {
  const { books, topRef, onDeleteHandler } = useContext(BookContext);

  const formatDate = (date) => {
    return format(new Date(date), "yyyy-MM-dd");
  };

  return (
    <main className="m-8" ref={topRef}>
      <section>
        <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-full ">
          <h1 className="text-4xl text-gray-600 text-center">
            List Borrowed Books
          </h1>
          <hr className="border-t-4 border-gray-600 my-4" />
          <div className="md:hidden flex flex-col justify-center items-center gap-4">
            {books.length > 0 ? (
              books.map((book) => (
                <div
                  key={book._id}
                  className="w-full bg-white border border-4 border-black bg-opacity-50 rounded-lg p-4 text-center"
                >
                  <h1 className="text-2xl text-black">{book.title}</h1>
                  <h2>
                    Borrowed By:
                    <span className="font-bold"> {book.username}</span>
                  </h2>
                  <hr className="border-t-4 border-red-400 my-4" />
                  <div className="text-left text-sm">
                    <p>
                      <span className="font-bold">Author:</span> {book.author}
                    </p>
                    <p>
                      <span className="font-bold">Genre:</span> {book.genre}
                    </p>
                    <p>
                      <span className="font-bold">ISBN:</span> {book.ISBN}
                    </p>
                    <p>
                      <span className="font-bold">Published Date: </span>
                      {formatDate(book.publishedDate)}
                    </p>
                    <p>
                      <span className="font-bold">Description: </span>
                      {book.description}
                    </p>
                    <p>
                      <span className="font-bold">Duration: </span>{" "}
                      {book.duration} Days
                    </p>
                    <p>
                      <span className="font-bold">Borrowed Date: </span>
                      {formatDate(book.borrowedDate)}
                    </p>
                    <p>
                      <span className="font-bold">Return Date: </span>
                      {formatDate(book.returnDate)}
                    </p>
                  </div>
                  <hr className="border-t-4 border-red-400 my-4" />
                  <div className="flex justify-around">
                    <Link to={`/edit/${book._id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                        Edit
                      </button>
                    </Link>

                    <button
                      onClick={() => onDeleteHandler(book._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h2>No Borrowed Books.</h2>
            )}
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-full text-xs text-left rtl:text-right text-gray-800 dark:text-gray-800 hidden md:block table-auto p-4 my-4">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="p-3">No.</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">User</th>
                  <th className="p-3">Author</th>
                  <th className="p-3">Genre</th>
                  <th className="p-3">ISBN</th>
                  <th className="p-3">Published</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Borrowed</th>
                  <th className="p-3">Return</th>
                  <th className="p-3">Edit</th>
                  <th className="p-3">Delete</th>
                </tr>
              </thead>
              <tbody>
                {books.length > 0
                  ? books.map((book, index) => (
                      <tr key={book._id}>
                        <td className="p-4">{index + 1}</td>
                        <td className="p-4">{book.title}</td>
                        <td className="p-4">{book.username}</td>
                        <td className="p-4">{book.author}</td>
                        <td className="p-4">{book.genre}</td>
                        <td className="p-4">{book.ISBN}</td>
                        <td className="p-4">
                          {formatDate(book.publishedDate)}
                        </td>
                        <td className="p-4">{book.description}</td>
                        <td className="p-4">{book.duration} Days</td>
                        <td className="p-4">{formatDate(book.borrowedDate)}</td>
                        <td className="p-4">{formatDate(book.returnDate)}</td>
                        <td className="p-4">
                          <Link to={`/edit/${book._id}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              Edit
                            </button>
                          </Link>
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => onDeleteHandler(book._id)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
            <div className="hidden md:block">
              {!books.length && "No books found."}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookList;
