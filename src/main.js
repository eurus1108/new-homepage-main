const hamburger = document.querySelector(".hamburger");
const modalMenu = document.querySelector(".modal");
const body = document.querySelector("body");
let isClicked = false;

let widthSize;

window.onresize = window.onload = function () {
  widthSize = this.innerHeight;

  if (widthSize >= 688) {
    body.classList.remove("no-scroll");
  }

  if (widthSize < 688 && modalMenu.classList.contains("modal--active")) {
    body.classList.add("no-scroll");
  }
};

hamburger.addEventListener("click", () => {
  if (!isClicked) {
    isClicked = true;
    hamburger.classList.add("hamburger--active");
    hamburger.setAttribute("aria-expanded", isClicked);
    body.classList.add("no-scroll");
  } else {
    isClicked = false;
    hamburger.classList.remove("hamburger--active");
    hamburger.setAttribute("aria-expanded", isClicked);
    body.classList.remove("no-scroll");
  }

  modalMenu.classList.toggle("modal--active");
});

const modalLink = document.querySelectorAll(".new-section-link");

modalLink.forEach((link) => {
  link.setAttribute("tabindex", "-1");
});
