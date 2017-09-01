import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utilities/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, (field) => {
      return (
        <Field
          key={field.name}
          type="text"
          component={SurveyField}
          label={field.label}
          name={field.name}
        />
      );
    });
  }

  render() {
    return(
      <div>
        <form className="ui form" onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          <div className="field">
            {this.renderFields()}
          </div>

          <Link to="/surveys" className="ui red button">
            Cancel
          </Link>

          <button className="ui teal button right floated" type="submit">
            Next
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, (field) => {
    if (!values[field.name]) {
      errors[field.name] = 'Field can\'t be empty';
    }
  });


  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm',
  destroyOnUnmount: false // save all values in the form so you can edit them
})(SurveyForm);
