import React from 'react';
import resume from '../Assets/Alex_Stiles_Resume.pdf'

export default function Resume() {
    return (
        <div id="resume" className="section-padding">
            <h1>RESUME</h1>
            <p>Click <a download href={resume}>here</a> to download.</p>
        </div>
    )
}