import React, { useContext } from "react";
import { BookContext } from "../../contexts/bookContext";
import { UserContext } from "../../contexts/userContext";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, Stack, TextField, Autocomplete } from "@mui/material";

const CreateBook = () => {
  const {
    book,
    setBook,
    bookErrors,
    onChangeHandler,
    onSubmitHandler,
    topRef,
  } = useContext(BookContext);
  const { user, setUser, users } = useContext(UserContext);

  const usersOptions = users.map((user) => ({
    label: user.username,
    id: user._id,
  }));

  return (
    <main className="m-8" ref={topRef}>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md">
            <h1 className="text-4xl text-gray-600 text-center">
              Create Book Log
            </h1>
            <hr className="border-t-4 border-gray-600 my-4" />
            {bookErrors &&
              bookErrors.map((err, index) => (
                <p
                  key={index}
                  className="text-red-600 font-medium my-4 text-center"
                >
                  {`- ${err}`}
                </p>
              ))}
            <Stack spacing={2}>
              {/* Username */}
              <Autocomplete
                options={usersOptions}
                value={user}
                id="username"
                name="username"
                onChange={(event, newValue) => {
                  setUser(newValue);
                }}
                sx={{}}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="User*"
                    variant="outlined"
                    id="username"
                    name="username"
                    InputProps={{
                      ...params.InputProps,
                      className:
                        "text-gray-500 focus:bg-black focus:ring-0 focus:outline-0 focus:border focus:outline-none",
                      style: { maxHeight: 200, overflow: "auto" },
                    }}
                    fullWidth
                  />
                )}
                isOptionEqualToValue={(option, value) => {
                  return option.id === value.id;
                }}
              />
              {/* Title */}
              <TextField
                label="Title*"
                variant="outlined"
                id="title"
                name="title"
                value={book.title || ""}
                onChange={(e) => onChangeHandler(e)}
                placeholder="The Great Gatsby"
              />
              {/* Author */}
              <TextField
                label="Author*"
                variant="outlined"
                id="author"
                name="author"
                value={book.author || ""}
                onChange={(e) => onChangeHandler(e)}
                placeholder="F. Scott Fitzgerald"
              />
              {/* Genre */}
              <TextField
                label="Genre"
                variant="outlined"
                id="genre"
                name="genre"
                value={book.genre || ""}
                onChange={(e) => onChangeHandler(e)}
                placeholder="Fiction, Classic"
              />
              {/* ISBN */}
              <TextField
                label="ISBN*"
                variant="outlined"
                id="ISBN"
                name="ISBN"
                value={book.ISBN || ""}
                onChange={(e) => onChangeHandler(e)}
                placeholder="9780743273565"
              />
              {/* Published Date */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Published Date"
                    value={book.publishedDate || ""}
                    onChange={(newValue) => {
                      setBook({
                        ...book,
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
                value={book.description || ""}
                onChange={(e) => onChangeHandler(e)}
              />
              {/* Duration */}
              <TextField
                label="Duration*"
                variant="outlined"
                id="duration"
                name="duration"
                value={book.duration || ""}
                onChange={(e) => onChangeHandler(e)}
                placeholder="10 (in Days)"
              />

              <Button variant="contained" type="submit">
                Add Book
              </Button>
            </Stack>
          </div>
        </form>
      </section>
    </main>
  );
};

export default CreateBook;
