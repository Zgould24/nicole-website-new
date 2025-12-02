import { useRef, useEffect, useState } from 'react';

import React from "react";
import './About.css'
import headshot from '../../Images/NR_10.jpg';
import { isVisible } from '@testing-library/user-event/dist/utils';

export default function About() {

    //Refs create a reference to an html element that we can access later.
    //  This can be connected by putting ref={NAME_OF_VARIABLE_USED_FOR_REF} inside html element attributes area. 
    const aboutTitle = useRef();
    const aboutImg = useRef();
    const aboutDesc = useRef();

    //UseState allows us to store the state of elements. First element is how you retrieve the state. Second element is how you set the state. Second element exists as a function.

    const [getTVisible,setTVisible] = useState(false);
    const [getIVisible,setIVisible] = useState(false);

    //Accessing html elements AFTER they render in the html DOM 
    useEffect(() => {
        //Observer listening for entries defined later by observer. Callback retrieves entries when the view changes for those items and gives it back through the variable.
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                const isVisible = e.isIntersecting;
                const target = e.target;

                if(target === aboutTitle.current && isVisible){
                    setTVisible(e.isIntersecting);
                    observer.unobserve(aboutTitle.current);
                }

                if(target === aboutImg.current && isVisible){
                    setIVisible(e.isIntersecting);
                    observer.unobserve(aboutImg.current);
                }
            });
        })

        if(aboutTitle.current) observer.observe(aboutTitle.current)
        if(aboutImg.current) observer.observe(aboutImg.current)

        return () => observer.disconnect();
    }, [])

    return (
        <div className="About" id="about">
            <div className="about-headshot">
                <img ref={aboutImg} className={`about-headshot-image ${getIVisible ? 'fade-in-directional' : ''}`} src={headshot}></img>
            </div>
            <div className={`about-description ${getTVisible ? 'fade-in-directional' : ''}`}>
                <h1 ref={aboutTitle} className={`about-title`}>About</h1>
                <div className={`about-divider ${getTVisible ? 'divider-appear' : ''}`}></div>
                <p ref={aboutDesc} className={`about-desc`}>Originally from Rochester, MN, Nicole Riddering is a versatile singer, actor, and educator committed to inspiring artistry both onstage and in the studio. She is currently pursuing her M.M. in Music Theatre at Arizona State University, where she also serves as a teaching assistant in the voice department.
                <br/><br/>
                Nicole earned her bachelor’s degree in Music (Vocal Performance) from Rollins College in Winter Park, FL. Following graduation, she performed with Central Florida Community Arts, Bach Festival Society of Winter Park, Central Florida Vocal Arts, and the First Congregational Church of Winter Park. After moving to Arizona to pursue her master’s degree, she has appeared in several Arizona State University productions, most recently as Georgia Hendricks in Curtains. In addition to her theatre, choral, and concert work, Nicole enjoys writing original music and collaborating with fellow singer–songwriters.
                <br/><br/>
                Alongside her performance career, Nicole is a passionate and dedicated teacher with over six years of experience in private voice and piano instruction. She maintains a vibrant studio of students of all ages and levels and also serves as a teaching artist at The Phoenix Theatre Company. Known for her compassionate, energetic, and individualized approach, Nicole strives to understand how each student learns best, creating an encouraging and engaging environment where creativity can thrive. She is continually inspired by the musicians she works with and feels deeply grateful for the opportunity to guide developing artists. She looks forward to continuing her work as both a performer and educator, bringing authenticity, curiosity, and joy to every project she undertakes.</p>
                <a href='https://www.canva.com/design/DAG4Qocrlvo/mHyQ4ofLXO1sacccKkdegA/edit?utm_content=DAG4Qocrlvo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' className='about-resume-btn' target='_blank' rel='noopener noreferrer'>Resumé</a>
            </div>
        </div>
    )
}
