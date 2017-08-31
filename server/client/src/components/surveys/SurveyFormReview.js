import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions/index';

const SurveyFormReview = (props) => {
  const reviewFields = _.map(formFields, (field) => {
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div>{props.formValues[field.name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>

      {reviewFields}

      <button className="ui red button" onClick={props.onBack}>
        Back
      </button>

      <button className="ui green button right floated" onClick={() => props.submitSurvey(props.formValues)}>
        <i className="checkmark icon"></i> Submit Survey
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
