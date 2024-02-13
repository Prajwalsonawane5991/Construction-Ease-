import React, { useState } from "react";

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    toggleMenu();
  };

  return (
    <header className="header header-fixheight header--fixed">
      <div className="container">
        <div className="header__inner">
          <div className="header-logo">
            <a href="home.html">
              <img src="assets/img/logo_white.png" alt="" />
            </a>
          </div>

          <nav className={`raising-nav ${isMenuOpen ? "open" : ""}`}>
            <ul className="raising-menu">
              <li className="current">
                <a href="#id1">Home</a>
              </li>
              <li>
                <a href="#id2">About</a>
              </li>

              <li>
                <a href="#id4">Gallery</a>
              </li>
              <li>
                <a href="/signin">SignIn</a>
              </li>
              <li>
                <a href="/add-contractor">SignUp</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </nav>

          <div className="navbar-toggle" onClick={handleMenuClick}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
