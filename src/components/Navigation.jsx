import React, { useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Logo</a>
      </div>
      <button className="navbar-toggle" onClick={handleMenuToggle}>
        Menu
      </button>
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        {isLoggedIn ? (
          <li><a href="/profile">Profile</a></li>
        ) : (
          <li><a href="/login">Login</a></li>
        )}
      </ul>
      {isLoggedIn ? (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
