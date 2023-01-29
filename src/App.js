import icon_complete from "./images/icon-complete.svg";
import bg_main_mobile from "./images/bg-main-mobile.png";
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

  let validateOwnerNameFormat = () => {
    if (OwnerName.search(/\d+/gm) !== -1) {
      let cardOwner = document.getElementById("nameValidationError");
      cardOwner.classList.remove("hide");
      return true;
      // let input = document.getElementById("name");
      // input.classList.add("inputError");
    } else {
      let cardOwner = document.getElementById("nameValidationError");
      cardOwner.classList.add("hide");
      return false;
      // let input = document.getElementById("name");
      // input.classList.remove("inputError");
    }
  };

  let validateOwnerNameEmpty = () => {
    if (OwnerName.length < 1) {
      let cardOwner = document.getElementById("nameEmptyError");
      cardOwner.classList.remove("hide");
      return true;

      // let input = document.getElementById("name");
      // input.classList.add("inputError");
    } else {
      let cardOwner = document.getElementById("nameEmptyError");
      cardOwner.classList.add("hide");
      return false;

      // let input = document.getElementById("name");
      // input.classList.remove("inputError");
    }
  };

  let validateOwnerNameLength = () => {
    if (OwnerName.length > 1 && OwnerName.length < 4) {
      let cardOwner = document.getElementById("nameLengthError");
      cardOwner.classList.remove("hide");
      return true;
      // let input = document.getElementById("name");
      // input.classList.add("inputError");
    } else {
      let cardOwner = document.getElementById("nameLengthError");
      cardOwner.classList.add("hide");
      return false;
      // let input = document.getElementById("name");
      // input.classList.remove("inputError");
    }
  };

  let validateOwnerNameSpecialSymbols = () => {
    if (
      OwnerName.search(/[ \\`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]+/gm) !== -1
    ) {
      let cardOwner = document.getElementById(
        "nameValidationSpecialSymbolsError"
      );
      cardOwner.classList.remove("hide");
      return true;
      // let input = document.getElementById("name");
      // input.classList.add("inputError");
    } else {
      let cardOwner = document.getElementById(
        "nameValidationSpecialSymbolsError"
      );
      cardOwner.classList.add("hide");
      return false;
      // let input = document.getElementById("name");
      // input.classList.remove("inputError");
    }
  };

  let validateCardNumberFormat = () => {
    if (CardNumber.search(/[A-z]+/gm) !== -1) {
      let CardNumber = document.getElementById("numberValidationError");
      CardNumber.classList.remove("hide");
      return true;
    } else {
      let CardNumber = document.getElementById("numberValidationError");
      CardNumber.classList.add("hide");
      return false;
    }
  };

  let validateCardNumberEmpty = () => {
    if (CardNumber.length < 1) {
      let cardNumber = document.getElementById("numberEmptyError");
      cardNumber.classList.remove("hide");
      return true;
    } else {
      let cardNumber = document.getElementById("numberEmptyError");
      cardNumber.classList.add("hide");
      return false;
    }
  };

  let validateCardNumberLength = () => {
    if (CardNumber.length > 1 && CardNumber.length < 19) {
      let cardNumber = document.getElementById("numberLengthError");
      cardNumber.classList.remove("hide");
      return true;
    } else {
      let cardNumber = document.getElementById("numberLengthError");
      cardNumber.classList.add("hide");
      return false;
    }
  };

  let validateCardNumberSpecialSymbols = () => {
    if (
      CardNumber.search(/[\\`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]+/gm) !== -1
    ) {
      let cardNumber = document.getElementById(
        "numberValidationSpecialSymbolsError"
      );
      cardNumber.classList.remove("hide");
      return true;
    } else {
      let cardNumber = document.getElementById(
        "numberValidationSpecialSymbolsError"
      );
      cardNumber.classList.add("hide");
      return false;
    }
  };

  let validateMonthFormat = () => {
    if (Month.search(/\D+/gm) !== -1) {
      let month = document.getElementById("monthValidationError");
      month.classList.remove("hide");
    } else {
      let month = document.getElementById("monthValidationError");
      month.classList.add("hide");
    }

    if (+Month < 1 || +Month > 12) {
      let month = document.getElementById("monthValidationValue");
      month.classList.remove("hide");
      return true;
    } else {
      let month = document.getElementById("monthValidationValue");
      month.classList.add("hide");
      return false;
    }
  };

  let validateMonthEmpty = () => {
    if (Month.length < 1) {
      let month = document.getElementById("monthEmptyError");
      month.classList.remove("hide");
      return true;
    } else {
      let month = document.getElementById("monthEmptyError");
      month.classList.add("hide");
      return false;
    }
  };

  let validateMonthSpecialSymbols = () => {
    if (Month.search(/[\\`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]+/gm) !== -1) {
      let month = document.getElementById("monthValidationSpecialSymbolsError");
      month.classList.remove("hide");
      return true;
    } else {
      let month = document.getElementById("monthValidationSpecialSymbolsError");
      month.classList.add("hide");
      return false;
    }
  };

  ////
  let validateYearFormat = () => {
    if (Year.search(/\D+/gm) !== -1) {
      let year = document.getElementById("yearValidationError");
      year.classList.remove("hide");
    } else {
      let year = document.getElementById("yearValidationError");
      year.classList.add("hide");
    }

    if (
      new Date().getFullYear() + 5 < +Year + 2000 ||
      +Year + 2000 < new Date().getFullYear() - 5
    ) {
      let year = document.getElementById("yearValidationValue");
      year.classList.remove("hide");
      return true;
    } else {
      let year = document.getElementById("yearValidationValue");
      year.classList.add("hide");
      return false;
    }
  };

  let validateYearEmpty = () => {
    if (Year.length < 1) {
      let year = document.getElementById("yearEmptyError");
      year.classList.remove("hide");
      return true;
    } else {
      let year = document.getElementById("yearEmptyError");
      year.classList.add("hide");
      return false;
    }
  };

  let validateYearSpecialSymbols = () => {
    if (Year.search(/[\\`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]+/gm) !== -1) {
      let year = document.getElementById("yearValidationSpecialSymbolsError");
      year.classList.remove("hide");
      return true;
    } else {
      let year = document.getElementById("yearValidationSpecialSymbolsError");
      year.classList.add("hide");
      return false;
    }
  };

  let validateCvcFormat = () => {
    if (Cvc.search(/\D+/gm) !== -1) {
      let cvc = document.getElementById("cvcValidationError");
      cvc.classList.remove("hide");
      return true;
    } else {
      let cvc = document.getElementById("cvcValidationError");
      cvc.classList.add("hide");
      return false;
    }
  };

  let validateCvcLength = () => {
    if (Cvc.length < 3 && Cvc.length > 1) {
      let cvc = document.getElementById("cvcLengthValidationError");
      cvc.classList.remove("hide");
      return true;
    } else {
      let cvc = document.getElementById("cvcLengthValidationError");
      cvc.classList.add("hide");
      return false;
    }
  };

  let validateCvcEmpty = () => {
    if (Cvc.length < 1) {
      let cvc = document.getElementById("cvcEmptyError");
      cvc.classList.remove("hide");
      return true;
    } else {
      let cvc = document.getElementById("cvcEmptyError");
      cvc.classList.add("hide");
      return false;
    }
  };

  let validateCvcSpecialSymbols = () => {
    if (Cvc.search(/[\\`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]+/gm) !== -1) {
      let cvc = document.getElementById("cvcValidationSpecialSymbolsError");
      cvc.classList.remove("hide");
      return true;
    } else {
      let cvc = document.getElementById("cvcValidationSpecialSymbolsError");
      cvc.classList.add("hide");
      return false;
    }
  };

  let submit = () => {
    if (complete) {
      setComplete(!complete);
      return false;
    }

    /*done*/
    validateOwnerNameFormat();
    validateOwnerNameEmpty();
    validateOwnerNameLength();
    validateOwnerNameSpecialSymbols();
    //
    validateCardNumberFormat();
    validateCardNumberEmpty();
    validateCardNumberLength();
    validateCardNumberSpecialSymbols();
    //
    validateMonthFormat();
    validateMonthEmpty();
    validateMonthSpecialSymbols();
    //
    validateYearFormat();
    validateYearEmpty();
    validateYearSpecialSymbols();
    //
    validateCvcFormat();
    validateCvcLength();
    validateCvcEmpty();
    validateCvcSpecialSymbols();
    /**done */

    let qs = document.querySelectorAll("p.error:not(.hide)");

    // console.log(qs);
    // console.log(qs.length);

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
