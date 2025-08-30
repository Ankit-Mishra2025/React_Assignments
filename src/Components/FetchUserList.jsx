import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";

const FetchUserList = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const UserFetch = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users"); // It will fetch the data from API
      console.log(res); 

      setUser(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    UserFetch();
  }, []);
  

  // Loading will run before data laoding from API
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <>
      <div className="mx-auto p-10">
        <h1 className="text-2xl text-center font-semibold">List of All Fetched Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-stone-200 p-5 rounded -md mt-3 w-full">
          {user.map((users, index) => (
            <div
              key={index}
              className="border shadow-emerald-50 rounded-xl  bg-white hover:shadow-lg transition p-3 hover:border-orange-50 cursor-pointer"
            >
              <h2 className="text-md font-semibold">Name: {users.name}</h2>
              <p>Email: {users.email}</p>
              <p>Phone No: {users.phone}</p>

              <Link
                to={`/edit/${users.id}`}
                className="bg-blue-300 p-1 rounded-md mt-10 float-right font-semibold hover:bg-sky-500 text-sm  "
              >
                Edit Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FetchUserList;
