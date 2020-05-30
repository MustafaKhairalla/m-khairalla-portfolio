import React from 'react';
import "./about.css";


function About() {
    return (
        <div className="about">
            <img alt="mustafa khairalla" src={require("../../data/img/mustafa.jpg")}></img>
            <div className="cont">
                <h3 className="color">I design awesome websites</h3>
                <div className="center">
                    <p>Full Stack Web Developer with a background in Computer science and Graphic design. With years of IT and development experience I can Effectively combine creativity and problem solving to develop user-friendly applications. Known among staff for high derive to learn and great attention to details.</p>
                </div>
            </div>
        </div>
    );
};

export default About;