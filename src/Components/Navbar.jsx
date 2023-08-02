import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 p-4 text-white">
      <div className="font-bold text-xl mb-4">Fitness Tracker</div>
      <ul>
        <li className="mb-2">
          <Link to="/" className="text-blue-300 hover:text-blue-500">
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/Routines" className="text-blue-300 hover:text-blue-500">
            Routines
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/MyRoutines" className="text-blue-300 hover:text-blue-500">
            My Routines
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/Activities" className="text-blue-300 hover:text-blue-500">
            Activities
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/Login" className="text-blue-300 hover:text-blue-500">
            Login/Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
