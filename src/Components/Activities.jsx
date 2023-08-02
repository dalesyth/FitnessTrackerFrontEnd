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
    <div className="container mx-auto">
      <h1>Activities</h1>
      {activities &&
        activities.map((activity) => (
          <div key={activity.id}>
            <p>ID: {activity.id}</p>
            <p>Name: {activity.name}</p>
            <p>Description: {activity.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Activities;
