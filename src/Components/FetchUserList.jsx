import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";

const FetchUserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <Loading />;
  if (error)
    return <p className="text-red-500 text-center mt-5">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-8">List of All Users</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-1">Name: {user.name}</h2>
              <p className="text-gray-600 text-sm mb-1">Email: {user.email}</p>
              <p className="text-gray-600 text-sm">Phone: {user.phone}</p>
            </div>

            <Link
              to={`/edit/${user.id}`}
              className="self-end bg-blue-400 hover:bg-sky-500 text-white px-3 py-1 rounded-md font-medium transition-colors duration-200 text-sm text-center"
            >
              Edit Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchUserList;
