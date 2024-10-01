import React, { useState } from 'react';

const AddAch = () => {
  const [achievement, setAchievement] = useState('');
  const [achievementDate, setAchievementDate] = useState('');
  const [emotion, setEmotion] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ achievement, achievementDate, emotion, image });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-700">Add Child Achievement</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="achievement" className="block text-gray-700 font-semibold mb-2 float-start">
              Achievement
            </label>
            <input
              type="text"
              id="achievement"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={achievement}
              onChange={(e) => setAchievement(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="achievementDate" className="block text-gray-700 font-semibold mb-2 float-start">
              Date of Achievement
            </label>
            <input
              type="date"
              id="achievementDate"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={achievementDate}
              onChange={(e) => setAchievementDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="emotion" className="block text-gray-700 font-semibold mb-2 float-start">
              Emotion/Sentiment
            </label>
            <input
              type="text"
              id="emotion"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={emotion}
              onChange={(e) => setEmotion(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-semibold mb-2 float-start">
              Achievement Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className=" float-start w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-indigo-500 transition duration-300"
          >
            Add Achievement
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAch;