import { useState } from "react";
import { Link } from "react-router-dom";
const token = localStorage.getItem("token");

const Navbar = () => {
  return (
    <nav className="navbar p-8 flex justify-between items-center max-w-screen-lg mx-auto border-b border-gray-200 bg-gray-200 shadow-lg">
      <h1 className="text-pink-600 text-xl font-bold">Fitness Tracker</h1>
      <div className="links">
        <Link
          to="/"
          className="no-underline p-6 hover:text-blue-600 hover:font-bold"
        >
          Home
        </Link>
        <Link to="/Routines" className="no-underline p-6 hover:text-blue-600">
          Routines
        </Link>

        <Link to="/MyRoutines" className="no-underline p-6 hover:text-blue-600">
          MyRoutines
        </Link>
        <Link to="/Activities" className="no-underline p-6 hover:text-blue-600">
          Activities
        </Link>
        <Link to="/Login" className="no-underline p-6 hover:text-blue-600">
          Login
        </Link>
        <Link to="/Logout" className="no-underline p-6 hover:text-blue-600">
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
