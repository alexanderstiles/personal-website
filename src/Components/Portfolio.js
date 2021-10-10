import React from "react";
import Grid from "@mui/material/Grid";
import katjes from "../Assets/PortfolioLogos/katjes.jpg";
import harbor from "../Assets/PortfolioLogos/harbor.jpg";
import uptogood from "../Assets/PortfolioLogos/uptogood.jpeg";
import sage from "../Assets/PortfolioLogos/sage.jpeg";
import logical from "../Assets/PortfolioLogos/logical.jpeg";
import studyfindr from "../Assets/PortfolioLogos/studyfindr.jpeg";

export default function Portfolio() {
  const portfolioItems = [
    {
      name: "Katjesgreenfood",
      description:
        "A website for green investment subsidiary of German company Katjes.",
      link: "https://katjesgreenfood.de/",
      techStack: "React, Gatsby, Drupal, GraphQL",
      asset: katjes,
    },
    {
      name: "Harbor Capital",
      description: "A fund data display website for a fund management firm.",
      link: "https://www.harborfunds.com/",
      techStack: "React, Gatsby, Storybook, Contentstack, GraphQL",
      asset: harbor,
    },
    {
      name: "UpToGoodEnergy",
      description: "A website for a recycled coffee bean energy drink company.",
      link: "https://uptogoodenergy.com/",
      techStack: "React, Iris Nova API",
      asset: uptogood,
    },
    {
      name: "Sage",
      description: "A website and admin tool for a wellness tracking app.",
      link: "https://sagewellness.io/",
      techStack: "React, GraphQL",
      asset: sage,
    },
    {
      name: "Logical Buildings",
      description:
        "A website for a building energy efficiency and sustainability company.",
      link: "https://logicalbuildings.com/",
      techStack: "Wordpress, Divi Builder",
      asset: logical,
    },
    {
      name: "Study Buddy Finder",
      description:
        "A web app for finding study partners based on mutual interests and schedules.",
      link: "https://team206.herokuapp.com/accounts/login/?next=/",
      techStack:
        "Python Django, Google Authentication API, Twitter API, Heroku",
      asset: studyfindr,
    },
  ];

  return (
    <Grid id="portfolio" container className="section-padding">
      <Grid item xs={12}>
        <h1>PORTFOLIO</h1>
      </Grid>
      {portfolioItems.map((item) => {
        return (
          <Grid item xs={12} sm={6} key={item.name} className="portfolio-card">
            <a
              href={item.link}
              style={{ textDecoration: "none" }}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h2>{item.name}</h2>
            </a>
            {item.asset && (
              <a
                href={item.link}
                style={{ textDecoration: "none" }}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img className="port-icon" alt="port icon" src={item.asset} />
              </a>
            )}
            <div>
              <p style={{ fontSize: 18 }}>
                {item.description}
              </p>
              <p style={{ opacity: "60%" }}>
                <i>Tech Stack: {item.techStack}</i>
              </p>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}
