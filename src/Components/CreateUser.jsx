import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const UserCreate = async (e) => {
    e.preventDefault();




    const newUser = { name, email, phone };
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser
      );
      alert("User Created Successfully ✅")
      
      console.log("User Created Successfully", res.data);
      navigate("/");
    } catch (err) {
      console.log("Error to print", err.message);
    }
  };

  return (
   <>
   <h1 className="text-center font-bold text-xl mt-10">Creating New User</h1>
 
    <div className="flex mx-auto p-5 items-center justify-center mt-20">
        
      <form
        onSubmit={UserCreate}
        className="flex justify-center p-20 bg-gray-200 flex-col gap-5 rounded-md"
      >
        <div className="  flex  justify-center  items-center gap-2 ">
          <label className="text-md font-bold">Name:</label>
          <input
            className="p-1"
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>


        <div className=" flex  justify-center  items-center gap-2">
          <label className="text-md font-bold">Email:</label>
          <input className="p-1"
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
          <input className="p-1"
            type="Number"
            placeholder="Enter your Phone No"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
 
        <button type="submit" className="p-2 rounded-md bg-blue-600 text-md font-semibold">Create User</button>
      </form>
    </div>
      </>
  );
};

export default CreateUser;
