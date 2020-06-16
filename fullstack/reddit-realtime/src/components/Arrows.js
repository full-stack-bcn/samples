import React from "react";
import "./Arrows.css";

export function UpArrow({ onClick }) {
  return (
    <div onClick={onClick} className="arrow">
      &#9652;
    </div>
  );
}

export function NoArrow() {
  return <div className="arrow"></div>;
}
