import { useRef, useEffect, useState } from 'react';

import React from "react";
import './Performance.css'

import performanceHero from '../../Images/40687784693_5d7cdf455b_o.jpg'
import recording1 from '../../Recordings/Manhattan - Nicole Riddering (1).mp3'
import recording2 from '../../Recordings/Superstar (The Carpenters).mp3'

import Recording from './Recording'
import PerformanceTitle from './PerformanceTitle'

export default function Performance() {
    const bgRef = useRef();
    const heroRef = useRef();
    const youtubeRef = useRef();

    const [getBGVisible,setBGVisible] = useState();
    const [getHeroVisible,setHeroVisible] = useState();
    const [getYoutubeVisible,setYoutubeVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                switch(e.target.className.trim().split(' ')[0]) {
                    case 'performance-hero-image':
                        setBGVisible(e.isIntersecting);
                    case 'performance-hero-title':
                        setHeroVisible(e.isIntersecting);
                        break;
                    case 'performance-media-youtube-container':
                        setYoutubeVisible(e.isIntersecting);
                    default:
                        break;
                }
            })
        })

        observer.observe(bgRef.current);
        observer.observe(heroRef.current);
        observer.observe(youtubeRef.current);
    },[])

    return (
        <div className="Performance" id="performances">
            <div className="performance-hero">
                <img ref={bgRef} className={`performance-hero-image ${getBGVisible ? 'fade-in-static' : ''}`} src={performanceHero}></img>
                <div ref={heroRef} className={`performance-hero-title ${getHeroVisible ? 'fade-in-static' : ''}`}>
                    <h1 className={getHeroVisible ? 'fade-in-directional' : ''}>Love of performing</h1>
                    <p className={getHeroVisible ? 'fade-in-directional' : ''}>I stay active in the music community by performing with the Arizona State University Music Theatre and Opera department, and the ASU Concert Choir. My latest shows with ASU include Mutt: A New Musical Comedy, and L’Orfeo.</p>
                </div>
            </div>
            <div className="performance-media-container">
                <PerformanceTitle title={"Listen on Youtube"}/>
                <div ref={youtubeRef} className="performance-media-youtube-container">
                    <iframe className={`${getYoutubeVisible ? 'fade-in-static' : ''}`} src="https://www.youtube.com/embed/1QXRakdc4iM?si=KYR21H41sY1PC-YM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                    <iframe className={`${getYoutubeVisible ? 'fade-in-static' : ''}`} src="https://www.youtube.com/embed/A3AiEZGDjis?si=lMgTosuY-5Ir6XPz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                    <iframe className={`${getYoutubeVisible ? 'fade-in-static' : ''}`} src="https://www.youtube.com/embed/eypE5lcLtyE?si=_pgbA75R4xJBaeUm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                </div>
                <PerformanceTitle title={"Latest Recordings"}/>
                <div className="performance-media-recordings">
                    <Recording file={recording1} title={"Manhattan - Sara Bareilles"}/>
                    <Recording file={recording2} title={"Superstar - The Carpenters"}/>
                </div>
            </div>
        </div>
    )
}
