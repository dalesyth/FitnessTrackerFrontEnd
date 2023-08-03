import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchRoutines } from "./ApiCalls";

const Routines = () => {
  const [routines, setRoutines] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const user = localStorage.getItem("username");

  useEffect(() => {
    const getRoutines = async () => {
      try {
        const response = await fetchRoutines();
        console.log(`response from getRoutines: ${response}`);
        setRoutines(response);
      } catch (error) {
        console.error(error);
      }
    };
    getRoutines();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold pb-10 text-black">
        Routines
      </h1>
      {routines &&
        routines.map((routine) => (
          <div key={routine.id}>
            <div>ID: {routine.id}</div>
            <div>Created By: {routine.creatorName}</div>
            <div>Name: {routine.name}</div>
            <div>Goal: {routine.goal}</div>
            <h2>Activities</h2>
          </div>
        ))}
    </div>
  );
};

export default Routines;
