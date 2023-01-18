let menuBtn = document.querySelector(".navbar__menu-toggle");
let navbarList = document.querySelector(".navbar__list");
let closeBtn = document.querySelector(".navbar__menu-tgclose");

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
