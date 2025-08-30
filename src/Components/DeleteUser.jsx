// DeleteUser.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";

const DeleteUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user function 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      alert("User deleted successfully! ✅");
    } catch (err) {
      console.log(err.message);
      alert("Error deleting user");
    }
  };

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500 text-center mt-5">Error: {error}</p>;

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl md:text-4xl font-bold my-6 text-center text-gray-800">User List</h1>
      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 md:p-6 border rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex-1 mb-4 sm:mb-0">
              <h2 className="font-semibold text-lg md:text-xl text-gray-700">Name: {user.name}</h2>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">Phone: {user.phone}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                to={`/edit/${user.id}`}
                className="bg-fuchsia-500 p-2 md:px-4 md:py-2 rounded-md text-white text-center hover:bg-fuchsia-600 transition-colors duration-200"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-500 p-2 md:px-4 md:py-2 rounded-md text-white text-center hover:bg-red-400 transition-colors duration-200 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteUser;
