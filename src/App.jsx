import React from "react";
import FetchUserList from "./Components/FetchUserList";
import { Link, Route, Routes } from "react-router-dom";
import CreateUser from "./Components/CreateUser";
import EditUser from "./Components/EditUser";
import HomePage from "./Components/HomePage";
import DeleteUser from "./Components/DeleteUser";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 p-4 sm:p-6 bg-gray-200 shadow-lg border-b border-sky-200 rounded-b-xl">
        <Link
          to="/Fetch_User"
          className="bg-blue-500 px-4 py-2 rounded-md font-semibold text-white text-center hover:bg-blue-600 transition-colors duration-200 w-full sm:w-auto"
        >
          Fetch User
        </Link>

        <Link
          to="/Create_User"
          className="bg-emerald-300 px-4 py-2 rounded-md font-semibold text-white text-center hover:bg-emerald-400 transition-colors duration-200 w-full sm:w-auto"
        >
          Create User
        </Link>

        <Link
          to="/Delete_User"
          className="bg-fuchsia-600 px-4 py-2 rounded-md font-semibold text-white text-center hover:bg-fuchsia-500 transition-colors duration-200 w-full sm:w-auto"
        >
          Delete User
        </Link>
      </nav>

      {/* Routes */}
      <main className="p-4 sm:p-6 md:p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Fetch_User" element={<FetchUserList />} />
          <Route path="/Create_User" element={<CreateUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/Delete_User" element={<DeleteUser />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
