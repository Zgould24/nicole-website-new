import React from "react";
import './Footer.css'

import Socials from '../Socials/Socials'

export default function() {
    return (
        <div className="Footer">
            <div className="footer-contact">
                <a href="mailto:nicoleriddering@gmail.com">Contact Me</a>
            </div>
            <div className="footer-navlinks">
                <a href="#about-me">About Me</a>
                <a href="#teaching">Teaching</a>
                <a href="#testamonials">Testamonials</a>
                <a href="#performances">Performances</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="footer-socials">
                <h4>Reach me at <a target="_blank" rel="noopener noreferrer" href="mailto:nicoleriddering@gmail.com">nicoleriddering@gmail.com</a></h4>
                <Socials />
                <span id="icons8-ad">Icons provided by <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Icons8</a></span>
            </div>
        </div>
    )
}