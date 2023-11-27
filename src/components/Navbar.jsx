import logo from "../assets/favicon.ico";
import "../components/Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="logo-container">
                        <div className="logo">
                            <img src={logo} alt="Damyn-Logo" />
                        </div>
                        <div className="logo-text">
                            <h2>
                                <a className="logo-text-header" href="#">
                                    Damyn Filipuzzi
                                </a>
                            </h2>
                        </div>
                    </div>
                    <div className="nav-items">
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Portfolio</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
