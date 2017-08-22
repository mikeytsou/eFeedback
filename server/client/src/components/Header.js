import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return 'I\'m logged out';
      default:
        return 'I\'m logged in';
    }
  }

  render() {
    return (
      <nav className="ui inverted attached menu">
        <div className="ui container">
          <a href="" className="item">eFeedback</a>

          <div className="right menu">
            <a href="" className="item">{this.renderContent()}</a>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
