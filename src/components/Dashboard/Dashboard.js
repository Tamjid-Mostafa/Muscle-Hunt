import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import "./Dashboard.css";

const Dashboard = (props) => {
  const { dashboard } = props;
  const [timer, setBreakTime] = useState([]);

  

  const handleBreakeTime = (timer) => {
    localStorage.setItem("Timer", timer);
    setBreakTime(timer);
  };

  const get = localStorage.getItem("Timer");

  useEffect(() => {
    if (get) {
      setBreakTime(get);
    }
  }, [get]);

  const toastLoad = () => toast("Okay");

  let total = 0;
  for (const workout of dashboard) {
    total = total + workout.time;
  }
  return (
    <div className="dashboard">
      <Profile></Profile>
      <h3>Add Break Time Here</h3>
      <div className="btn-time">
        <button
          onClick={() => {
            handleBreakeTime('10s');
          }}
        >
          10s
        </button>
        <button
          onClick={() => {
            handleBreakeTime('20s');
          }}
        >
          20s
        </button>
        <button
          onClick={() => {
            handleBreakeTime('30s');
          }}
        >
          30s
        </button>
        <button
          onClick={() => {
            handleBreakeTime('40s');
          }}
        >
          40s
        </button>
        <button
          onClick={() => {
            handleBreakeTime('50s');
          }}
        >
          50s
        </button>
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
            <span>{get}</span>
          </p>
        </div>
        <div>
          <button onClick={toastLoad} className="btn-completed">
            Completed
          </button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
