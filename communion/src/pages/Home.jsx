import React from 'react';
import { NavLink } from 'react-router-dom';
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
                            At Communion, we're committed to
                            <br /> organizing 
                            events that foster connections,
                            <br /> inspire personal and professional growth,
                            <br /> and bring people together to share 
                            <br />meaningful experiences.
                        </h4>

                        <div className="hero-btn-container">
                            <NavLink to="/events" className="hero-btn">
                            Explore Events
                            </NavLink>
                        </div>
                    </div>

                    <div className="right-container">
                        <img src="./images/picture1.jpg" alt="picture" className="home-image"/>

                        <img src="./images/picture2.jpg" alt="home-image" className="home1-image"/>
                    </div>
                </section>
            </main>
        </>
    );
};
