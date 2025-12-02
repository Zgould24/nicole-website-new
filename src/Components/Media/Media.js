import React from "react"
import './Media.css'
import recording1 from '../../Recordings/Manhattan - Nicole Riddering (1).mp3'
import recording2 from '../../Recordings/Superstar (The Carpenters).mp3'
import Recording from '../Performance/Recording'
import Header from '../Header/Header';

export default function Media() {
    return (
        <div className="Media" id='media'>
            <Header headerText={"Videos"} originY={0} offsetY={-30}/>
            <div className="media-videos">
                <iframe src="https://www.youtube.com/embed/1QXRakdc4iM?si=KYR21H41sY1PC-YM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                <iframe src="https://www.youtube.com/embed/A3AiEZGDjis?si=lMgTosuY-5Ir6XPz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                <iframe src="https://www.youtube.com/embed/eypE5lcLtyE?si=_pgbA75R4xJBaeUm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
            </div>
            <Header headerText={"Recordings"} originY={0} offsetY={-30}/>
            <div className="media-recordings">
                <Recording file={recording1} title={"Manhattan - Sara Bareilles"}/>
                <Recording file={recording2} title={"Superstar - The Carpenters"}/>    
            </div>
        </div>
    )
}