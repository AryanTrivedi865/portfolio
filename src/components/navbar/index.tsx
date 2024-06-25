// src/components/Navbar.tsx
import React from 'react';
import './../../styles/components/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">Brand</a>
            </div>
            <ul className="navbar-links">
                <li className="navbar-item">
                  <Link to="/home">Home</Link>l̥
                </li>
                <li className="navbar-item">
                  <Link to="/about">About</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contacts">Contacts</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/signup">Signup</Link>                
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
