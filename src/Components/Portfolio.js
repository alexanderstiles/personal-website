import React from "react";
import Grid from '@mui/material/Grid'
import katjes from '../Assets/PortfolioLogos/katjes.jpg'
import harbor from '../Assets/PortfolioLogos/harbor.jpg'
import uptogood from '../Assets/PortfolioLogos/uptogood.jpeg'
import sage from '../Assets/PortfolioLogos/sage.jpeg'

export default function Portfolio() {
  const portfolioItems = [
    {
      name: "Katjesgreenfood",
      description:
        "A website for green investment subsidiary of German company Katjes.",
      link: "https://katjesgreenfood.de/",
      techStack: "",
      asset: katjes,
    },
    {
      name: "Harbor Capital",
      description: "A fund data display website for a fund management firm.",
      link: "https://www.harborfunds.com/",
      techStack: "",
      asset: harbor,
    },
    {
      name: "UpToGoodEnergy",
      description: "A website for a recycled coffee bean energy drink company.",
      link: "https://uptogoodenergy.com/",
      techStack: "",
      asset: uptogood,
    },
    {
      name: "Sage",
      description: "A website and admin tool for a wellness tracking app.",
      link: "https://sagewellness.io/",
      techStack: "",
      asset: sage,
    },
    {
      name: "Logical Buildings",
      description:
        "A website for a building energy efficiency and sustainability company.",
      link: "https://logicalbuildings.com/",
      techStack: "",
    },
    {
      name: "Study Buddy Finder",
      description:
        "A web app built in Python Django using Twitter API and Google authentication.",
      link: "https://team206.herokuapp.com/accounts/login/?next=/",
      techStack: "",
    },
  ];

  return (
    <Grid container className="section-padding">
      <Grid item xs={12}><h1>PORTFOLIO</h1></Grid>
      {portfolioItems.map((item) => {
        return (
          <Grid item xs={12} sm={6} key={item.name} className="portfolio-card">
            <a href={item.link} style={{textDecoration: 'none'}} rel="noopener noreferrer" target="_blank"><h2>{item.name}</h2></a>
            {item.asset && <a href={item.link} style={{textDecoration: 'none'}} rel="noopener noreferrer" target="_blank"><img className="port-icon" alt="port icon" src={item.asset} /></a>}
            <p>{item.description}</p>
          </Grid>
        );
      })}
    </Grid>
  );
}
