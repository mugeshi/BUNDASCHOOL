import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Plainteau</h1>

        <ul className="nav-menu">
          
          <li><a href="#">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="services">Services</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;