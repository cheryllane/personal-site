import { useEffect, useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(
        document.documentElement.getAttribute("data-theme") === "dark" ||
            localStorage.getItem("dark-mode") === "true"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("dark-mode", "true");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("dark-mode", "false");
        }

        return () => {};
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
            <span className="dark-mode-label">Dark Mode</span>
            <div className="dark-mode-switch">
                <div className={`dark-mode-slider ${darkMode ? "active" : ""}`}>
                    <span className="dark-mode-icon">
                        {darkMode ? "☀️" : "🌙"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DarkMode;
