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
    const teachingDesc = useRef();

    const [getEIsVisible, setEIsVisible] = useState();
    const [getTextVisibile, setTextVisibile] = useState();
    const [getDescVisible, setDescVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                switch(e.target.className.trim().split(' ')[0]) {
                    case 'Teaching':
                        setEIsVisible(e.isIntersecting);
                        break;
                    case 'teaching-contact-container':
                        setTextVisibile(e.isIntersecting);
                        break;
                    case 'teaching-details-description':
                        setDescVisible(e.isIntersecting);
                        break;
                    default:
                        break;
                }
            })
        })

        observer.observe(teachingSection.current);
        observer.observe(teachingDetails.current);
        observer.observe(teachingDesc.current);
    }, [])

    return (
        <div ref={teachingSection} className="Teaching" id="teaching">
            <div className="teaching-image-grid">
                <div>
                    <img src={image1} className={`long-image ${getEIsVisible ? 'fade-in-directional' : ''}`} id="img-1"></img>
                    <img src={image2} className={`short-image ${getEIsVisible ? 'fade-in-directional' : ''}`} id="img-2"></img>
                </div>
                <div>
                    <img src={image3} className={`short-image ${getEIsVisible ? 'fade-in-directional' : ''}`} id="img-3"></img>
                    <img src={image4} className={`long-image ${getEIsVisible ? 'fade-in-directional' : ''}`} id="img-4"></img> 
                </div>
            </div>
            <div className="teaching-details">
                <Header headerText={"Being a Teacher"} originY={-90} offsetY={-70}/>
                <div className="teaching-contact-container" ref={teachingDetails}>
                    <h4 className={`${getTextVisibile ? 'fade-in-directional' : ''}`}>Email me at <a href="mailto:nicoleriddering@gmail.com">nicoleriddering@gmail.com</a> for lessons!</h4>
                    <Socials />
                </div>
                <p ref={teachingDesc} className={`teaching-details-description ${getDescVisible ? 'fade-in-directional' : ''}`}>I currently work as a teaching assistant at Arizona State University, and as a voice instructor at the ASU Community School of Music.  In addition, I have a private piano and voice studio filled with incredible students of all ages, and difficulty levels. I ensure that each student receives unique and individualized lessons that fit their learning styles. I strive to always build unique connections with each of them and create an engaging and lively learning atmosphere. I feel truly blessed to be teaching so many brilliant musicians!

</p>
            </div>
        </div>
    )
}
