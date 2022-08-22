import React from 'react';
import logo from './planet.png';
import './Header.css';

const Header = () => (
  <header>
    <div className="header_logo">
      <img className="logo" src={logo} alt="logo" />
      <h1>Space Traveler&apos;s Hub</h1>
    </div>
    <nav />
  </header>
);

export default Header;
