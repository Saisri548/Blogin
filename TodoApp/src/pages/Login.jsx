import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
  const res=await fetch("https://blogin-4bl6.onrender.com/api/auth/Login", {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      email,
      password
    })
  })
  const data=await res.json()
  console.log(data)

    // optional navigation
    // navigate("/dashboard");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg px-8 py-8 w-96"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>
       <div className="mb-6 text-center">
  <p className="text-sm text-gray-600">
    Don’t have an account?{" "}
    <span className="text-blue-500 underline cursor-pointer hover:text-blue-700" onClick={()=>navigate("/signUp")}>
      Sign up
    </span>
  </p>
</div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;