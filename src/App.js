import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import BookList from "./components/BookList/BookList";
import CreateBook from "./components/CreateBook/CreateBook";
import UserList from "./components/UserList/UserList";
import EditBook from "./components/EditBook/EditBook";
import EditUser from "./components/EditUser/EditUser";
import CreateUser from "./components/CreateUser/CreateUser";

import { BookContextProvider } from "./contexts/bookContext";
import { UserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <UserContextProvider>
        <BookContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" index element={<BookList />} />
            <Route path="/edit/:id" element={<EditBook />} />
            <Route path="/create" element={<CreateBook />} />
            <Route path="/user" element={<UserList />} />
            <Route path="/user/edit/:id" element={<EditUser />} />
            <Route path="/user/create" element={<CreateUser />} />
          </Routes>
        </BookContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
