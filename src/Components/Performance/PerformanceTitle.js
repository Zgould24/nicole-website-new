import { useRef, useEffect, useState } from 'react';
import React from 'react';
import './Performance.css'

export default function PerformanceTitle({title}) {
    const titleRef = useRef();
    const [getTitleVisible,setTitleVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setTitleVisible(entries[0].isIntersecting);
        })

        observer.observe(titleRef.current);
    })

    return (
        <h1 ref={titleRef} className={`PerformanceTitle ${getTitleVisible ? 'fade-in-directional' : ''}`}>{title}</h1>
    )
}