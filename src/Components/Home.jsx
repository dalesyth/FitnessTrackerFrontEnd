import { Link } from "react-router-dom";
// const token = localStorage.getItem("token");
// const user = localStorage.getItem("user");

const Home = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("username");
  console.log(`token in Home: ${token}`);
  console.log(`user in Home: ${user}`);
  return (
    <div className="container">
      {token ? (
        <>
          <div className="text-xl flex justify-center align-center pt-20">
          Welcome to Fitness Tracker, {user}! Follow the links above to get healthy!
          </div>
          
        </>
        
      ) : (
        <Link
          to="/Login"
          className="text-xl flex justify-center pt-20 text-blue-600 hover:underline"
        >
          Click here to Register or Log In, and start your journey to fitness!
        </Link>
      )}
    </div>
  );
};

export default Home;
