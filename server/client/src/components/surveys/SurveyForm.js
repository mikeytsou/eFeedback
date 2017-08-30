import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field
          label="Survey Title:"
          name="title"
          type="text"
          component={SurveyField}
        />
        <Field
          label="Subject Line:"
          name="subject"
          type="text"
          component={SurveyField}
        />
        <Field
          label="Email Body:"
          name="body"
          type="text"
          component={SurveyField}
        />
        <Field
          label="Recipient List:"
          name="emails"
          type="text"
          component={SurveyField}
        />
      </div>
    );
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit((val) => console.log(val))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
