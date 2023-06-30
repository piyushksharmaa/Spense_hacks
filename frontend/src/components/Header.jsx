import React from "react";
import "../styles/Header.scss";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <nav className="header-nav-bar">
      <div className="header-nav-bar-div">
        <div className="header-nav-bar-div-logo">
          <img className="header-nav-bar-div-logo-img" src={Logo} alt="logo" />
        </div>
        <div className="header-nav-bar-div-searchbar">
          <input
            className="header-nav-bar-div-searchbar-1"
            placeholder="Search any product"
          ></input>
        </div>
        <div className="header-nav-bar-div-2">
          <div className="header-nav-bar-div-2-products">Our Products</div>
          <div className="header-nav-bar-div-2-login">Login/SignUp</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
