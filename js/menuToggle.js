let menuBtn = document.querySelector(".navbar__menu-toggle");
let navbarList = document.querySelector(".navbar__list");
let closeBtn = document.querySelector(".navbar__menu-tgclose");
let navItems = document.querySelectorAll(".navbar__list-item > a");
let logo = document.querySelector(".navbar__logo");

menuBtn.onclick = function () {
  navbarList.classList.toggle("open");
  closeBtn.classList.toggle("hidden");
  menuBtn.classList.toggle("hidden");
};

closeBtn.onclick = function () {
  navbarList.classList.toggle("open");
  closeBtn.classList.toggle("hidden");
  menuBtn.classList.toggle("hidden");
};

navItems.forEach(function (item) {
  item.onclick = function () {
    navbarList.classList.toggle("open");
    closeBtn.classList.toggle("hidden");
    menuBtn.classList.toggle("hidden");
  };
});
