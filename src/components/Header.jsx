import React from 'react'
import '../css/Header.css';

function Header() {

  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__logo">Logo</h1>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
}

export default Header;