import React from 'react'
import '../styles/Header.css';

function Header() {

  return (
    <header className='header'>
      <nav className='header__nav'>
        <h1 className='header__logo'>gria</h1>
        <a className='header__link' href='#'>Oportunidades</a>
        <a className='header__link' href='#'>LOGIN</a>
      </nav>
    </header>
  );
}

export default Header;