import { useRef, useEffect, useState } from 'react';

import React from "react";
import './Header.css'
import { use } from 'react';

export default function Header({headerText,originY,offsetY,marginBtmOffset}) {   
    const titleRef = useRef();
    const [isVisible, setIsVisible] = useState();

    const customOffsetY = {
        '--originY': originY + 'px',
        '--offsetY': offsetY + 'px',
        '--marginBtmOffset': marginBtmOffset + 'px'
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
              const className = e.target.className.trim().split(' ')[0];
                if (className === 'header-title') {
                    setIsVisible(e.isIntersecting);
                }
            })
        })

        observer.observe(titleRef.current);
    }, [])

    return (
        <div className='Header' style={customOffsetY}>
            <h3 ref={titleRef} className={`header-title ${isVisible ? 'fade-in-header' : ''}`} >{headerText}</h3>
        </div>
    )
}
