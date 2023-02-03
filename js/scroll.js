AOS.init({
  duration: 950
});
window.addEventListener("scroll", () => {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 200);
});
