import React from "react";
import "../styles/CardFront.scss";

import logo from "../images/card-logo.svg";
function CardFront() {
  return (
    <div className="front-card-wrapper">
      <img className="card-logo" src={logo} alt=""></img>
      <div className="card-number">0000 0000 0000 0000</div>

      <div className="name-exp-wrapper">
        <p className="card-owner">Jane Appleseed</p>
        <p className="card-exp">00/00</p>
      </div>
    </div>
  );
}

export default CardFront;
