import { useState, useEffect } from "react";
import { deleteRoutine, fetchRoutines, getUserInfo } from "./ApiCalls";
import { Link, useNavigate } from "react-router-dom";

const MyRoutines = () => {
  const [routines, setRoutines] = useState([]);
  const [userId, setUserId] = useState("");
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await getUserInfo();
        console.log(`response.id: ${response.id}`);
        setUserId(response.id);
        console.log(`userId: ${userId}`);
      } catch (error) {
        console.error(error);
      }
    };
    getCurrentUser();
  }, []);

  useEffect(() => {
    const getRoutines = async () => {
      try {
        const response = await fetchRoutines();
        console.log(`response from getRoutines in MyRoutines: ${response}`);
        setRoutines(response);
      } catch (error) {
        console.error(error);
      }
    };
    getRoutines();
  }, []);

  const handleUpdateRoutine = (routineId, token) => {
    console.log(
      `routineId: ${routineId}, token: ${token} from handleUpdateRoutine`
    );
    localStorage.setItem("routineId", routineId);
    navigate("/UpdateRoutine");
  };

  const handleDeleteRoutine = async (routineId, token) => {
    try {
      const response = await deleteRoutine(routineId, token);
      console.log(`Response in handleDeleteRoutine: ${response}`);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredRoutines = routines.filter(
    (routine) => routine.creatorId === userId
  );
  console.log("routines keys: ", Object.keys(routines));
  console.log("routines values: ", Object.values(routines));

  console.log("filteredRoutines keys: ", Object.keys(filteredRoutines));
  console.log("filteredROutines values: ", Object.values(filteredRoutines));

  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold pb-10 text-black">
        My Routines
      </h1>
      {token ? (
        <Link
          to="/CreateRoutine"
          className="flex justify-center pt-1 text-blue-600 hover:underline"
        >
          Click here to create a new routine
        </Link>
      ) : (
        <Link
          to="/Login"
          className="flex justify-center pt-1 text-blue-600 hover:underline"
        >
          Login to see your routines
        </Link>
      )}

      {filteredRoutines &&
        filteredRoutines.map((routine) => (
          <>
            <h2>
              <strong>Routines</strong>
            </h2>

            <div key={routine.id}>
              <div>ID: {routine.id}</div>
              <div>Created By: {routine.creatorName}</div>
              <div>Name: {routine.name}</div>
              <div>Goal: {routine.goal}</div>

              <h2>
                <strong>Activities</strong>
              </h2>
              {routine.activities &&
                routine.activities.map((activity) => (
                  <div key={activity.id}>
                    <div>ID: {activity.id}</div>
                    <div>Name: {activity.name}</div>
                    <div>Description: {activity.description}</div>
                    <div>Count: {activity.count}</div>
                    <div>Duration: {activity.duration}</div>
                  </div>
                ))}
            </div>
            <div>
              <button
                onClick={() => handleUpdateRoutine(routine.id, token)}
                className="w-1/6 shadow-lg border rounded mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold m-5"
              >
                Update Routine
              </button>
              <button
                onClick={() => handleDeleteRoutine(routine.id, token)}
                className="w-1/6 shadow-lg border rounded mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold m-5"
              >
                Delete Routine
              </button>
            </div>
          </>
        ))}
    </div>
  );
};

export default MyRoutines;
