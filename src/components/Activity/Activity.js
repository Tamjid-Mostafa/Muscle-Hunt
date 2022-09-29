import logo from "../../logo.png";
import "./Activity.css";
import React, { useEffect, useState } from "react";
import Gym from "../Gym/Gym";
import Dashboard from "../Dashboard/Dashboard";

const Activity = () => {
  const [workouts, setWorkouts] = useState([]);
  const [dashboard, setDashboard] = useState([]);


  useEffect(() => {
    fetch("muscle-hunt.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);

  const handleAddTime = (workout) => {
      // console.log(workout);
      const newTimer = [...dashboard, workout];
      setDashboard(newTimer);

  }

  return (
    <div className="activity">
      <div className="workout-list">
        <div className="header">
          <img src={logo} alt="" />
          <h3>Muscle Hunt</h3>
        </div>
        <div className="cards">
          {workouts.map((workout) => (
            <Gym 
            key={workout.id} 
            workout={workout}
            handleAddTime = {handleAddTime}
            ></Gym>

          ))}
        </div>
      </div>
      <div className="dashboard">
        <Dashboard 
        key = {workouts.id}
        dashboard={dashboard}
        
        ></Dashboard>
      </div>
    </div>
  );
};

export default Activity;
