import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { data,  useNavigate, useParams } from "react-router-dom";
import { Loading } from "./Loading";
// import { Loading } from "./Loading";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams(); // To get user id dyanamically
console.log("id is",id);


    // Will run after the component render to pre-filled the data ✅
  useEffect(() => { 


    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
console.log(res.data);

      } catch (error) {
        console.log(error.message);

      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);




  //  Handle the update on updating

  const handleUpdate = async (e) => {
    e.preventDefault();

    const user = { id, name, email, phone };

    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        user
      );
      alert("User Update Successfully ✅")
      console.log("Update Data", res.data);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) {
    return <Loading />;
  }


  return (
    <div className="flex mx-auto p-5 items-center justify-center mt-20">
      <form
        onSubmit={handleUpdate}
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
          <input
            className="p-1"
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
            className="p-1"
            type="number"
            placeholder="Enter your Phone No"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>


        <button
          type="submit"
          className="p-2 rounded-md bg-blue-600 text-md font-semibold"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
