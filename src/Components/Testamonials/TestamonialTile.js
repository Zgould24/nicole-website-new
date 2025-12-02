import { useRef, useEffect, useState } from 'react';

import React from "react";
import './TestamonialTile.css'

export default function TestamonialTile({text, name, color}) {
    var style = {
        color: `${color}`
    }

    const tileRef = useRef();
    const [getTileVisible,setTileVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                switch(e.target.className.trim().split(' ')[0]) {
                    case 'TestamonialTile':
                        setTileVisible(e.isIntersecting);
                        break;
                    default:
                        break;
                }
            })
        })

        observer.observe(tileRef.current);
    }, [])

    return (
        <div ref={tileRef} className={`TestamonialTile ${getTileVisible ? 'tile-grow' : ''}`}>
            <p className="tile-text"><span style={style}>"</span>{text}<span style={style}>"</span></p>
            <p className="tile-name" style={style}>-{name}</p>
        </div>
    )
}