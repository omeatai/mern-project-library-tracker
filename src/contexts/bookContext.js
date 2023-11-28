import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./userContext";
import axios from "axios";
import { toast } from "react-toastify";

export const BookContext = createContext({});

const toastifyConfig = {
  position: "bottom-left",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

const INITIAL_BORROWER_STATE = {
  username: "",
  id: "",
};

const INITIAL_BOOK_STATE = {
  title: "",
  author: "",
  genre: "",
  ISBN: "",
  publishedDate: "",
  description: "",
  duration: 0,
  borrowedDate: new Date(),
  returnDate: new Date(),
};

export const BookContextProvider = (props) => {
  const topRef = useRef();
  const navigate = useNavigate();
  const [borrower, setBorrower] = useState(INITIAL_BORROWER_STATE);
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState(INITIAL_BOOK_STATE);
  const [editBook, setEditBook] = useState(INITIAL_BOOK_STATE);

  // console.log({
  //   ENV: process.env.NODE_ENV,
  //   PROD: process.env.REACT_APP_API_URL_PROD,
  //   DEV: process.env.REACT_APP_API_URL_DEV,
  //   HOST: process.env.REACT_APP_HOST,
  // });

  const REACT_APP_HOST =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;

  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`${REACT_APP_HOST}/books`)
      .then((response) => {
        if (response.data.length > 0) {
          setBooks(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [REACT_APP_HOST]);

  useEffect(() => {
    setBorrower({
      username: user?.label,
      id: user?.id,
    });
  }, [user]);

  const checkDuration = (duration) => {
    const borrowDuration = Number(duration);
    if (!Number.isInteger(borrowDuration) || borrowDuration < 1) {
      toast.error(
        "Only Numeric values are allowed for Duration > 0 days.",
        toastifyConfig
      );
      topRef.current.scrollIntoView({ behavior: "smooth" });
      return false;
    }

    function addDays(days) {
      let result = new Date();
      result.setDate(result.getDate() + days);
      return result;
    }

    const newReturnDate = addDays(borrowDuration);
    setBook({
      ...book,
      returnDate: newReturnDate,
    });

    return true;
  };

  const onDeleteHandler = (id) => {
    axios
      .delete(`${REACT_APP_HOST}/books/${id}`)
      .then((response) => {
        if (response.data.length > 0) {
          console.log(response.data);
        }
        const updatedBooks = books.filter((book) => book._id !== id);
        toast.success("Book Log deleted successfully!", toastifyConfig);
        setBooks(updatedBooks);
      })
      .catch((error) => {
        console.error(error);
        toast.error(`Error: ${error}`, toastifyConfig);
      });
  };

  const onChangeHandler = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeEditHandler = (event) => {
    setEditBook({
      ...editBook,
      [event.target.name]: event.target.value,
    });
  };

  //Edit Book Log
  const onEditHandler = (event) => {
    event.preventDefault();

    if (!checkDuration(editBook.duration)) {
      return;
    }

    if (
      !editBook.title ||
      !editBook.author ||
      !editBook.ISBN ||
      !editBook.description ||
      !editBook.duration
    ) {
      toast.error("All required fields should be filled.", toastifyConfig);

      //   window.scrollTo(0, topRef.current.offsetTop);
      topRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    axios
      .put(`${REACT_APP_HOST}/books/${editBook._id}`, editBook)
      .then((response) => {
        console.log(response.data);
        // console.log(books);
        const uneditedBooks = books.filter((book) => book._id !== editBook._id);
        const updatedBooks = [response.data, ...uneditedBooks];
        setBooks(updatedBooks);
        setEditBook(INITIAL_BOOK_STATE);
        toast.success("Book Log Edited successfully!", toastifyConfig);
        topRef.current.scrollIntoView({ behavior: "smooth" });
        navigate("/");
      })
      .catch((error) => {
        // Handle the error here
        console.error(error);
        toast.error(`Error: ${error}`, toastifyConfig);
      });
  };

  // Create a new book log
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!user) {
      toast.error("Please select a user!", toastifyConfig);
      topRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (!checkDuration(book.duration)) {
      return;
    }

    if (
      !borrower.username ||
      !book.title ||
      !book.author ||
      !book.ISBN ||
      !book.description ||
      !book.duration
    ) {
      toast.error("All required fields should be filled.", toastifyConfig);
      //   window.scrollTo(0, topRef.current.offsetTop);
      topRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const borrowedBook = { username: borrower.username, ...book };

    axios
      .post(`${REACT_APP_HOST}/books/`, borrowedBook)
      .then((response) => {
        console.log(response.data);
        setBooks([...books, response.data.savedBook]);
        setBook(INITIAL_BOOK_STATE);
        toast.success("Book Log created successfully!", toastifyConfig);
        topRef.current.scrollIntoView({ behavior: "smooth" });
        // navigate("/");
      })
      .catch((error) => {
        // Handle the error here
        console.error(error);
        toast.error(`Error: ${error}`, toastifyConfig);
      });
  };

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        book,
        setBook,
        onChangeHandler,
        onSubmitHandler,
        onDeleteHandler,
        onEditHandler,
        onChangeEditHandler,
        editBook,
        setEditBook,
        topRef,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContext;
