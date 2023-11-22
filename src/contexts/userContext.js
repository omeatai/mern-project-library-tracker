import React, { createContext, useState, useEffect, useRef } from "react";
import _ from "lodash";
import axios from "axios";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const topRef = useRef();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
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

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}/users`)
      .then((response) => {
        if (response.data.length > 0) {
          setUsers(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onDeleteHandler = (id) => {
    axios
      .delete(`${process.env.REACT_APP_HOST}/users/${id}`)
      .then((response) => {
        if (response.data.length > 0) {
          console.log(response.data);
        }
        const updatedUsers = users.filter((book) => book._id !== id);
        toast.success("User Log deleted successfully!", toastifyConfig);
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error(error);
        toast.error(`Error: ${error}`, toastifyConfig);
      });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!username) {
      toast.error("Username is required!", toastifyConfig);
      return;
    }

    const findUser = users.find(
      (user) => _.toLower(user.username) === _.toLower(username)
    );

    if (findUser) {
      toast.error("User already exists!", toastifyConfig);
      return;
    }

    axios
      .post(`${process.env.REACT_APP_HOST}/users/`, {
        username: _.startCase(_.toLower(username)),
      })
      .then((response) => {
        // console.log(response.data);
        setUsers([
          ...users,
          {
            _id: response.data.savedUser._id,
            username: _.startCase(_.toLower(response.data.savedUser.username)),
          },
        ]);
        setUsername("");
        toast.success("User created successfully!", toastifyConfig);
        topRef.current.scrollIntoView({ behavior: "smooth" });
      })
      .catch((error) => {
        // Handle the error here
        console.error(error);
        toast.error(`Error: ${error}`, toastifyConfig);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        users,
        setUsers,
        username,
        setUsername,
        topRef,
        onSubmitHandler,
        onDeleteHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
