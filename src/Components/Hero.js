import React from 'react';
import headshot from '../Assets/headshot.jpg'

export default function Hero() {
    return (
        <div id="home" className="hero-container section-padding" >
            <div>
                <h1 style={{fontSize: 42}}>ALEXANDER STILES</h1>
                <h2>Frontend Developer</h2>
            </div>
            <img src={headshot} className="headshot" alt="headshot"></img>
        </div>
    )
}