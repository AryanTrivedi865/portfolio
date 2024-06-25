import React from 'react';
import './../styles/components/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Brand</Link>
            </div>
            <ul className="navbar-links">
                <li className="navbar-item">
                    <Link to="/home">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/services">Service</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contacts">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
