import React from 'react';

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardGroup } from "react-bootstrap";

const Gym = (props) => {
    console.log(props.workout);

    const {name, age, picture, time} = props.workout;
    return (
        <div className='container'>

      
        </div>
    );
};

export default Gym;