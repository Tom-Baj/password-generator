const optionsContainer = document.querySelector(".options-container");
const passwordContainer = document.querySelector(".password-container");

const generate = document
  .getElementById("generate")
  .addEventListener("click", () => {
    optionsContainer.classList.toggle("hidden");
    passwordContainer.classList.toggle("hidden");
  });
