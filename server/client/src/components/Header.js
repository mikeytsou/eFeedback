import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payment from './Payment';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google" className="item">Login With Google</a>;
      default:
        return [
          <Payment />,
          <a href="/api/logout" className="item">Log Out</a>
        ];
    }
  }

  render() {
    return (
      <nav className="ui inverted attached menu">
        <div className="ui container">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="item"
          >
            eFeedback
          </Link>

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
