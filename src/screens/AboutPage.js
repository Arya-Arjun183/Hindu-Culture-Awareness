import React from 'react';
import './AboutPage.css'; // Import your CSS file for styling
import myImage from './icons/Arjun-Arya.png';

const AboutPage = () => {

    return (
        <div className="about-page">
        <header className="about-header">
            <p>Discover the stories behind Ananth and what drives us.</p>
        </header>

        <section className="mission-section">
            <h2>Our Mission</h2>
            <p>
            At Ananth, we believe that understanding diverse cultures enriches lives and fosters global harmony. Our mission is to make cultural exploration accessible and engaging, allowing users to connect with traditions, stories, and experiences from around the world.
            We are constantly adding new information to Ananth, please navigate to the <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFK6jb2bXxZOXZiabqESybArdftwoPofQrJ0uz4loFwkJpmg/viewform?embedded=true" target="_blank" rel="noopener noreferrer">Feedback form</a> to submit your requests and we will do our best to add those features.
            </p>
        </section>

        <section className="team-section">
            <h2>Leadership Team</h2>
            <div className="team-member">
            <img src={myImage} alt="Team Member 1" />
            <div className="member-info">
                <h3>Arjun A</h3>
                <h4>Founder & CEO</h4>
                <p>Arjun is passionate about bridging cultures and he founded Ananth in December, 2021. His vision drives our app forward.
                    He is currently a senior at High School in California. Apart from Ananth, Arjun loves to build robots.
                    Arjun's team won FRC World Robotics championionship in 2022 and were runner-up in 2024.
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
            <p>Interested in learning more? <a href="mailto:ananthapp.contactus@gmail.com" target="_blank" rel="noopener noreferrer">Contact us</a> or follow us on <a href="https://twitter.com/ananthapp2" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://instagram.com/ananthapp2" target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
        </footer>
        </div>
    );
    };

export default AboutPage;
