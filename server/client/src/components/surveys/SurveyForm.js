import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utilities/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, (field) => {
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
        <form className="ui form" onSubmit={this.props.handleSubmit((val) => console.log(val))}>
          <div className="field">
            {this.renderFields()}
          </div>

          <Link to="/surveys" className="ui red button">
            Cancel
          </Link>

          <button className="ui teal button right floated" type="submit">
            Next <i className="checkmark icon"></i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  _.each(FIELDS, (field) => {
    if (!values[field.name]) {
      errors[field.name] = 'Field can\'t be empty';
    }
  });


  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm'
})(SurveyForm);
