const overlay = document.querySelector(".overlay");
const mobileMenuBtn = document.querySelector(".ham-menu__btn");
const shopMenuBtn = document.querySelector(".header-mobile__shopping-bag");
const mobileMenuCloseBtn = document.querySelector(".mobile-header__close-svg");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileCart = document.querySelector(".mobile-cart");

overlay.addEventListener("click", (e) => {
  mobileMenu.classList.remove("mobile-menu--open");
  mobileCart.classList.remove("mobile-cart--open");
  overlay.classList.toggle("overlay--active");
})

mobileMenuBtn.addEventListener("click", (e) => {
  overlay.classList.toggle("overlay--active");
  mobileMenu.classList.toggle("mobile-menu--open");
})

mobileMenuCloseBtn.addEventListener("click", (e) => {
  overlay.classList.toggle("overlay--active");
  mobileMenu.classList.toggle("mobile-menu--open");
})

shopMenuBtn.addEventListener("click", (e) => {
  overlay.classList.toggle("overlay--active");
  mobileCart.classList.toggle("mobile-cart--open");
})