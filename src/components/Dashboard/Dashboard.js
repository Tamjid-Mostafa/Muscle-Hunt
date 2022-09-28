import React from 'react';

const Dashboard = ({dashboard}) => {
    return (
        <div className='dashboard'>
            <h2>activity 2</h2>
        <p>timer: {dashboard.length}</p>
        </div>
    );
};

export default Dashboard;