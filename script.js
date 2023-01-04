"use strict";

const number = document.querySelectorAll("[data-num]");
const operator = document.querySelectorAll("[data-operator]");
const display = document.querySelector(".numberDisplay");
const equalNumber = document.querySelector(".equal");
const deleteBtn = document.querySelector("[data-delete]");
const allClear = document.querySelector(".clear");

function deleteOperation() {
  let currentDisplay = display.textContent;
  display.textContent = currentDisplay.slice(0, -1);
}

function formatNum(currentNumber, localeValue) {
  const strContainNum = /\d+/;
  currentNumber = display.textContent;
  localeValue = currentNumber.match(strContainNum);
  const replaces = Number(localeValue).toLocaleString();

  display.textContent.replace(strContainNum);
}

// Number Clicking
number.forEach((num) => {
  const strContainNum = /\d+/;
  num.addEventListener("click", () => {
    display.textContent += num.value;

    // Updating Display;
    formatNum();

    // const x = formatNum(display.textContent);
    // const current = display.textContent;
    // const format = current.replace(current, x);
    // display.textContent = format;
  });
});

// Operator Clicking
operator.forEach((ops) => {
  ops.addEventListener("click", () => {
    const regExp = /[+\-X/]/;
    if (regExp.test(display.textContent)) {
      let replaces = display.textContent.replace(regExp, ops.value);
      display.textContent = replaces;
    } else {
      display.textContent += ops.value;
    }
  });
});

// Equal Number
equalNumber.addEventListener("click", () => {
  const regExp = /[+\-/]/;
  if (regExp.test(display.textContent)) {
    display.textContent = eval(display.textContent);
  }

  if (display.textContent.includes("x")) {
    const replaces = display.textContent.replace("x", "*");
    display.textContent = eval(replaces);
  }

  return;
});

// Delete Button
deleteBtn.addEventListener("click", deleteOperation);

// clearAll
allClear.addEventListener("click", () => {
  display.textContent = "";
});
