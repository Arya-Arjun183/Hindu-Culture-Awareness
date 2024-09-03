import React from 'react';
import './AboutPage.css'; // Import your CSS file for styling
import myImage from './icons/Arjun-Arya.png';

const AboutPage = () => {

    return (
        <div className="about-page">
        <header className="about-header">
            <h1>About Us</h1>
            <p>Discover the stories behind Ananth and what drives us.</p>
        </header>

        <section className="mission-section">
            <h2>Our Mission</h2>
            <p>
            At Ananth, we believe that understanding diverse cultures enriches lives and fosters global harmony. Our mission is to make cultural exploration accessible and engaging, allowing users to connect with traditions, stories, and experiences from around the world.
            </p>
        </section>

        <section className="team-section">
            <h2>Meet The Team</h2>
            <div className="team-member">
            <img src={myImage} alt="Team Member 1" />
            <div className="member-info">
                <h3>Arjun Arya</h3>
                <p>Founder & CEO</p>
                <p>Arjun Arya is passionate about bridging cultures and he founded Ananth in December, 2021. His vision drives our app forward.
                    He is currently a senior at High School in California.
                </p>
            </div>
            </div>
            {/* Add more team members as needed */}
        </section>

        <section className="values-section">
            <h2>Our Core Values</h2>
            <ul>
            <li><strong>Inclusivity:</strong> We embrace and celebrate cultural diversity.</li>
            <li><strong>Curiosity:</strong> We are driven by a desire to learn and explore.</li>
            <li><strong>Respect:</strong> We honor and uphold the traditions and values of each culture.</li>
            <li><strong>Innovation:</strong> We strive to bring new and exciting ways to engage with cultural content.</li>
            </ul>
        </section>

        <footer className="about-footer">
            <p>Interested in learning more? <a href="mailto:arya.arjun183@gmail.com" target="_blank" rel="noopener noreferrer">Contact us</a> or follow us on <a href="https://twitter.com/ananthapp2" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://instagram.com/ananthapp2" target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
        </footer>
        </div>
    );
    };

export default AboutPage;
