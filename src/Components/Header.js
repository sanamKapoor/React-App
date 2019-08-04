import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
    <h1><div class="rd">Acme</div>Web Design</h1>
    <ul>
      <Link to="/">
      <li>HOME</li>
      </Link>

    <Link to="/about">
    <li>ABOUT</li>
    </Link>

    <Link to="/service">
    <li>SERVICES</li>
    </Link>
    </ul>
  </header>
  )
}

export default Header
