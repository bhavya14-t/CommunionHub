import React from 'react';
import "./Header.css";

export const Header = () => {
    return (
        <>
        <div className="header">
            <div className="company-name">
                <h1>Communion</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/events">Events</a></li>
                </ul>
            </nav>
            </div>
        </>
    );
};


