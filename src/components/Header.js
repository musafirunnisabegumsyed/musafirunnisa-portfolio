import React from 'react';

function Header() {
  return (
    <header>
      <h2 className="logo">Musafir</h2>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;