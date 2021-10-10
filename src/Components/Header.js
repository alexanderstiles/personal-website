import React from "react";

export default function Header() {
  const handleClick = (section) => {
    const myElement = document.getElementById(section);
    if (myElement) {
      const topPos = myElement.offsetTop;
      window.scrollTo({ left: 0, top: topPos, behavior: "smooth" });
    }
  };

  return (
    <div className="flex-header" style={{ zIndex: 99 }}>
      <div className="text-header">
      <div style={{ borderLeft: "1px solid transparent", height: "30px" }}></div>
        <div onClick={() => handleClick("home")}>
          <h3>Home</h3>
        </div>
        <div style={{ borderLeft: "1px solid #000", height: "30px" }}></div>
        <div onClick={() => handleClick("portfolio")}>
          <h3>Portfolio</h3>
        </div>
        <div style={{ borderLeft: "1px solid #000", height: "30px" }}></div>
        <div onClick={() => handleClick("resume")}>
          <h3>Resume</h3>
        </div>
        <div style={{ borderLeft: "1px solid #000", height: "30px" }}></div>
        <div onClick={() => handleClick("contact")}>
          <h3>Contact</h3>
        </div>
        <div style={{ borderLeft: "1px solid transparent", height: "30px" }}></div>
      </div>
    </div>
  );
}
