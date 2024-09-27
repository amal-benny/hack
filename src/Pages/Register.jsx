import React, { useState } from "react";


const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password || formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log("Registration Successful", formData);
    } else {
      alert(" Password must be at least 8 characters long. and should match")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all hover:shadow-xl">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-700">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-lg text-gray-700 font-semibold mb-2 float-start"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out hover:border-indigo-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg text-gray-700 font-semibold mb-2 float-start"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleInputChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out hover:border-indigo-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg text-gray-700 font-semibold mb-2 float-start"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              id="password"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out hover:border-indigo-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-lg text-gray-700 font-semibold mb-2 float-start"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleInputChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out hover:border-indigo-400"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Register
          </button>

          <h2 className="text-sm mt-6 text-center text-gray-600">
            Already a member?{' '}
            <a href="/login" className="text-blue-600 font-semibold hover:text-blue-700">
              Login
            </a>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Register