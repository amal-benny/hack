// src/components/Navbar.js
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/authContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState("dash");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <a href="/" className="text-[50px] text-sky-400">Trackle</a>
        </div>
        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => { setSelected("dash"); navigate("/dashboard"); }}  // Different route for each button
            className={`text-black font-bold px-5 py-2 rounded-md hover:bg-sky-700 hover:text-white  ${selected === "dash" ? "bg-sky-600 text-white" : ""}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => { setSelected("mile"); navigate("/milestones"); }}
            className={`text-black font-bold px-5 py-2 rounded-md hover:bg-sky-700 hover:text-white  ${selected === "mile" ? "bg-sky-600 text-white" : ""}`}
          >
            Manage Milestones
          </button>
          <button
            onClick={() => { setSelected("ache"); navigate("/achievements"); }}
            className={`text-black font-bold px-5 py-2 rounded-md hover:bg-sky-700 hover:text-white  ${selected === "ache" ? "bg-sky-600 text-white" : ""}`}
          >
            Achievements and Memories
          </button>
          <button
            onClick={() => { setSelected("reci"); navigate("/recipes"); }}
            className={`text-black font-bold px-5 py-2 rounded-md hover:bg-sky-700 hover:text-white  ${selected === "reci" ? "bg-sky-600 text-white" : ""}`}
          >
            Daily Recipe
          </button>
          <button
            onClick={() => { setSelected("mana"); navigate("/manage-children"); }}
            className={`text-black font-bold px-5 py-2 rounded-md hover:bg-sky-700 hover:text-white  ${selected === "mana" ? "bg-sky-600 text-white" : ""}`}
          >
            Manage Children
          </button>
        </div>
        <div className="float-end">
          {/* <button
            onClick={handleLogout}
            className="text-white font-bold px-5 py-2 rounded-md hover:bg-sky-700 bg-sky-600"
          >
            Logout
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
