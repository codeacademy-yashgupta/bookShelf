import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-div">
          <h2><div><span>BS</span></div></h2>
        </div>
        <div className="header-text">
          <p>
            The Book Shelf
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
