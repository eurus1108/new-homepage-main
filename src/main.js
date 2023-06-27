const hamburger = document.querySelector(".hamburger");
const modalMenu = document.querySelector(".modal");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger--active");
  modalMenu.classList.toggle("modal--active");
  body.classList.toggle("no-scroll");
});

const modalLink = document.querySelectorAll(".new-section-link");

modalLink.forEach((link) => {
  link.setAttribute("tabindex", "-1");
});
