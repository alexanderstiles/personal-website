import React from "react";
import linkedlogo from "../Assets/linkedin-logo.png";
import email from "../Assets/email.png";

export default function Contact() {
  return (
    <div className="section-padding">
      <h1>Contact</h1>
      <div>
        <a style={{marginRight: 10}} href="https://www.linkedin.com/in/alexander-js/">
          <img height="40" width="40" src={linkedlogo} alt="linkedin" />
        </a>
        <a style={{marginLeft: 10}} href="mailto: ajs5pc@virginia.edu">
          <img height="40" width="40" src={email} alt="email" />
        </a>
      </div>
    </div>
  );
}
