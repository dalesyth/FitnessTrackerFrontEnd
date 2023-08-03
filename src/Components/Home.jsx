import React from 'react'
import Navbar from './Navbar';
import { Outlet } from "react-router-dom";

const Home = () => {
  
  return (
    <>
      <Navbar />
      

      <div className="container h-screen justify-center mx-auto p-2 overflow-y-auto">
        <Outlet />
      </div>
    </>
  );



  
}

export default Home