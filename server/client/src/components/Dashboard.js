import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <SurveyList />

      <Link to="/surveys/new" id="add-button" className="circular ui icon button massive">
        <i className="plus icon"></i>
      </Link>
    </div>
  );
}

export default Dashboard;
