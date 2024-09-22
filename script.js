const mainContainer = document.querySelector(".main-container");
const passwordContainer = document.querySelector(".password-container");
const generateButton = document.getElementById("generate");
const passwordRange = document.querySelector(".character-range");
const rangeSection = document.querySelector(".range-section");
const allCheckbox = document.querySelectorAll(".checkbox");
const passwordInput = document.getElementById("password");

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

let finalSelection = [];

function displayPasswordLength() {
  let numberValue = document.createElement("p");
  numberValue.classList.add("text-range-value");
  rangeSection.appendChild(numberValue);

  passwordRange.addEventListener("change", () => {
    rangeValue = passwordRange.value;
    numberValue.innerText = rangeValue;
  });

  rangeValue = passwordRange.value;
  numberValue.innerText = rangeValue;
}

function clickCheckbox() {
  allCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      if (checkbox.id === "lowercase") {
        if (checkbox.checked) {
          // Ajouter seulement si ça n'existe pas déjà dans finalSelection
          if (!finalSelection.includes(lowercase)) {
            finalSelection.push(lowercase);
          }
        } else {
          // Supprimer si la case est décochée
          finalSelection = finalSelection.filter((item) => item !== lowercase);
        }
      }

      if (checkbox.id === "uppercase") {
        if (checkbox.checked) {
          if (!finalSelection.includes(uppercase)) {
            finalSelection.push(uppercase);
          }
        } else {
          finalSelection = finalSelection.filter((item) => item !== uppercase);
        }
      }

      if (checkbox.id === "numbers") {
        if (checkbox.checked) {
          if (!finalSelection.includes(numbers)) {
            finalSelection.push(numbers);
          }
        } else {
          finalSelection = finalSelection.filter((item) => item !== numbers);
        }
      }

      if (checkbox.id === "symbols") {
        if (checkbox.checked) {
          if (!finalSelection.includes(symbols)) {
            finalSelection.push(symbols);
          }
        } else {
          finalSelection = finalSelection.filter((item) => item !== symbols);
        }
      }
    });
  });
}

function resetForm() {
  allCheckbox.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.checked = false;
    }
    passwordRange.value = 8;
    document.querySelector(".text-range-value").innerText = 8;
  });
}

function createPasswordZone() {
  const labelPassword = document.createElement("label");
  labelPassword.classList.add("password-label");
  labelPassword.textContent = "Mots de passe :";

  const inputPassword = document.createElement("input");
  inputPassword.classList.add("input-password");

  const backButton = document.createElement("button");
  backButton.classList.add("back-button");

  passwordContainer.appendChild(labelPassword);
  passwordContainer.appendChild(inputPassword);
  passwordContainer.appendChild(backButton);

  backButton.addEventListener("click", () => {
    displayPasswordZone();
  });
}

function displayPasswordZone() {
  mainContainer.classList.toggle("hidden");
  passwordContainer.classList.toggle("hidden");
  generateButton.classList.toggle("hidden");
}

generateButton.addEventListener("click", (event) => {
  event.preventDefault();

  let checkboxValide = 0;
  allCheckbox.forEach((checkbox) => {
    if (checkbox.checked) {
      checkboxValide++;
    }
  });

  if (checkboxValide === 0) {
    alert("Veuillez sélectionner au moins une option.");
    return;
  }

  let finalList = finalSelection.flat();
  let finalItem = finalList.length;

  let passwordLength = passwordRange.value;

  password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * finalList.length);
    password += finalList[randomIndex];
  }

  resetForm();
  createPasswordZone();
  displayPasswordZone();
});

displayPasswordLength();
clickCheckbox();
