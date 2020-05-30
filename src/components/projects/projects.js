import React from 'react';
import "./projects.css";
//import "../../data/img/password.PNG"

function Projects() {
    return (
        <section className="content-section" id="portfolio">
            <div className="container">
                <div className="content-section-heading text-center">
                    <h3 className="text-secondary mb-0">Portfolio</h3>
                    <br></br>
                    <h2 className="mb-5 orang">Recent Projects</h2>
                    <hr></hr>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="https://github.com/MustafaKhairalla/password-generation">
                            <span className="caption">
                                <span className="caption-content">
                                    <h2>Password Generator</h2>
                                </span>
                            </span>
                            <img className="img-fluid" src={require("../../data/img/password.PNG")} alt="password"></img>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="https://github.com/MustafaKhairalla/dayPlaner">
                            <span className="caption">
                                <span className="caption-content">
                                    <h2>Day planner</h2>

                                </span>
                            </span>
                            <img className="img-fluid" src={require("../../data/img/dayplanner.PNG")} alt=""></img>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="https://github.com/MustafaKhairalla/duck-duck-code">
                            <span className="caption">
                                <span className="caption-content">
                                    <h2>foodecipe</h2>

                                </span>
                            </span>
                            <img className="img-fluid" src={require("../../data/img/foodecipe.PNG")} alt=""></img>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="https://github.com/MustafaKhairalla/weather-app">
                            <span className="caption">
                                <span className="caption-content">
                                    <h2>Weather</h2>

                                </span>
                            </span>
                            <img className="img-fluid" src={require("../../data/img/weather.PNG")} alt=""></img>
                        </a>
                    </div>
                </div>

                <div className="col-lg-6">
                    <a className="portfolio-item" href="https://tripoint.herokuapp.com/">
                        <span className="caption">
                            <span className="caption-content">
                                <h2>Tripoint</h2>

                            </span>
                        </span>
                        <img className="img-fluid" src={require("../../data/img/tripoints.PNG")} alt=""></img>
                    </a>
                </div>

            </div>
        </section>
    )
};

export default Projects;