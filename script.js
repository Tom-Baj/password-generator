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
          if (!finalSelection.includes(lowercase)) {
            finalSelection.push(lowercase);
          }
        } else {
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

      // Activer ou désactiver le bouton generateButton en fonction de la sélection
      generateButton.disabled = finalSelection.length === 0;
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
  labelPassword.textContent = "Mots de passe";
  labelPassword.setAttribute("name", "input-password");

  const inputPassword = document.createElement("input");
  inputPassword.classList.add("input-password");
  inputPassword.setAttribute("type", "readonly");

  const zoneInput = document.createElement("div");
  zoneInput.classList.add("zone-input");

  const backButton = document.createElement("button");
  backButton.classList.add("back-button", "password-button");

  // Contenu SVG pour le bouton de retour, avec une taille de 36x36
  const backButtonSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24" width="36">
      <path d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"/>
    </svg>
  `;
  backButton.innerHTML = backButtonSVG;

  const copyButton = document.createElement("button");
  copyButton.classList.add("copy-button", "password-button");

  // Contenu SVG pour le bouton de copie
  const copyButtonSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M15 1H4c-1.1 0-2 .9-2 2v13c0 .55.45 1 1 1s1-.45 1-1V4c0-.55.45-1 1-1h10c.55 0 1-.45 1-1s-.45-1-1-1zm.59 4.59l4.83 4.83c.37.37.58.88.58 1.41V21c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h6.17c.53 0 1.04.21 1.42.59zM15 12h4.5L14 6.5V11c0 .55.45 1 1 1z"/>
    </svg>
  `;
  copyButton.innerHTML = copyButtonSVG;

  passwordContainer.appendChild(backButton);
  passwordContainer.appendChild(labelPassword);
  passwordContainer.appendChild(zoneInput);
  zoneInput.appendChild(inputPassword);
  zoneInput.appendChild(copyButton);

  backButton.addEventListener("click", () => {
    passwordContainer.innerHTML = "";
    displayPasswordZone();
  });

  copyButton.addEventListener("click", () => {
    navigator.clipboard
      .writeText(inputPassword.value)
      .then(() => {
        alert("Mot de passe copié dans le presse-papiers !");
      })
      .catch((err) => {
        console.error("Erreur lors de la copie du mot de passe : ", err);
      });
  });

  console.log("input password :", inputPassword);
  console.log("password :", password);
  inputPassword.innerHTML = "";
  inputPassword.setAttribute("value", password);
}

function displayPasswordZone() {
  mainContainer.classList.toggle("hidden");
  passwordContainer.classList.toggle("hidden");
  generateButton.classList.toggle("hidden");
}

generateButton.addEventListener("click", (event) => {
  event.preventDefault();

  let finalList = finalSelection.flat();
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

// Désactiver le bouton generateButton par défaut
generateButton.disabled = true;
