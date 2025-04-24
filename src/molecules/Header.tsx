import { useState } from "react";
import { MenuLinks } from "../types/MenuLinks";
import "./Header.css";

const Header = ({ menuLinks }: { menuLinks: MenuLinks }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div className="banner">
                <a href="/">Hi, I'm Cheryl</a>
                <nav role="navigation" aria-label="main menu">
                    <button
                        aria-expanded={expanded}
                        className="hamburger"
                        onClick={() => {
                            setExpanded((ex) => !ex);
                        }}
                    >
                        menu
                    </button>
                    <div className={`menu ${expanded ? "visible" : ""}`}>
                        {menuLinks.map(({ link, text }) => (
                            <div key={link}>
                                <a href={link}>{text}</a>
                            </div>
                        ))}
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
