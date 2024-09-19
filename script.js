const checkboxContainer = document.querySelector(".checkbox-container");
const passwordContainer = document.querySelector(".password-container");
const generate = document.getElementById("generate");
const passwordRange = document.querySelector(".character-range");
const rangeSection = document.querySelector(".range-section");
const allCheckbox = document.querySelectorAll(".checkbox");

const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "!",
  "?",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
];

function displayPasswordLenght() {
  let numberValue = document.createElement("p");
  rangeSection.appendChild(numberValue);

  passwordRange.addEventListener("change", () => {
    rangeValue = passwordRange.value;
    numberValue.innerText = rangeValue;
    console.log(rangeValue);
  });

  rangeValue = passwordRange.value;
  numberValue.innerText = rangeValue;
}

function checkboxChoice() {
  allCheckbox.forEach((checkbox) => {
    if (checkbox.checked) {
      if (checkbox.id === "lowercase") {
        optionsChoice.push(lowercase);
      }
      if (checkbox.id === "uppercase") {
        optionsChoice.push(uppercase);
      }
      if (checkbox.id === "numbers") {
        optionsChoice.push(numbers);
      }
      if (checkbox.id === "symboles") {
        optionsChoice.push(symbols);
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayPasswordLenght();
});

generate.addEventListener("click", () => {
  optionsChoice = [];
  checkboxChoice();
  console.log(optionsChoice);
});
