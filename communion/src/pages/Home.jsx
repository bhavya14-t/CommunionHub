import React from 'react';
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <main className="home-main-container">
                <section className="home-section">
                    <div className="left-container">
                        <h1 className="welcome-message">
                            Connecting People Across Faiths & Interests
                        </h1>
                        <h4 className="company-tagline">
                            At Communion, we're committed to organizing events that foster connections, inspire personal and professional growth, and bring people together to share meaningful experiences.
                        </h4>

                        <div className="hero-btn-container">
                            <Link to="/events" className="hero-btn"> Explore Events</Link>
                        </div>
                    </div>

                    <div className="right-container">
                    <div className="image-container">
                        <img src="./images/picture1.jpg" alt="picture" className="home-image"/>

                        <img src="./images/picture2.jpg" alt="home-image" />
                    </div>
                    </div>
                </section>
            </main>
        </>
    );
};
