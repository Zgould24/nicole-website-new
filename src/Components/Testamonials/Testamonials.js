import { useRef, useEffect, useState } from "react";

import React from "react";
import './Testamonials.css'

import TestamonialTile from "./TestamonialTile";

const testamonials = [
    {
        id: 1,
        text: "Encouraging. Dedicated. Patient. When I think of Ms. Nicole, all these words and so many more positive things come to mind. While I may not get to Broadway someday (or who knows, just maybe I will! 😊), she is inspiring, challenging, and helping me become even better than I imagined possible.",
        name: 'Annelise',
        color: '#AD7D73'
    },
    {
        id: 2,
        text: "Annelise leaves her voice lesson each week with a huge smile and energetic spirit. With Nicole’s instruction these past few years, I’ve watched my daughter’s musical ability, vocal skills, and confidence blossom and look forward to seeing her continue to develop her talent in years to come.",
        name: 'Melanie',
        color: '#E9B18C'
    },
    {
        id: 3,
        text: "Nicole Riddering has a glorious voice driven by a keen intellect and kind spirit. She is also a fabulous actor. I am proud to have worked with her for many years.",
        name: 'Dr. John V. Sinclair',
        color: '#626959'
    },
    {
        id: 4,
        text: "Ms. Nicole is such a talented music teacher. She is highly skilled at meeting each student at their level and supporting them along the way. She is fun and effective. Our family thoroughly recommends Ms. Nicole for both piano and voice lessons.",
        name: "Kristina",
        color: '#AD7D73'
    },
    {
        id: 5,
        text: "My daughter and I have been taking piano & voice lessons with Nicole for over two years now. Nicole tailors lessons to each student! I am impressed by Nicole's ability to explain advanced concepts to my 9 year-old and I differently. As we have grown and learned through the years, her lessons grew with us. Each week we look forward to a lesson packed with fun activities, music theory, practice, instruction, and most likely new exercises/songs. We could not have asked for a more knowledgeable, supportive, passionate, and patient teacher.",
        name: 'Aidan',
        color: '#A4A579'
    }
]

var testamonialTiles = testamonials.map(t => <TestamonialTile key={t.id} text={t.text} name={t.name} color={t.color}/>)

export default function Testamonials() {
    const testamonialTitle = useRef();
    const testamonialsDivider = useRef();

    const [getTitleVisible,setTitleVisible] = useState();
    const [getDivVisible,setDivVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                switch(e.target.className.trim().split(' ')[0]) {
                    case 'testamonials-title':
                        setTitleVisible(e.isIntersecting);
                        break;
                    case 'testamonials-divider':
                        setDivVisible(e.isIntersecting);
                    default:
                        break;
                }
            })
        })

        observer.observe(testamonialTitle.current);
        observer.observe(testamonialsDivider.current);
    }, [])

    return (
        <div className="Testamonials" id="testamonials">
            <h1 ref={testamonialTitle} className={`testamonials-title ${getTitleVisible ? 'fade-in-directional' : ''}`}>Testamonials</h1>
            <h2 ref={testamonialsDivider} className={`testamonials-divider ${getDivVisible ? 'testamonials-divider-reduce' : ''}`}>&nbsp;•••</h2>
            <div className="testamonials-container">
                {testamonialTiles}
            </div>
        </div>
    )
}