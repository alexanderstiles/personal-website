import React from 'react';
import resume from '../Assets/Alex-Stiles-Resume.pdf'

export default function Resume() {
    return (
        <div className="section-padding">
            <h1>Resume</h1>
            <p>Click <a download href={resume}>here</a> to download.</p>
        </div>
    )
}