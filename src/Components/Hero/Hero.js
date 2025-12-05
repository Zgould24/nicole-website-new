import { useEffect } from 'react';

import React from "react"
import './Hero.css'
import heroBackground from '../../Images/cover.png';

export default function Hero() {
    return (
        <div className="Hero">
            <img className="hero-background-image" src={heroBackground} alt=""></img>
            <div className="hero-name-container">
                <div className="hero-name-bottom-wrapper">
                    <div className="hero-bottom-border"></div>
                    <h1 className="hero-title">Nicole Riddering</h1>
                    <div className="hero-bottom-border"></div>
                </div>
            </div>
            <div className="hero-interactive">
                <div className="hero-subtitles">
                    <p className="hero-subtitle-musician">Singer</p>
                    <hr/>
                    <p className="hero-subtitle-teacher">Actor</p>
                    <hr/>
                    <p className="hero-subtitle-performer">Teacher</p>
                </div>
            </div>
        </div>
    )
}
