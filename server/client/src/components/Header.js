import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="ui inverted menu">
        <div className="ui container">
          <a href="" className="item">eFeedback</a>

          <div className="right menu">
            <a href="" className="item">Login With Google</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
