import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/images/logo12(1)(1).png" alt="Big Basket" />
      </div>
      <div className="header-search">
        <input type="text" placeholder="Search for Products..." />
      </div>
      <div className="header-info">
        <span>My Basket</span>
        <span>Login/Sign Up</span>
      </div>
    </header>
  );
}

export default Header;
