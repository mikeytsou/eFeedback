import React from 'react';

const SurveyFormReview = (props) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button className="ui red button" onClick={props.onBack}>
        Back
      </button>
    </div>
  );
};

export default SurveyFormReview;
