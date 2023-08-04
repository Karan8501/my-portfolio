import React from "react";
import ToggleTheam from "../../Hooks/ToggleTheam";
import { moon, sun } from "../../static/images"

export default function ThemeToggler() {

    const { isDarkMode, setIsDarkMode } = ToggleTheam();

    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", !isDarkMode);
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div className="theme-icon">
            {isDarkMode ? (
                <img

                    src={moon}
                    alt="Dark Mode"
                    width="30"
                    height="30"
                    onClick={toggleTheme}
                />
            ) : (

                <img

                    src={sun}
                    alt="light Mode"
                    width="30"
                    height="30"
                    onClick={toggleTheme}
                />
            )}
        </div>
    );
}