import React, { createContext, useState, useEffect, useRef } from "react";
import _ from "lodash";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const topRef = useRef();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const REACT_APP_HOST =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;

  useEffect(() => {
    axios
      .get(`${REACT_APP_HOST}/users`)
      .then((response) => {
        if (response.data.length > 0) {
          setUsers(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [REACT_APP_HOST]);

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

  const onDeleteHandler = (id) => {
    axios
      .delete(`${REACT_APP_HOST}/users/${id}`)
      .then((response) => {
        if (response) {
          console.log(response.data);
        }
        toast.success("User Log deleted successfully!", toastifyConfig);
        const updatedUsers = users.filter((user) => user._id !== id);
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error(error);
        toast.error(`Error: ${error}`, toastifyConfig);
      });
  };

  //Edit  User
  const onEditHandler = (event) => {
    event.preventDefault();

    if (!user.username) {
      toast.error("A Username should be entered!", toastifyConfig);

      //   window.scrollTo(0, topRef.current.offsetTop);
      topRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }

    axios
      .put(`${REACT_APP_HOST}/users/${user._id}`, {
        username: user.username,
      })
      .then((response) => {
        console.log(response.data);
        const filteredUsers = users.filter(
          (user) => user._id !== response.data._id
        );
        const updatedUsers = [response.data, ...filteredUsers];
        setUsers(updatedUsers);
        setUser(null);
        toast.success("User Edited successfully!", toastifyConfig);
        topRef.current.scrollIntoView({ behavior: "smooth" });
        navigate("/user");
      })
      .catch((error) => {
        // Handle the error here
        console.error(error);
        toast.error(`Error: ${error}`, toastifyConfig);
      });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!user.username) {
      toast.error("Username is required!", toastifyConfig);
      return;
    }

    const findUser = users.find(
      (person) => _.toLower(person.username) === _.toLower(user.username)
    );

    if (findUser) {
      toast.error("User already exists!", toastifyConfig);
      return;
    }

    axios
      .post(`${REACT_APP_HOST}/users/`, {
        username: _.startCase(_.toLower(user.username)),
      })
      .then((response) => {
        console.log(response.data);
        setUsers([
          ...users,
          {
            _id: response.data.savedUser._id,
            username: _.startCase(_.toLower(response.data.savedUser.username)),
          },
        ]);
        setUser("");
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
        topRef,
        onSubmitHandler,
        onDeleteHandler,
        onEditHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
