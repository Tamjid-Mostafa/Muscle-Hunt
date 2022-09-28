import React from 'react';
import './Gym.css';

const Gym = ({workout, handleAddTime}) => {
    // console.log(workout);

    const {name, picture, age, time} = workout;
    return (
        <div className='card'>
            <img src={picture} alt=''/>
            <h3>{name}</h3>
            <p><small>Age: {age} years</small></p>
            <p><small>Time: {time}s</small></p>
            <button onClick={() => handleAddTime(workout)} className='btn'>Start</button>
        </div>
    );
};

export default Gym;