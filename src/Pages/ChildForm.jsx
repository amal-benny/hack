import React, { useState } from 'react';



const ChildForm = () => {
  const [child, setChild] = useState({
    name: '',
    dob: '',
    gender: '',
    allergies: '',
    bloodGroup: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setChild({ ...child, [name]: type === 'file' ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Child details submitted:", child);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all hover:shadow-xl">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-700">
          Add Child Details
        </h2>
        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label className="block text-lg text-gray-700 font-semibold mb-2 float-start" htmlFor="name">
              Child's Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
              value={child.name}
              onChange={handleChange}
              placeholder="Enter child's name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg text-gray-700 font-semibold mb-2 float-start" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
              value={child.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg text-gray-700 font-semibold mb-2 float-start" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
              value={child.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-lg text-gray-700 font-semibold mb-2 float-start" htmlFor="allergies">
              Allergies (if any)
            </label>
            <input
              type="text"
              id="allergies"
              name="allergies"
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
              value={child.allergies}
              onChange={handleChange}
              placeholder="Enter any allergies"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg text-gray-700 font-semibold mb-2 float-start" htmlFor="bloodGroup">
              Blood Group
            </label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
              value={child.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-lg text-gray-700 font-semibold mb-2 float-start" htmlFor="photo">
              Upload Photo
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 font-semibold  text-white py-3 rounded-lg hover:text-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChildForm;