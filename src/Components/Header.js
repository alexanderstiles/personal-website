import React from "react";

export default function Header() {

    const handleClick = (e) => {
        console.log(e.target.value)
    }

  return (
    <div className="flex-header">
      <div className="text-header">
        <div>
          <h3>Home</h3>
        </div>
        <div onClick={handleClick}><h3>Portfolio</h3></div>
        <div><h3>Resume</h3></div>
        <div><h3>Contact</h3></div>
      </div>
    </div>
  );
}
