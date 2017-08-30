import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Link to="/surveys/new" className="circular ui icon button massive right floated">
        <i className="plus icon"></i>
      </Link>
    </div>
  );
}

export default Dashboard;
