import icon_complete from "./images/icon-complete.svg";
import bg_main_mobile from "./images/bg-main-mobile.png";
import bg_main_desktop from "./images/bg-main-desktop.png";

import {
  validateOwnerNameSpecialSymbols,
  validateOwnerNameEmpty,
  validateOwnerNameLength,
  validateOwnerNameFormat,
  validateCardNumberFormat,
  validateCardNumberEmpty,
  validateCardNumberLength,
  validateCardNumberSpecialSymbols,
  validateMonthFormat,
  validateMonthEmpty,
  validateMonthSpecialSymbols,
  validateYearFormat,
  validateYearEmpty,
  validateYearSpecialSymbols,
  validateCvcFormat,
  validateCvcLength,
  validateCvcEmpty,
  validateCvcSpecialSymbols,
} from "./components/validation.js";
import "./App.scss";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";

import { useState } from "react";
import { useEffect } from "react";

function App() {
  let [OwnerName, setOwnerName] = useState("");
  let [Month, setMonth] = useState("");
  let [Year, setYear] = useState("");
  let [CardNumber, setCardNumber] = useState("");
  let [Cvc, setCvc] = useState("");

  let [complete, setComplete] = useState(false);

  let submit = () => {
    if (complete) {
      setOwnerName("");
      setMonth("");
      setYear("");
      setCardNumber("");
      setCvc("");
      setComplete(!complete);

      return false;
    }

    validateOwnerNameFormat(OwnerName);
    validateOwnerNameEmpty(OwnerName);
    validateOwnerNameLength(OwnerName);
    validateOwnerNameSpecialSymbols(OwnerName);
    //
    validateCardNumberFormat(CardNumber);
    validateCardNumberEmpty(CardNumber);
    validateCardNumberLength(CardNumber);
    validateCardNumberSpecialSymbols(CardNumber);
    //
    validateMonthFormat(Month);
    validateMonthEmpty(Month);
    validateMonthSpecialSymbols(Month);
    //
    validateYearFormat(Year);
    validateYearEmpty(Year);
    validateYearSpecialSymbols(Year);
    //
    validateCvcFormat(Cvc);
    validateCvcLength(Cvc);
    validateCvcEmpty(Cvc);
    validateCvcSpecialSymbols(Cvc);

    let qs = document.querySelectorAll("p.error:not(.hide)");

    let nameInput = document.querySelectorAll("input#name ~ p:not(.hide)");

    if (nameInput.length > 0) {
      let input = document.getElementById("name");
      input.classList.add("input-error");
    } else {
      let input = document.getElementById("name");
      input.classList.remove("input-error");
    }

    let cardNumberInput = document.querySelectorAll(
      "input#card-number ~ p:not(.hide)"
    );

    if (cardNumberInput.length > 0) {
      let input = document.getElementById("card-number");
      input.classList.add("input-error");
    } else {
      let input = document.getElementById("card-number");
      input.classList.remove("input-error");
    }

    let monthInput = document.querySelectorAll(
      ".error-block  div:nth-child(1) p:not(.hide)"
    );

    if (monthInput.length > 0) {
      let input = document.getElementById("exp-month");
      input.classList.add("input-error");
    } else {
      let input = document.getElementById("exp-month");
      input.classList.remove("input-error");
    }

    let yearInput = document.querySelectorAll(
      ".error-block  div:nth-child(2) p:not(.hide)"
    );

    if (yearInput.length > 0) {
      let input = document.getElementById("exp-year");
      input.classList.add("input-error");
    } else {
      let input = document.getElementById("exp-year");
      input.classList.remove("input-error");
    }

    let cvcInput = document.querySelectorAll(
      ".error-block  div:nth-child(3) p:not(.hide)"
    );

    if (cvcInput.length > 0) {
      let input = document.getElementById("cvc");
      input.classList.add("input-error");
    } else {
      let input = document.getElementById("cvc");
      input.classList.remove("input-error");
    }

    if (qs.length === 0) {
      setComplete(true);
    }
  };

  useEffect(() => {
    setOwnerName(OwnerName);
    setMonth(Month);
    setYear(Year);
    setCardNumber(CardNumber);
    setCvc(Cvc);
  }, [OwnerName, Month, Year, CardNumber, Cvc, complete]);

  return (
    <div className="App">
      <img className="background-mobile" src={bg_main_mobile} alt=""></img>
      <img className="background-desktop" src={bg_main_desktop} alt=""></img>
      <CardBack cvc={Cvc} />
      <CardFront
        OwnerName={OwnerName}
        Month={Month}
        Year={Year}
        CardNumber={CardNumber}
      />

      <div className="margin">
        <div className="inputs">
          {complete ? (
            <div className="complete-wrapper">
              <img src={icon_complete} alt=""></img>
              <h1>THANK YOU!</h1>
              <p>We've added your card details</p>
            </div>
          ) : (
            <>
              <div className="input-wrapper">
                <label htmlFor="name">Cardholder Name</label>
                <input
                  id="name"
                  placeholder="e.g. Jane Appleseed"
                  onChange={(event) => setOwnerName(event.target.value)}
                ></input>
                <p id="nameValidationError" className="error hide">
                  Wrong format, letters only
                </p>
                <p id="nameEmptyError" className="error hide">
                  Can't be blank
                </p>
                <p id="nameLengthError" className="error hide">
                  Length should be bigger than 4
                </p>
                <p
                  id="nameValidationSpecialSymbolsError"
                  className="error hide"
                >
                  No special symbols allowed
                </p>
              </div>

              <div className="input-wrapper">
                <label htmlFor="name">Card Number</label>
                <input
                  id="card-number"
                  placeholder="e.g. 1234 5678 9123 0000"
                  onChange={(event) => {
                    setCardNumber(
                      (event.target.value = event.target.value
                        .replace(/\s/g, "")
                        .replace(/(.{4})/g, "$1 ")
                        .trim()
                        .slice(0, 19))
                    );
                  }}
                ></input>

                <p id="numberValidationError" className="error hide">
                  Wrong format, digits only
                </p>
                <p id="numberEmptyError" className="error hide">
                  Can't be blank
                </p>
                <p id="numberLengthError" className="error hide">
                  Length should be 19 digits
                </p>
                <p
                  id="numberValidationSpecialSymbolsError"
                  className="error hide"
                >
                  No special symbols allowed
                </p>
              </div>
              <div className="input-wrapper">
                <div className="exp-date-wrapper">
                  <label htmlFor="exp-month">
                    Card Number
                    <div>
                      <input
                        id="exp-month"
                        maxLength="2"
                        onChange={(event) => setMonth(event.target.value)}
                        placeholder="MM"
                      ></input>

                      <input
                        id="exp-year"
                        maxLength="2"
                        onChange={(event) => setYear(event.target.value)}
                        placeholder="YY"
                      ></input>
                    </div>
                  </label>

                  <label htmlFor="cvc">
                    CVC
                    <input
                      id="cvc"
                      maxLength="3"
                      onChange={(event) => setCvc(event.target.value)}
                      pattern="[0-9]+"
                      placeholder="e.g. 123"
                    ></input>
                  </label>
                </div>
                <div className="error-block">
                  <div>
                    <p id="monthValidationError" className="error hide">
                      Wrong format, digits only
                    </p>
                    <p id="monthEmptyError" className="error hide">
                      Can't be blank
                    </p>
                    <p id="monthValidationValue" className="error hide">
                      Month should be correct
                    </p>
                    <p
                      id="monthValidationSpecialSymbolsError"
                      className="error hide"
                    >
                      No special symbols allowed
                    </p>
                  </div>
                  {/* /// */}
                  <div>
                    <p id="yearValidationError" className="error hide">
                      Wrong format, digits only
                    </p>
                    <p id="yearEmptyError" className="error hide">
                      Can't be blank
                    </p>
                    <p id="yearValidationValue" className="error hide">
                      Year should be correct
                    </p>
                    <p
                      id="yearValidationSpecialSymbolsError"
                      className="error hide"
                    >
                      No special symbols allowed
                    </p>
                  </div>

                  <div>
                    <p id="cvcValidationError" className="error hide">
                      Wrong format, digits only
                    </p>
                    <p id="cvcEmptyError" className="error hide">
                      Can't be blank
                    </p>
                    <p id="cvcLengthValidationError" className="error hide">
                      Length should be 3 digits
                    </p>
                    <p
                      id="cvcValidationSpecialSymbolsError"
                      className="error hide"
                    >
                      No special symbols allowed
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          <button className="submit" onClick={submit}>
            {complete ? "Continue" : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
