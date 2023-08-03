import { React, useState, useEffect } from "react";
import { fetchActivities } from "./ApiCalls";

const Activities = () => {
  const [activities, setActivities] = useState([]);

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
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold pb-10 text-black">Activities</h1>
      {activities &&
        activities.map((activity) => (
          <div key={activity.id}>
            <div>ID: {activity.id}</div>
            <div>Name: {activity.name}</div>
            <div>Description: {activity.description}</div>
          </div>
        ))}
    </div>
  );
};

export default Activities;
