let validateOwnerNameSpecialSymbols = (state) => {
  console.log(state);
  if (state.search(/[ \\`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]+/gm) !== -1) {
    let cardOwner = document.getElementById(
      "nameValidationSpecialSymbolsError"
    );
    cardOwner.classList.remove("hide");
    return true;
  } else {
    let cardOwner = document.getElementById(
      "nameValidationSpecialSymbolsError"
    );
    cardOwner.classList.add("hide");
    return false;
  }
};

let validateOwnerNameEmpty = (state) => {
  if (state.length < 1) {
    let cardOwner = document.getElementById("nameEmptyError");
    cardOwner.classList.remove("hide");
    return true;
  } else {
    let cardOwner = document.getElementById("nameEmptyError");
    cardOwner.classList.add("hide");
    return false;
  }
};

let validateOwnerNameLength = (state) => {
  if (state.length > 1 && state.length < 4) {
    let cardOwner = document.getElementById("nameLengthError");
    cardOwner.classList.remove("hide");
    return true;
  } else {
    let cardOwner = document.getElementById("nameLengthError");
    cardOwner.classList.add("hide");
    return false;
  }
};

let validateOwnerNameFormat = (state) => {
  if (state.search(/\d+/gm) !== -1) {
    let cardOwner = document.getElementById("nameValidationError");
    cardOwner.classList.remove("hide");
    return true;
  } else {
    let cardOwner = document.getElementById("nameValidationError");
    cardOwner.classList.add("hide");
    return false;
  }
};

let validateCardNumberFormat = (state) => {
  if (state.search(/[A-z]+/gm) !== -1) {
    let cardNumber = document.getElementById("numberValidationError");
    cardNumber.classList.remove("hide");
    return true;
  } else {
    let cardNumber = document.getElementById("numberValidationError");
    cardNumber.classList.add("hide");
    return false;
  }
};

let validateCardNumberEmpty = (state) => {
  if (state.length < 1) {
    let cardNumber = document.getElementById("numberEmptyError");
    cardNumber.classList.remove("hide");
    return true;
  } else {
    let cardNumber = document.getElementById("numberEmptyError");
    cardNumber.classList.add("hide");
    return false;
  }
};

let validateCardNumberLength = (state) => {
  if (state.length > 0 && state.length < 19) {
    let cardNumber = document.getElementById("numberLengthError");
    cardNumber.classList.remove("hide");
    return true;
  } else {
    let cardNumber = document.getElementById("numberLengthError");
    cardNumber.classList.add("hide");
    return false;
  }
};

let validateCardNumberSpecialSymbols = (state) => {
  if (state.search(/[\\`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]+/gm) !== -1) {
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

let validateMonthFormat = (state) => {
  if (state.search(/\D+/gm) !== -1) {
    let month = document.getElementById("monthValidationError");
    month.classList.remove("hide");
  } else {
    let month = document.getElementById("monthValidationError");
    month.classList.add("hide");
  }

  if (+state < 1 || +state > 12) {
    let month = document.getElementById("monthValidationValue");
    month.classList.remove("hide");
    return true;
  } else {
    let month = document.getElementById("monthValidationValue");
    month.classList.add("hide");
    return false;
  }
};

let validateMonthEmpty = (state) => {
  if (state.length < 1) {
    let month = document.getElementById("monthEmptyError");
    month.classList.remove("hide");
    return true;
  } else {
    let month = document.getElementById("monthEmptyError");
    month.classList.add("hide");
    return false;
  }
};

let validateMonthSpecialSymbols = (state) => {
  if (state.search(/[\\`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]+/gm) !== -1) {
    let month = document.getElementById("monthValidationSpecialSymbolsError");
    month.classList.remove("hide");
    return true;
  } else {
    let month = document.getElementById("monthValidationSpecialSymbolsError");
    month.classList.add("hide");
    return false;
  }
};

let validateYearFormat = (state) => {
  if (state.search(/\D+/gm) !== -1) {
    let year = document.getElementById("yearValidationError");
    year.classList.remove("hide");
  } else {
    let year = document.getElementById("yearValidationError");
    year.classList.add("hide");
  }

  if (
    new Date().getFullYear() + 5 < +state + 2000 ||
    +state + 2000 < new Date().getFullYear() - 5
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

let validateYearEmpty = (state) => {
  if (state.length < 1) {
    let year = document.getElementById("yearEmptyError");
    year.classList.remove("hide");
    return true;
  } else {
    let year = document.getElementById("yearEmptyError");
    year.classList.add("hide");
    return false;
  }
};

let validateYearSpecialSymbols = (state) => {
  if (state.search(/[\\`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]+/gm) !== -1) {
    let year = document.getElementById("yearValidationSpecialSymbolsError");
    year.classList.remove("hide");
    return true;
  } else {
    let year = document.getElementById("yearValidationSpecialSymbolsError");
    year.classList.add("hide");
    return false;
  }
};

let validateCvcFormat = (state) => {
  if (state.search(/\D+/gm) !== -1) {
    let cvc = document.getElementById("cvcValidationError");
    cvc.classList.remove("hide");
    return true;
  } else {
    let cvc = document.getElementById("cvcValidationError");
    cvc.classList.add("hide");
    return false;
  }
};

let validateCvcLength = (state) => {
  if (state.length < 3 && state.length > 1) {
    let cvc = document.getElementById("cvcLengthValidationError");
    cvc.classList.remove("hide");
    return true;
  } else {
    let cvc = document.getElementById("cvcLengthValidationError");
    cvc.classList.add("hide");
    return false;
  }
};

let validateCvcEmpty = (state) => {
  if (state.length < 1) {
    let cvc = document.getElementById("cvcEmptyError");
    cvc.classList.remove("hide");
    return true;
  } else {
    let cvc = document.getElementById("cvcEmptyError");
    cvc.classList.add("hide");
    return false;
  }
};

let validateCvcSpecialSymbols = (state) => {
  if (state.search(/[\\`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]+/gm) !== -1) {
    let cvc = document.getElementById("cvcValidationSpecialSymbolsError");
    cvc.classList.remove("hide");
    return true;
  } else {
    let cvc = document.getElementById("cvcValidationSpecialSymbolsError");
    cvc.classList.add("hide");
    return false;
  }
};

export {
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
};
