import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions/index';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    return (
      <div>
        SurveyList!
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.surveys
}

export default connect(mapStateToProps, ({ fetchSurveys }))(SurveyList);