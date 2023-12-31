import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  return (
    <nav className="navbar p-8 flex justify-between items-center max-w-screen-lg mx-auto border-b border-gray-200 bg-gray-200 shadow-lg">
      <h1 className="text-pink-600 text-xl font-bold">Fitness Tracker</h1>
      <div className="links">
        <Link
          to="/Home"
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
    // <div className="navbar p-8 flex justify-between items-center max-w-screen-lg mx-auto border-b border-gray-200 bg-gray-200 shadow-lg">
    //   <h1 className="text-pink-600 text-xl font-bold">Fitness Tracker</h1>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link
    //           to="/Home"
    //           className="no-underline p-6 hover:text-blue-600 hover:font-bold"
    //         >
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         {token ? (
    //           <Link
    //             to="/Routines"
    //             className="no-underline p-6 hover:text-blue-600 hover:font-bold"
    //           >
    //             Routines
    //           </Link>
    //         ) : null}
    //       </li>
    //       <li>
    //         <Link
    //           to="/MyRoutines"
    //           className="no-underline p-6 hover:text-blue-600 hover:font-bold"
    //         >
    //           My Routines
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="/Activities"
    //           className="no-underline p-6 hover:text-blue-600 hover:font-bold"
    //         >
    //           Activities
    //         </Link>
    //       </li>
    //       <li>
    //         {token ? (
    //           <Link
    //             to="/Logout"
    //             className="no-underline p-6 hover:text-blue-600 hover:font-bold"
    //           >
    //             Logout
    //           </Link>
    //         ) : (
    //           <Link
    //             to="/Login"
    //             className="no-underline p-6 hover:text-blue-600 hover:font-bold"
    //           >
    //             Login
    //           </Link>
    //         )}
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
};

export default Navbar;
