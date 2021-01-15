import React from "react";
import './Header.css';
import DarkMode from '../darkMode/darkMode';

function Header() {
    return (
        <header className="header">
            <DarkMode />
        </header>
    );
}

export default Header;