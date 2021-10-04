import React from 'react';
import headshot from '../Assets/headshot.jpg'

export default function Hero() {
    return (
        <div class="hero-container section-padding" >
            <div>
                <h1>Alexander Stiles</h1>
                <h2>Front-end Developer</h2>
            </div>
            <img src={headshot} className="headshot" alt="headshot"></img>
        </div>
    )
}