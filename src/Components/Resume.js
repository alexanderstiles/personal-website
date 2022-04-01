import React from 'react';
import resume from '../Assets/Alexander_Stiles_CV.pdf'

export default function Resume() {
    return (
        <div id="resume" className="section-padding">
            <h1>RESUME</h1>
            <p>Click <a download href={resume}>here</a> to download.</p>
        </div>
    )
}