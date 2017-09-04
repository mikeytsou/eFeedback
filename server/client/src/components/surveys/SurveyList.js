import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions/index';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.map((survey) => {
      return (
        <div className="item" key={survey._id}>
          <div className="content">
            <a className="header">{survey.title}</a>

            <div className="description">
              <p>{survey.body}</p>
            </div>

            <div className="extra">
              <div className="ui label">Yes: {survey.yes}</div>

              <div className="ui label">No: {survey.no}</div>

              <div className="right floated">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui centered grid">
        <div className="fourteen wide column">
          <div className="ui divided items">
            {this.renderSurveys()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys }
}

export default connect(mapStateToProps, ({ fetchSurveys }))(SurveyList);