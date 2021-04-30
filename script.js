const burgerMenu = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
const navLink = document.querySelector(".nav__link");
const body = document.querySelector("body");

let burgerOpen = false;

// BURGER NAV
const menuToggle = function () {
  if (!burgerOpen) {
    burgerMenu.classList.add("open");
    nav.classList.add("open");
    body.style.overflow = "hidden";
    burgerOpen = true;
  } else {
    burgerMenu.classList.remove("open");
    nav.classList.remove("open");
    body.style.overflow = "scroll";
    burgerOpen = false;
  }
};

burgerMenu.addEventListener("click", menuToggle);

// SMOOTH SCROLL

navList.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
