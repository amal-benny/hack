import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    // You can add the login functionality here
    console.log("Login successful", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all hover:shadow-xl">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-700">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-6">
            <label
              className="block text-lg text-gray-700 font-semibold mb-2 float-start"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              className="block text-lg text-gray-700 font-semibold mb-2 float-start"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>

          {/* Not a member */}
          <h2 className="text-sm mt-6 text-center text-gray-600">
            Not a member?{" "}
            <a href="/register" className="text-blue-600 font-semibold hover:text-indigo-700">
              Signup
            </a>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Login;