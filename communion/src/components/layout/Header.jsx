import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <div className="logo-container">
                        <img src="./images/logo.png" alt="logo" className="logo" />
                    </div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/events" className="nav-link">
                                Events
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};


