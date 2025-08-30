import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newUser = { name, email, phone };

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser
      );
      alert("User Created Successfully ✅");
      console.log("User Created Successfully", res.data);
      navigate("/Fetch_User"); // navigate to fetch user list after creation
    } catch (err) {
      console.log("Error:", err.message);
      alert("Failed to create user!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-center font-bold text-3xl mt-12">Create New User</h1>

      <div className="flex justify-center items-center mt-12 px-4">
        <form
          onSubmit={handleCreateUser}
          className="w-full max-w-md bg-gray-100 p-8 rounded-xl shadow-lg flex flex-col gap-6"
        >

          {/* Name Input */}
          <div className="flex flex-col">
            <label className="text-md font-semibold mb-1">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-md font-semibold mb-1">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>


          {/* Phone Input */}
          <div className="flex flex-col">
            <label className="text-md font-semibold mb-1">Phone No:</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/, ""))} // only digits
              required
              maxLength={10}
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`p-2 rounded-md text-white font-semibold transition-colors duration-200 ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Creating..." : "Create User"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
