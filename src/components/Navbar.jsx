import logo from "../assets/favicon.ico";
import "../components/Navbar.css";

const Navbar = () => {
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
                            <h2>
                                <a className="logo-text-header" href="#">
                                    Damyn Filipuzzi
                                </a>
                            </h2>
                        </div>
                    </div>
                    <div className="nav-items">
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
