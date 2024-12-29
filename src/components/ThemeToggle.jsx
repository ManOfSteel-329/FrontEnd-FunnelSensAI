import React, { useState } from 'react';
import "./ThemeToggle.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Brightness7, DarkMode } from "@mui/icons-material";

export default function ThemeToggle() {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        document.body.className = theme;
    };

    return (
            <div
                className={`toggle-track ${theme}`}
                onClick={toggleTheme}
            >
                <div
                    className={`toggle-circle ${theme}`}
                >
                    {theme === 'dark' ? <DarkMode className={`${theme}`} /> : <Brightness7 className={`${theme}`} />}
                </div>
            </div>
    );
}

