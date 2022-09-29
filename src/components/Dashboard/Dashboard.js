import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = (props) => {
  const { dashboard } = props;
  const [breakTime, setBreakTime] = useState([]);


  const handleBreakeTime = (e) => {
      
      const breakTime = e.target.innerText;
      setBreakTime(breakTime);
  }

  let total = 0;
  for(const workout of dashboard){
      total = total + workout.time;
  }
  return (
    <div className="dashboard">
      <h3>Add Break Time Here</h3>
      <div className="btn-time">
        <button onClick={(e) => {handleBreakeTime(e)}}>10s</button>
        <button onClick={(e) => {handleBreakeTime(e)}}>30s</button>
        <button onClick={(e) => {handleBreakeTime(e)}}>40s</button>
        <button onClick={(e) => {handleBreakeTime(e)}}>20s</button>
        <button onClick={(e) => {handleBreakeTime(e)}}>50s</button>
      </div>
      <div className="exercise-details">
        <h3>Workout Details</h3>
        <div className="time-count">
          <p>
            <span>Exercise Time</span>
            <span>{total}s</span>
          </p>
          <p>
            <span>Breake Time</span>
            <span>{breakTime}</span>
          </p>
        </div>
        <button className="btn-completed">Completed</button>
      </div>
    </div>
  );
};

export default Dashboard;
