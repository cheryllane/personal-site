import { useState } from "react";
import { MenuLinks } from "../types/MenuLinks";
import "./Header.css";
import { Link } from "react-router";
import DarkMode from "./DarkMode";

const Header = ({ menuLinks }: { menuLinks: MenuLinks }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <Link to="/" className="logo" title="Home">
                        🪴
                    </Link>

                    {/* Desktop navigation */}
                    <nav className="desktop-nav">
                        <ul className="nav-menu">
                            {menuLinks.map(({ link, text }) => (
                                <li className="nav-item" key={link}>
                                    <Link to={link} className="nav-link">
                                        {text}
                                    </Link>
                                </li>
                            ))}
                            <li className="nav-item">
                                <DarkMode />
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile hamburger menu button */}
                    <button
                        className={`hamburger ${isMenuOpen ? "active" : ""}`}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* Mobile navigation menu */}
            <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
                <nav>
                    <ul className="mobile-nav-list">
                        {menuLinks.map(({ link, text }) => (
                            <li className="mobile-nav-item" key={link}>
                                <Link
                                    to={link}
                                    className="mobile-nav-link"
                                    onClick={closeMenu}
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                        <li className="mobile-nav-item">
                            <DarkMode />
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Overlay for mobile menu */}
            <div
                className={`overlay ${isMenuOpen ? "active" : ""}`}
                onClick={closeMenu}
                aria-hidden="true"
            ></div>
        </>
    );
};

export default Header;
