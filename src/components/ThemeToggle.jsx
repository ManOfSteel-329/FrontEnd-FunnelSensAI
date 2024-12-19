import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import "./ThemeToggle.css";

export default function ThemeToggle() {

const [theme, setTheme] = useState('light'); // default theme is light

useEffect(() => {
    document.body.className = theme;
}, [theme])

function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
}

    return (
        <div className="toggle-container">
        <button onClick={toggleTheme} className={`toggle-button ${theme}`}>
            <span className={`toggle-icon ${theme}`}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
            </span>
        </button>
        </div>
    )
}

