import { useRef, useState, useEffect } from "react";
import React from "react";
import './Socials.css'

import facebook from '../../Icons/icons8-facebook-50.png'
import instagram from '../../Icons/icons8-instagram-50.png'
import x from '../../Icons/icons8-twitterx-50.png'
import youtube from '../../Icons/icons8-youtube-50.png'

export default function Socials() {
    const socialsRef = useRef();
    const [getIconVisible, setIconVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const isVisible = entry.isIntersecting;
                const target = entry.target;

                if(target === socialsRef && isVisible) {
                    setIconVisible(isVisible);
                    observer.unobserve(socialsRef.current);
                }
            })
        })

        observer.observe(socialsRef.current);

        return () => {observer.disconnect()}
    }, [])

    return (
        <div className="Socials" ref={socialsRef}>
            <a target="_blank" id="facebook-icon" className={`${getIconVisible ? 'fade-in-directional' : ''}`} rel="noopener noreferrer" href="https://www.facebook.com/nicole.riddering/"><img src={facebook}></img></a>
            <a target="_blank" id="instagram-icon" className={`${getIconVisible ? 'fade-in-static' : ''}`} rel="noopener noreferrer" href="https://www.instagram.com/nicoleridmusic/"><img src={instagram}></img></a>
            <a target="_blank" id="youtube-icon" className={`${getIconVisible ? 'fade-in-directional' : ''}`} rel="noopener noreferrer" href="https://www.youtube.com/@nicoleriddering"><img src={youtube}></img></a>
        </div>
    )
}