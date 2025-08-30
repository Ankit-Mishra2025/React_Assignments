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

      // Remove user from UI
      setUsers(users.filter((user) => user.id !== id));
      alert("User deleted successfully! ✅");
      
    } catch (err) {
      console.log(err.message);
      alert("Error deleting user");
    }
  };

  if (loading) return <Loading />;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold my-5 text-center">User List</h1>
      <div className="flex flex-col gap-4 mx-auto w-3/4">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded-md flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">Name: {user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>

            <div className="flex gap-2">
              <Link
                to={`/edit/${user.id}`}
                className="bg-fuchsia-500 p-2 rounded-md text-white"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-500 p-2 rounded-md text-white"
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

