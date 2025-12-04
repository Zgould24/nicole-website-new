import { useRef,useEffect,useState} from 'react';

import React from "react";
import './Teaching.css'

import image1 from '../../Images/DSC_0809.jpg'
import image2 from '../../Images/DSC_0772.jpg'
import image3 from '../../Images/DSC_0793.jpg'
import image4 from '../../Images/DSC_0048.jpg'

import Socials from '../Socials/Socials'
import Header from '../Header/Header';

export default function Teaching() {
    const teachingSection = useRef();
    const teachingDetails = useRef();

    const [getEIsVisible, setEIsVisible] = useState();
    const [getTextVisible, setTextVisibile] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                const isVisible = e.isIntersecting;
                const target = e.target;

                    if(target === teachingSection.current && isVisible) {
                        setEIsVisible(e.isIntersecting);
                        observer.unobserve(teachingSection.current);
                    }
                
                    if(target === teachingDetails.current && isVisible) {
                        setTextVisibile(e.isIntersecting);
                        observer.unobserve(teachingDetails.current);
                    }
            })
        })

        observer.observe(teachingSection.current);
        observer.observe(teachingDetails.current);

        return () => {
            observer.disconnect();
        }
    }, [])

    return (
        <div ref={teachingSection} className="Teaching" id="teaching">
            <div className="teaching-image-grid">
                <div id="top-row">
                    <img src={image1} className={`long-image ${getEIsVisible ? 'fade-in-directional' : ''}`} id="img-1"></img>
                    <img src={image2} className={`short-image ${getEIsVisible ? 'fade-in-directional' : ''}`} id="img-2"></img>
                </div>
                <div id="bottom-row">
                    <img src={image3} className={`short-image ${getEIsVisible ? 'fade-in-directional' : ''}`} id="img-3"></img>
                    <img src={image4} className={`long-image ${getEIsVisible ? 'fade-in-directional' : ''}`} id="img-4"></img>
                    <h1 className={`teaching-title ${getEIsVisible ? 'fade-in-directional' : ''}`}>Teaching</h1>
                </div>
            </div>
            <div className={`teaching-details ${getTextVisible ? 'fade-in-directional' : ''}`} ref={teachingDetails}>
                <div className="teaching-contact-container">
                    <h4>Email me at <a href="mailto:nicoleriddering@gmail.com">nicoleriddering@gmail.com</a> for lessons!</h4>
                    <Socials />
                </div>
                <p className="teaching-details-description">I currently work as a teaching assistant at Arizona State University, and as a voice instructor at the ASU Community School of Music.  In addition, I have a private piano and voice studio filled with incredible students of all ages, and difficulty levels. I ensure that each student receives unique and individualized lessons that fit their learning styles. I strive to always build unique connections with each of them and create an engaging and lively learning atmosphere. I feel truly blessed to be teaching so many brilliant musicians!
</p>
            </div>
        </div>
    )
}
