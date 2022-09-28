import React from "react";
import "./Dashboard.css";

const Dashboard = (props) => {
  const { dashboard } = props;

  const handleBreakeTime = () => {
      console.log('ok')
  }

  let total = 0;
  for(const workout of dashboard){
      total = total + workout.time;
  }
  return (
    <div className="dashboard">
      <h3>Add Break Time Here</h3>
      <div className="btn-time">
        <button onClick={handleBreakeTime}>10s</button>
        <button onClick={handleBreakeTime}>20s</button>
        <button onClick={handleBreakeTime}>30s</button>
        <button onClick={handleBreakeTime}>40s</button>
        <button onClick={handleBreakeTime}>50s</button>
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
            <span>20000s</span>
          </p>
        </div>
        <button className="btn-completed">Completed</button>
      </div>
    </div>
  );
};

export default Dashboard;
