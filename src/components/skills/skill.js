import React from 'react';
import "./skill.css";
//import FontAwesome from "react-fontawesome"



function Skills() {
    return (
        <div className="skill">

            <div className="page-section" id="services">
                <div className="container">
                    <h2 className="text-center mt-0">Skills highlights</h2>
                    <hr className="divider my-4"></hr>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i class="fab fa-4x fa-node text-light mb-4"></i>
                                <h3 className="h4 mb-2">Node.js</h3>
                                <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fab fa-4x fa-js-square text-light mb-4"></i>
                                <h3 className="h4 mb-2">Javascript</h3>
                                <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fab fa-4x fa-html5 text-light mb-4"></i>
                                <h3 className="h4 mb-2">HTML5</h3>
                                <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fab fa-4x fa-css3-alt text-light mb-4"></i>
                                <h3 className="h4 mb-2">CSS</h3>
                                <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Skills;