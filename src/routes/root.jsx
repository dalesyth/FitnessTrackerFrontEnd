import { Container } from "postcss";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      
        <Navbar />
        <div className="flex-grow p-8">
          
          <Outlet />
        </div>
      
    </>
  );
};

export default Root;
