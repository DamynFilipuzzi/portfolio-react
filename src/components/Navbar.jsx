import { useState } from "react";
import logo from "../assets/favicon.ico";
import hamburger from "../assets/hamburger.svg";
import "../components/Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <header className="navbar sticky top-0 backdrop-blur-xl">
        <nav className="container">
          <div className="logo-container">
            <div
              className="logo"
              onClick={showNavbar ? handleShowNavbar : null}
            >
              <a href="#">
                <img src={logo} alt="Damyn-Logo" />
              </a>
            </div>
            <div
              className="logo-text"
              onClick={showNavbar ? handleShowNavbar : null}
            >
              <h2 className="text-2xl">
                <a className="logo-text-header" href="#">
                  Damyn Filipuzzi
                </a>
              </h2>
            </div>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img
              className="img-ham"
              width={40}
              src={hamburger}
              alt="hamburger-icon"
            />
          </div>
          <div className={`nav-items  ${showNavbar && "active"}`}>
            <div onClick={showNavbar ? handleShowNavbar : null}>
              <a href="#about">About</a>
            </div>
            <div onClick={showNavbar ? handleShowNavbar : null}>
              <a href="#projects">Projects</a>
            </div>
            <div onClick={showNavbar ? handleShowNavbar : null}>
              <a href="#resume">Resume</a>
            </div>
            <div onClick={showNavbar ? handleShowNavbar : null}>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
