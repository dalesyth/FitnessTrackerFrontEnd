import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 p-4 text-white">
      <div className="font-bold text-xl mb-4">Fitness Tracker</div>
      <ul>
        <li className="mb-2">
          <a href="/" className="text-blue-300 hover:text-blue-500">
            Home
          </a>
        </li>
        <li className="mb-2">
          <a href="/about" className="text-blue-300 hover:text-blue-500">
            Routines
          </a>
        </li>
        <li className="mb-2">
          <a href="/about" className="text-blue-300 hover:text-blue-500">
            My Routines
          </a>
        </li>
        <li className="mb-2">
          <a href="/about" className="text-blue-300 hover:text-blue-500">
            Activities
          </a>
        </li>
        <li className="mb-2">
          <a href="/about" className="text-blue-300 hover:text-blue-500">
            Login/Register
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
