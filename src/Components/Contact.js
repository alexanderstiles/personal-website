import React from "react";
import linkedlogo from "../Assets/linkedin-logo.png";
import email from "../Assets/email.png";
import github from "../Assets/github.svg";

export default function Contact() {
  return (
    <div id="contact" className="section-padding">
      <h1>CONTACT</h1>
      <div>
        <a style={{marginRight: 10}} href="https://www.linkedin.com/in/alexander-js/" target="_blank" rel="noopener noreferrer">
          <img height="40" width="40" src={linkedlogo} alt="linkedin" />
        </a>
        <a style={{marginLeft: 10}} href="mailto: alexanstiles@gmail.com">
          <img height="40" width="40" src={email} alt="email" />
        </a>
        <a style={{marginLeft: 20}} href="https://github.com/alexanderstiles" target="_blank" rel="noopener noreferrer">
          <img height="40" width="40" src={github} alt="github" />
        </a>
      </div>
    </div>
  );
}
