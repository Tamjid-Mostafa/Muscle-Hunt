import React from 'react';
import './Gym.css';

const Gym = (props) => {
    console.log(props.workout);

    const {name, picture, age, time} = props.workout;
    return (
        <div>
            <img src={picture} alt=''/>
        </div>
    );
};

export default Gym;