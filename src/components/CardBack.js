import React from "react";
import card_back from "../images/bg-card-back.png";
import "../styles/CardBack.scss";
function CardBack() {
  return (
    <div className="back-card-wrapper">
      <img className="card-back" src={card_back} alt=""></img>
      <div className="card-back-value">000</div>
    </div>
  );
}

export default CardBack;