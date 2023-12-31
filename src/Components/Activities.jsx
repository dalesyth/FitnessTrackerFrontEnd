import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchActivities } from "./ApiCalls";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("username");

  console.log(`token in Activities.jsx: ${token}`);
  console.log(`user in Activities.jsx: ${user}`);

  useEffect(() => {
    const getActivities = async () => {
      try {
        const response = await fetchActivities();

        // console.log(`response from getActivities: ${response}`)

        setActivities(response);
        console.log(`activities from getActivities: ${activities}`);
      } catch (error) {
        console.error(error);
      }
    };
    getActivities();
  }, [activities]);

  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold pb-3 text-black">
        Activities
      </h1>

      {token ? (
        <Link
          to="/CreateActivity"
          className="flex justify-center pt-1 text-blue-600 hover:underline"
        >
          Click here to create a new activity
        </Link>
      ) : (
        <Link
          to="/Login"
          className="flex justify-center pt-1 text-blue-600 hover:underline"
        >
          Login to create a new activity
        </Link>
      )}

      {activities &&
        activities.map((activity) => (
          <div key={activity.id} className="pb-10">
            {/* <div>ID: {activity.id}</div> */}
            <div className="font-bold">Activity Name: {activity.name}</div>
            <div>Description: {activity.description}</div>
          </div>
        ))}
    </div>
  );
};

export default Activities;
