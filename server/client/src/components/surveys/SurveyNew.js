import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { new: true };
  // }
  state = { showFormReview: false }; // create-react-app shortcut for the above constructor

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview onBack={() => this.setState({ showFormReview: false })} />;
    }
    return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />;
  }

  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default SurveyNew;
