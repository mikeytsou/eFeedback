import React from 'react';
import { connect } from 'react-redux';

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

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);
