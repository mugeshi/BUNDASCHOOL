import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Plainteau</h1>
        <ul className="nav-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
