import React from 'react';
import "./footer.css"

function Footer() {
    return (
        <footer className="footer text-center">
            <div className="container">
                <ul className="list-inline mb-5">
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white mr-3" href="https://github.com/MustafaKhairalla">
                            <i className="fab fa-4x fa-github text-light mb-4"></i>
                            <h6>Github</h6>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white mr-3"
                            href="https://www.linkedin.com/in/mustafa-khairalla-17035340/">
                            <i className="fab fa-4x fa-linkedin-in text-light mb-4"></i>
                            <h6>Linked in</h6>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white mr-3" href="./Mustafa.Khairalla.pdf">
                            <i className="fab fa-4x fas fa-file text-light mb-4"></i>
                            <h6>Resume</h6>
                        </a>
                    </li>
                </ul>
                <p className="text-muted small mb-0">Copyright © Mustafa Khairalla 2019</p>
            </div>
        </footer>
    )
}

export default Footer;