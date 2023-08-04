import { useState, useEffect } from "react";
import { routinesByUser, updateRoutine, deleteRoutine } from './ApiCalls';

const MyRoutines = () => {

  const [routines, setRoutines] = useState([]);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("username");

  useEffect(() => {
    const getRoutines = async () => {
      try {
        const response = await routinesByUser(user);
        console.log(`response from getRoutines: ${response}`);
        setRoutines(response);
      } catch (error) {
        console.error(error);
      }
    };
    getRoutines();
  }, [user]);

  useEffect(() => {
    const updateRoutines = async () => {
      try {
        const response = await updateRoutine();
        console.log(`response from updateRoutines: ${response}`);
        setRoutines(response);
      } catch (error) {
        console.error(error);
      }
    };
    updateRoutines();
  }, []);

  useEffect(() => {
    const deleteRoutines = async () => {
      try {
        const response = await deleteRoutine();
        console.log(`response from deleteRoutines: ${response}`);
        setRoutines(response);
      } catch (error) {
        console.error(error);
      }
    };
    deleteRoutines();
  }, []);


  if (!routines) {
    return <h1>Loading...</h1>;
  }

  if (routines.length === 0) {
    return <h1>No routines found</h1>;
  }

  if (!token || !user) {
    return <h1>You must be logged in to view this page</h1>;
  }

  if (token && user) {
    return (
      <div className="container">
        <h1 className="text-center text-3xl font-bold pb-10 text-black">
          My Routines
        </h1>
        {routines &&
          routines.map((routine) => (
            <>
              <h2><strong>Routines</strong></h2>

              <div key={routine.id}>
                <div>ID: {routine.id}</div>
                <div>Created By: {routine.creatorName}</div>
                <div>Name: {routine.name}</div>
                <div>Goal: {routine.goal}</div>

                <h2><strong>Activities</strong></h2>
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
                <button onClick={updateRoutine}>Update Routine</button>
                <button onClick={deleteRoutine}>Delete Routine</button>
              </div>
            </>
          ))}
      </div>
    );
  }
}


export default MyRoutines