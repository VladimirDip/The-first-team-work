const burgerOverlay = document.querySelector(".burger-overlay");

const burgerBtn = document.querySelector(".header__burger-btn");
const exitText = burgerBtn.querySelector(".header__burger-btn-text");

const togglePopup = () => {
  burgerOverlay.classList.toggle("hidden");
  burgerBtn.classList.toggle("header__burger-btn_type_exit");
  exitText.classList.toggle("hidden");
};

const toggleBurger = () => {
  burgerBtn.classList.add("header__burger-btn_type_exit");
};

burgerBtn.addEventListener("click", togglePopup);
exitText.addEventListener("click", toggleBurger);
