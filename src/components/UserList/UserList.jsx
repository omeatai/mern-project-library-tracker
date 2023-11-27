import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const UserList = () => {
  const { users, topRef, onDeleteHandler } = useContext(UserContext);

  return (
    <main className="m-8" ref={topRef}>
      <section>
        <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-full">
          <h1 className="text-4xl text-gray-600 text-center">List Users</h1>
          <hr className="border-t-4 border-gray-600 my-4" />
          <div className="md:hidden flex flex-col justify-center items-center gap-4">
            {users.length > 0 ? (
              users.map((user) => (
                <div
                  key={user._id}
                  className="w-full bg-white border border-4 border-black bg-opacity-50 rounded-lg p-4 text-center"
                >
                  <h1 className="text-2xl text-black">{user.username}</h1>

                  <hr className="border-t-4 border-red-400 my-4" />
                  <div className="flex justify-around">
                    <Link to={`/user/edit/${user._id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                        Edit
                      </button>
                    </Link>

                    <button
                      onClick={() => onDeleteHandler(user._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h2>No Users.</h2>
            )}
          </div>

          <div className="relative overflow-x-auto grid grid-cols-3 ">
            <div></div>
            <div>
              <table className="w-full text-xs text-left rtl:text-right text-gray-800 dark:text-gray-800 hidden md:block table-auto p-4 my-4">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="p-3">No.</th>
                    <th className="p-3">User</th>
                    <th className="p-3">Edit</th>
                    <th className="p-3">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0
                    ? users.map((user, index) => (
                        <tr key={user._id}>
                          <td className="p-4">{index + 1}</td>
                          <td className="p-4">{user.username}</td>
                          <td className="p-4">
                            <Link to={`/user/edit/${user._id}`}>
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Edit
                              </button>
                            </Link>
                          </td>
                          <td className="p-4">
                            <button
                              onClick={() => onDeleteHandler(user._id)}
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
                {!users.length && "No User found."}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserList;
