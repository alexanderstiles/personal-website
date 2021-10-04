import React from "react";

export default function Portfolio() {
  const portfolioItems = [
    {
      name: "Katjesgreenfood",
      description:
        "A website for green investment subsidiary of German company Katjes.",
      link: "https://katjesgreenfood.de/",
    },
    {
      name: "Harbor Capital",
      description: "A fund data display website for a fund management firm.",
      link: "https://www.harborfunds.com/",
    },
    {
      name: "UpToGoodEnergy",
      description: "A website for a recycled coffee bean energy drink company.",
      link: "https://uptogoodenergy.com/",
    },
    {
      name: "Sage",
      description: "A website and admin tool for a wellness tracking app.",
      link: "https://sagewellness.io/",
    },
    {
      name: "Logical Buildings",
      description:
        "A website for a building energy efficiency and sustainability company.",
      link: "https://logicalbuildings.com/",
    },
  ];

  return (
    <div class="section-padding">
      <h1>Portfolio</h1>
      {portfolioItems.map((item) => {
        return (
          <div key={item.name} class="portfolio-card">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <a href={item.link} rel="noopener noreferrer" target="_blank">
              {item.link}
            </a>
          </div>
        );
      })}
    </div>
  );
}
