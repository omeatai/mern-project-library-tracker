import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import { Button, Stack, TextField } from "@mui/material";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const EditUser = () => {
  const { setUser, user, onEditHandler, topRef } = useContext(UserContext);
  const { id } = useParams();

  const REACT_APP_HOST =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;

  useEffect(() => {
    axios
      .get(`${REACT_APP_HOST}/users/${id}`)
      .then((response) => {
        // console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, setUser, REACT_APP_HOST]);

  return (
    <main className="m-8" ref={topRef}>
      <section>
        <form onSubmit={onEditHandler}>
          <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md">
            <h1 className="text-4xl text-gray-600 text-center">Edit User</h1>
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
              {/* User */}
              <TextField
                label="User"
                variant="outlined"
                id="username"
                name="username"
                value={user?.username || ""}
                disabled={false}
                required={true}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />

              <Button variant="contained" type="submit">
                Edit User
              </Button>
            </Stack>
          </div>
        </form>
      </section>
    </main>
  );
};

export default EditUser;
