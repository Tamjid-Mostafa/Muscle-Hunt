import logo from "../../logo.png";
import './Activity.css';
import React, { useEffect, useState } from "react";
import Gym from "../Gym/Gym";

const Activity = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("muscle-hunt.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);
  return (
    <div className="activity">
        <div className="header">
            
      <img src={logo} alt="" />
      <h3>Muscle Hunt</h3>
        </div>
        {
            workouts.map(workout => <Gym
            key = {workout.id}
            workout = {workout}


            ></Gym>)
        }

    </div>
  );
};

export default Activity;
