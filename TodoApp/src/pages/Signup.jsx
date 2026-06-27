import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();
const res=await fetch("https://blogin-4bl6.onrender.com/api/auth/register", {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      name,
      email,
      password
    })
  })
  const data=await res.json()
  console.log(data)
console.log({ name, email, password });
};

return ( <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4"> <form
     onSubmit={handleSubmit}
     className="bg-white shadow-lg rounded-xl w-full max-w-lg p-6 sm:p-8"
   > <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
Sign Up </h2>

    {/* Username */}
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Email */}
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Password */}
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Login link */}
    <div className="mb-6 text-center">
      <p className="text-sm text-gray-600">
        Already have an account?{" "}
        <span
          className="text-blue-500 underline cursor-pointer hover:text-blue-700"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </div>

    {/* Button */}
    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition"
    >
      Sign Up
    </button>
  </form>
</div>

);
};

export default Signup;
