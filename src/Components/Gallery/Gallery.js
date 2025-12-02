import { useRef, useEffect, useState } from 'react';

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
    return (
        <div className="Gallery" id="gallery">
            <Header headerText={"Gallery"} originY={0} offsetY={-30} marginBtmOffset={100}/>
            <div className='gallery-masonry'>
                <img className='gallery-img' src={img1} alt="" />
                <img className='gallery-img' src={img2} alt="" />
                <img className='gallery-img' src={img6} alt="" />
                <img className='gallery-img' src={img3} alt="" />
                <img className='gallery-img' src={img4} alt="" />
                <img className='gallery-img' src={img5} alt="" />
                <img className='gallery-img' src={img7} alt="" />
                <img className='gallery-img' src={img8} alt="" />
                <img className='gallery-img' src={img9} alt="" />
                <img className='gallery-img' src={img10} alt="" />
                <img className='gallery-img' src={img11} alt="" />
                <img className='gallery-img' src={img12} alt="" />
                <img className='gallery-img' src={img14} alt="" />
                <img className='gallery-img' src={img15} alt="" />
                <img className='gallery-img' src={img13} alt="" />
                <img className='gallery-img' src={img16} alt="" />
                <img className='gallery-img' src={img17} alt="" />
                <img className='gallery-img' src={img18} alt="" />
                <img className='gallery-img' src={img19} alt="" />
            </div>
        </div>
    )
}
