import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./userContext";
// const { format } = require("date-fns");

export const BookContext = createContext({});

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
  const [bookErrors, setBookErrors] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setBorrower({
        username: user.label,
        id: user.id,
      });
    }
  }, [user]);

  useEffect(() => {
    console.log(borrower);
    console.log(book);
  }, [borrower, book]);

  useEffect(() => {
    const borrowDuration = Number(book.duration);
    if (Number.isInteger(borrowDuration)) {
      // It is indeed a number
      console.log(borrowDuration);
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
    }
  }, [book.duration]);

  const onChangeHandler = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      !borrower.username ||
      !book.title ||
      !book.author ||
      !book.ISBN ||
      !book.description ||
      !book.duration
    ) {
      window.scrollTo(0, topRef.current.offsetTop);
      setBookErrors(["All required fields should be filled."]);
      return;
    }
    console.log({ username: borrower.username, ...book });
    navigate("/");
  };

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        book,
        setBook,
        bookErrors,
        setBookErrors,
        onChangeHandler,
        onSubmitHandler,
        topRef,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContext;
