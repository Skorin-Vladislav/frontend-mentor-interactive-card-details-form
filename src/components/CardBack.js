import React from "react";
import card_back from "../images/bg-card-back.png";
import "../styles/CardBack.scss";
function CardBack(props) {
  return (
    <div className="back-card-wrapper card-back-mobile">
      <img className="card-back" src={card_back} alt=""></img>
      <div className="card-back-value">{props.cvc || "000"}</div>
    </div>
  );
}

export default CardBack;
