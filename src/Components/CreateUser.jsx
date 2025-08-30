import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { Loading } from "./Loading";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const UserCreate = async (e) => {
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
      navigate("/");
    } catch (err) {
      console.log("Error to print", err.message);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-20">
        Creating New User
      </h1>

      <div className="flex  p-5 items-center justify-center mt-20">
        <form
          onSubmit={UserCreate}
    className="flex justify-center p-20 bg-gray-200 flex-col gap-6 rounded-md shadow-xl min-w-3 mx-auto"
       >
          <div className="  flex  justify-center  items-center gap-2 ">
            <label className="text-md font-bold">Name:</label>
            <input
              className="p-2 bg-gray-300 rounded-sm"
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className=" flex  justify-center  items-center gap-2">
            <label className="text-md font-bold">Email:</label>
            <input
              className="p-2 bg-gray-300 rounded-sm "
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              min={0}
            />
          </div>

          <div className=" flex  justify-center  items-center gap-2">
            <label className="text-md font-bold">Phone No:</label>
            <input
              className="p-2 bg-gray-300 rounded-sm "
              type="text"
              placeholder="Enter your Phone No"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              min={0}
              maxLength={10}
            />
          </div>

          <button
            type="submit"
            className="p-2 rounded-md bg-blue-500 text-md font-semibold hover:bg-blue-400 cursor-pointer mt-10"
          >
            {/* {
loading?<Loading/>:""

            } */}
            Create Account
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
