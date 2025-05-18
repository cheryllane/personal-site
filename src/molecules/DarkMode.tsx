import { useEffect, useState } from "react";
import Toggle from "../atoms/Toggle";

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

    return (
        <>
            <Toggle
                label="Dark Mode toggle:"
                current={darkMode}
                onChange={setDarkMode}
            />
        </>
    );
};

export default DarkMode;
