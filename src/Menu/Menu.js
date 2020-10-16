import React from 'react';
import {
  Link
} from "react-router-dom"; 

function Menu() {
  return (
    <nav className="menu">
    <ul>
      <li><Link to="./">Home</Link></li>
      <li><Link to="./about">About</Link></li>
      <li><Link to="./login">Login</Link></li>
      <li>
        <a className="skip-content" href="#main"> Skip to content </a>
      </li>
    </ul>
  </nav>
  );
}

export default Menu;