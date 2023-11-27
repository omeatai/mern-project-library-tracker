import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Stack, Button, TextField } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateUser = () => {
  const { user, setUser, topRef, onSubmitHandler } = useContext(UserContext);

  return (
    <main className="m-8" ref={topRef}>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md">
            <h1 className="text-4xl text-gray-600 text-center">Create User</h1>
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
              {/* Author */}
              <TextField
                label="User"
                variant="outlined"
                id="username"
                name="username"
                value={user?.username || ""}
                onChange={(e) =>
                  setUser((prev) => {
                    return { ...prev, username: e.target.value };
                  })
                }
                placeholder="John Doe"
                required={true}
              />
              <Button variant="contained" type="submit">
                Add User
              </Button>
            </Stack>
          </div>
        </form>
      </section>
    </main>
  );
};

export default CreateUser;
