import React from 'react';
import './../styles/components/navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">Brand</a>
            </div>
            <ul className="navbar-links">
                <li className="navbar-item">
                    <a href="/">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="/about">About</a>
                </li>
                <li className="navbar-item">
                    <a href="/services">Services</a>
                </li>
                <li className="navbar-item">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
