import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google" className="item">Login With Google</a>;
      default:
        return <a href="/api/logout" className="item">Log Out</a>;
    }
  }

  render() {
    return (
      <nav className="ui inverted attached menu">
        <div className="ui container">
          <a href="" className="item">eFeedback</a>

          <div className="right menu">
            {this.renderContent()}
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
