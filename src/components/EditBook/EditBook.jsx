import React, { useContext, useEffect } from "react";
import { BookContext } from "../../contexts/bookContext";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, Stack, TextField } from "@mui/material";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const EditBook = () => {
  const { editBook, setEditBook, onChangeEditHandler, onEditHandler, topRef } =
    useContext(BookContext);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}/books/${id}`)
      .then((response) => {
        // console.log(response.data);
        setEditBook(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <main className="m-8" ref={topRef}>
      <section>
        <form onSubmit={onEditHandler}>
          <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md">
            <h1 className="text-4xl text-gray-600 text-center">
              Edit Book Log
            </h1>
            <hr className="border-t-4 border-gray-600 my-4" />
            <ToastContainer
              position="bottom-left"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <Stack spacing={2}>
              {/* Username */}
              <TextField
                label="User"
                variant="outlined"
                id="username"
                name="username"
                value={editBook.username || ""}
                disabled={true}
                required={true}
              />
              {/* Title */}
              <TextField
                label="Title*"
                variant="outlined"
                id="title"
                name="title"
                value={editBook.title || ""}
                onChange={(e) => onChangeEditHandler(e)}
                placeholder="The Great Gatsby"
                required={true}
              />
              {/* Author */}
              <TextField
                label="Author*"
                variant="outlined"
                id="author"
                name="author"
                value={editBook.author || ""}
                onChange={(e) => onChangeEditHandler(e)}
                placeholder="F. Scott Fitzgerald"
                required={true}
              />
              {/* Genre */}
              <TextField
                label="Genre"
                variant="outlined"
                id="genre"
                name="genre"
                value={editBook.genre || ""}
                onChange={(e) => onChangeEditHandler(e)}
                placeholder="Fiction, Classic"
              />
              {/* ISBN */}
              <TextField
                label="ISBN*"
                variant="outlined"
                id="ISBN"
                name="ISBN"
                value={editBook.ISBN || ""}
                onChange={(e) => onChangeEditHandler(e)}
                placeholder="9780743273565"
                required={true}
              />
              {/* Published Date */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Published Date"
                    value={dayjs(editBook.publishedDate) || ""}
                    onChange={(newValue) => {
                      setEditBook({
                        ...editBook,
                        publishedDate: newValue,
                      });
                    }}
                    sx={{ width: "100%" }}
                    inputFormat="yyyy-MM-dd'T'HH:mm:ss.SSSz"
                  />
                </DemoContainer>
              </LocalizationProvider>
              {/* Description */}
              <TextField
                label="Description*"
                variant="outlined"
                id="description"
                name="description"
                multiline
                rows={4}
                placeholder="A novel set in the summer of 1922, exploring themes of decadence, idealism, and the American Dream...."
                value={editBook.description || ""}
                onChange={(e) => onChangeEditHandler(e)}
                required={true}
              />
              {/* Duration */}
              <TextField
                label="Duration*"
                variant="outlined"
                id="duration"
                name="duration"
                value={editBook.duration || ""}
                onChange={(e) => onChangeEditHandler(e)}
                placeholder="10 (in Days)"
                required={true}
              />

              <Button variant="contained" type="submit">
                Edit Book
              </Button>
            </Stack>
          </div>
        </form>
      </section>
    </main>
  );
};

export default EditBook;
