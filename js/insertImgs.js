let sectionSkills = document.querySelector(".skills-img");
let route = "assets/img/skills/";
let images = [
  "boostrap",
  "css",
  "html5",
  "adobe-xd",
  "git",
  "javascript",
  "mysql",
  "php",
  "react",
  "sass",
];

images.forEach((img) => {
  let image = document.createElement("img");
  image.src = `${route}${img}.svg`;
  sectionSkills.appendChild(image);
  image.setAttribute("alt", img)
});

let cards = document.querySelectorAll(".card");
route = "assets/img/projects/";
let projects = ["hotel", "cinema", "marvel", "portafolio", "ahorro"];

  cards.forEach((card,i) => {
    card.style.backgroundImage = `url(${route}${projects[i]}.png)`;
  });
