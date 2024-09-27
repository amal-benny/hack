// src/components/Navbar.js
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/authContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const [selected,setSelected] = useState("dash")
const {setUser} = useContext(AuthContext)
const navigate = useNavigate()

const handleLogout = ()=>{
  setUser(null)
  navigate("/login")
}

  return (
    <nav className="bg-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <a href="/" className="text-[50px] text-sky-400">Trackle</a>
        </div>
        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-8">
          <button href="/" onClick={()=>{ setSelected("dash")}} className={` text-black font-bold px-5 py-2 rounded-md hover:bg-sky-700 hover:text-white  ${selected === "dash"?"bg-sky-600 text-white":""}`}>
            Dashboard
          </button>
          <button href="/" onClick={()=>{ setSelected("mile")}} className={`text-black font-bold px-5 py-2 rounded-md hover:bg-sky-700 hover:text-white  ${selected === "mile"?"bg-sky-600 text-white":"text-white"}`}>
            Manage Milestones
          </button>
          <button href="/" onClick={()=>{ setSelected("ache")}} className={`text-black font-bold px-5 py-2 rounded-md hover:bg-sky-700 hover:text-white  ${selected === "ache"?"bg-sky-600 text-white":"text-white"}`}>
            Achievements and Memories
          </button>
          <button href="/" onClick={()=>{ setSelected("reci")}} className={`text-black font-bold px-5 py-2 rounded-md hover:bg-sky-700 hover:text-white  ${selected === "reci"?"bg-sky-600 text-white":"text-white"}`}>
            Daily recipe
          </button>
          <button href="/" onClick={()=>{ setSelected("mana")}} className={`text-black font-bold px-5 py-2 rounded-md hover:bg-sky-700 hover:text-white  ${selected === "mana"?"bg-sky-600 text-white":"text-white"}`}>
            Manage Children
          </button>
        </div>
        <div className="float-end">
        <button onClick={handleLogout} href="/" className="text-white font-bold px-5 py-2 rounded-md hover:bg-sky-700 bg-sky-600 ">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
