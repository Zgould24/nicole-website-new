import { useRef, useEffect, useState } from 'react';

import React from "react";
import './Performance.css'

const colorPallete = ["#A4A579","#626959","#EDDBC5","#D49A98","#AD7D73","#E9B18C"];

export default function Recording({file, title}) {
    var hex = colorPallete[Math.floor(Math.random() * colorPallete.length)];
    const style = {
        border: `10px solid ${hex}`
    }

    const recordingRef = useRef();
    const [getRecVisible,setRecVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                switch(e.target.className.trim().split(' ')[0]) {
                    case 'Recording':
                        setRecVisible(e.isIntersecting);
                    default:
                        break;
                }
            })
        })

        observer.observe(recordingRef.current);
    },[])

    return (
        <div ref={recordingRef} className={`Recording ${getRecVisible ? 'fade-in-directional' : ''}`} style={style}>
            <p>{title}</p>
            <audio controls>
                <source src={file} type="audio/mpeg"></source>
            </audio>
        </div>
    )
}