import React from 'react';

export function ChildCard({ child }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="h-40 relative">
        <img
          src={child.photo}
          alt="child-profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4 py-4 text-center">
        <div className="font-bold text-lg mb-1 text-blue-600">{child.name}</div>
        <p className="text-gray-700 text-sm">DOB: {child.dob}</p>
        <p className="text-gray-700 text-sm">Gender: {child.gender}</p>
        <p className="text-gray-700 text-sm">Allergies: {child.allergies}</p>
        <p className="text-gray-700 text-sm">Blood Group: {child.bloodGroup}</p>
      </div>
    </div>
  );
}

export default ChildCard;