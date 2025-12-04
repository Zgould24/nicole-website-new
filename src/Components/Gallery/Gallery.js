import { useRef, useEffect, useState, useReducer } from 'react';

import React from "react";
import Header from '../Header/Header.js';
import './Gallery.css'

import img1 from '../../Images/059.JPG';
import img2 from '../../Images/40687784693_5d7cdf455b_o.jpg';
import img3 from '../../Images/NR_06.jpg';
import img4 from '../../Images/IMG_9231.jpeg';
import img5 from '../../Images/nicole_headlinepicture.jpeg';
import img6 from '../../Images/IMG_9229.jpeg';
import img7 from '../../Images/UCF performance wide shot.jpg';
import img8 from '../../Images/IMG_2600.JPG';
import img9 from '../../Images/Solo Cabaret 2.jpeg';
import img10 from '../../Images/46929663094_ab17c3476e_o.jpg';
import img11 from '../../Images/IMG_2601.JPG';
import img12 from '../../Images/IMG_20160430_213942_01.jpg';
import img13 from '../../Images/NR_10.jpg';
import img14 from '../../Images/CurtainsSneak-10.jpg';
import img15 from '../../Images/CurtainsSneak-15.jpg';
import img16 from '../../Images/CurtainsSneak-42.jpg';
import img17 from '../../Images/CurtainsSneak-38.jpg';
import img18 from '../../Images/CurtainsSneak-39.jpg';
import img19 from '../../Images/IMG_2602.JPG';

export default function Gallery() {
    const galleryRef = useRef();
    const [getGalleryState, setGalleryState] = useState(false);
    const imageList = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19];

    useEffect(() => {
        const images = document.querySelectorAll('.gallery-img');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.add('fade-in-directional');
                observer.unobserve(entry.target);
            })
        })

        images.forEach(i => {
            observer.observe(i);
        })

        return (() => {observer.disconnect()});
    },[])

    return (
        <div className="Gallery" id="gallery">
            <Header headerText={"Gallery"} originY={0} offsetY={-30} marginBtmOffset={100}/>
            <div ref={galleryRef} className={`gallery-masonry ${getGalleryState ? 'fade-in-directional' : ''}`}>
                {imageList.map((src, i) => {
                    <img
                        key={i}
                        src={src}
                        className="gallery-img"
                        alt=""
                    />
            })}
            </div>
        </div>
    )
}
