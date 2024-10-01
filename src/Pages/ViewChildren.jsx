import React from "react";
import ChildCard from "../Components/ChildCard";
import { useNavigate } from "react-router-dom";

const ViewChildren = () => {
    const navigate = useNavigate()
  const mockChildren = [
    {
      name: "John Doe",
      dob: "2015-03-10",
      gender: "Male",
      allergies: "Peanuts",
      bloodGroup: "O+",
      photo: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-83687-35537.jpg&fm=jpg", // Replace this with actual URLs for images if available
    },
    {
      name: "Emily Smith",
      dob: "2016-07-22",
      gender: "Female",
      allergies: "None",
      bloodGroup: "A+",
      photo: "https://images.pexels.com/photos/189857/pexels-photo-189857.jpeg?cs=srgb&dl=pexels-thepaintedsquare-189857.jpg&fm=jpg",
    },
    {
      name: "Sophia Johnson",
      dob: "2014-11-05",
      gender: "Female",
      allergies: "Dairy",
      bloodGroup: "B+",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4gLIlT8spwWmmKv061wJaWeDgbicbQsW70Nx4DPuUTOZjxgtqPayiMw4p1E4sYxYj4E&usqp=CAU",
    },
  ];

  return (
    <div className="h-screen">
      <h1 className="text-black text-[30px] font-bold text-center ">
        Manage Children
      </h1>
      <br></br>
      <button onClick={()=>{navigate("/add-form")}}  className="text-white font-bold px-5 py-2 rounded-md hover:bg-sky-700 bg-sky-600">Add children</button>
      <div className="flex flex-wrap justify-center">
        {mockChildren.map((child, index) => (
          <ChildCard key={index} child={child} />
        ))}
      </div>
    </div>
  );
};

export default ViewChildren;
