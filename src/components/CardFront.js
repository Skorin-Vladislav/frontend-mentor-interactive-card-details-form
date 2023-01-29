import React from "react";
import "../styles/CardFront.scss";

import logo from "../images/card-logo.svg";
function CardFront(props) {
  return (
    <div className="front-card-wrapper card-front-mobile">
      <img className="card-logo" src={logo} alt=""></img>
      <div className="card-number">
        {props.CardNumber || "0000 0000 0000 0000"}
      </div>

      <div className="name-exp-wrapper">
        <p className="card-owner">{props.OwnerName || "Jane Appleseed"}</p>
        <p className="card-exp">{`${
          props.Month.length < 2
            ? props.Month.padStart(2, "0")
            : props.Month || "00"
        }/${
          props.Year.length < 2
            ? props.Year.padStart(2, "0")
            : props.Year || "00"
        }`}</p>
      </div>
    </div>
  );
}

export default CardFront;
