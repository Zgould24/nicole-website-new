import React from "react";
import './Navbar.css'

import { useEffect, useRef } from 'react';

export default function Navbar() {
    const bar = useRef();

    useEffect(() => {
        const heroHeight = document.querySelector('.Hero');

        window.onscroll = () => {
            if(window.scrollY > 100) {
                bar.current.classList.add('Navbar-active');
            } else {
                bar.current.classList.remove('Navbar-active');
            }
        }

        heroHeight.style.height = `${window.innerHeight}px`
    })

    return (
        <div ref={bar} className="Navbar">
            <a href={`#about`}>About</a>
            <a href={`#teaching`}>Teaching</a>
            <a href={`#media`}>Media</a>
            <a href={`#contact`}>Contact</a>
        </div>
    )
}
