import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
        <div className="header-logo"><a href="/"><img src="assets/img/p13.png" alt="image not found " height="400" width="400" /></a></div>

          <nav className={`raising-nav ${isMenuOpen ? "open" : ""}`}>
            <ul className="raising-menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
               <NavLink to="/about">About <span></span> Us</NavLink>
               </li>
              <li>
                <NavLink to="/signin">
                  Sign In
                </NavLink>
              </li>
              <li>
               
                <NavLink to="/signup">SignUp</NavLink>
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
