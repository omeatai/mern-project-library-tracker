import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../../contexts/bookContext";
const { format } = require("date-fns");

const BookList = () => {
  const { books, topRef } = useContext(BookContext);
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
                      {format(new Date(book.publishedDate), "yyyy-MM-dd")}
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
                      {format(new Date(book.borrowedDate), "yyyy-MM-dd")}
                    </p>
                    <p>
                      <span className="font-bold">Return Date: </span>
                      {format(new Date(book.returnDate), "yyyy-MM-dd")}
                    </p>
                  </div>
                  <hr className="border-t-4 border-red-400 my-4" />
                  <div className="flex justify-around">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">
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
                {books.length > 0 ? (
                  books.map((book, index) => (
                    <tr key={book._id}>
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">{book.title}</td>
                      <td className="p-4">{book.username}</td>
                      <td className="p-4">{book.author}</td>
                      <td className="p-4">{book.genre}</td>
                      <td className="p-4">{book.ISBN}</td>
                      <td className="p-4">
                        {format(new Date(book.publishedDate), "yyyy-MM-dd")}
                      </td>
                      <td className="p-4">{book.description}</td>
                      <td className="p-4">Malcolm Lockyer</td>
                      <td className="p-4">1961</td>
                      <td className="p-4">1961</td>
                      <td className="p-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Edit
                        </button>
                      </td>
                      <td className="p-4">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <h2>No Books borrowed.</h2>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookList;
