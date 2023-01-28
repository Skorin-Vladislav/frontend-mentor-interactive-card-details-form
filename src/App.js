// import icon_complete from "./images/icon-complete.svg";
import bg_main_mobile from "./images/bg-main-mobile.png";
import "./App.scss";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";

function App() {
  return (
    <div className="App">
      <img className="background-mobile" src={bg_main_mobile} alt=""></img>
      <CardBack />
      <CardFront />
      <div className="margin">
        <div className="inputs">
          <div className="input-wrapper">
            <label htmlFor="name">Cardholder Name</label>
            <input id="name" placeholder="e.g. Jane Appleseed"></input>
          </div>

          <div className="input-wrapper">
            <label htmlFor="name">Card Number</label>
            <input
              id="card-number"
              placeholder="e.g. 1234 5678 9123 0000"
            ></input>
          </div>

          <div className="input-wrapper">
            <div className="exp-date-wrapper">
              <label htmlFor="exp-month">
                Card Number
                <div>
                  <input
                    id="exp-month"
                    maxLength="2"
                    pattern="[0-9]+"
                    placeholder="MM"
                  ></input>
                  <input
                    id="exp-year"
                    maxLength="2"
                    pattern="[0-9]+"
                    placeholder="YY"
                  ></input>
                </div>
              </label>

              <label htmlFor="cvc">
                CVC
                <input
                  id="cvc"
                  maxLength="3"
                  pattern="[0-9]+"
                  placeholder="e.g. 123"
                ></input>
              </label>
            </div>
          </div>

          <button className="submit">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default App;
