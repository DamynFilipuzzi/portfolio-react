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
            <nav className="navbar">
                <div className="container">
                    <div className="logo-container">
                        <div className="logo">
                            <a href="#">
                                <img src={logo} alt="Damyn-Logo" />
                            </a>
                        </div>
                        <div className="logo-text">
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
                        <div>
                            <a href="#">About</a>
                        </div>
                        <div>
                            <a href="#">Portfolio</a>
                        </div>
                        <div>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
