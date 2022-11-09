const app = document.getElementById("app");

//HEADER
const header = createElement("header");
const nav = createElement("nav");
const logo = createElement("img", "nav__logo");
const navMenu = createElement("div", "nav__menu");
const hamburguerIcon = createElement("img");
header.appendChild(nav);
nav.appendChild(logo);
nav.appendChild(navMenu);
navMenu.appendChild(hamburguerIcon);
logo.src = "assets/shared/logo.svg";
hamburguerIcon.src = "assets/shared/icon-hamburger.svg";

//MAIN
const main = createElement("main");
const section = createElement("section", "heading");
const destinationImageContainer = createElement("div", "image__container");
destinationImageContainer.classList.add("hide");
const destinationImage = createElement("img");
destinationImage.src = "./assets/destination/image-moon.png";
destinationImageContainer.appendChild(destinationImage);
section.appendChild(destinationImageContainer);
const title = createElement("h1", "heading__title");
const description = createElement("p", "heading__description");
const exploreButton = createElement("a", "explore__button");
const buttonText = createElement("p");
const buttonSpan = createElement("span", "hover__background");
main.appendChild(section);
section.appendChild(title);
section.appendChild(description);
exploreButton.appendChild(buttonText);
exploreButton.appendChild(buttonSpan);
main.appendChild(exploreButton);

exploreButton.onclick = function () {
   destinationLayout();
};

//APPEND TO APP
app.appendChild(header);
app.appendChild(main);

function createElement(elementName, className = null) {
   const newElement = document.createElement(elementName);
   if (className) {
      newElement.classList.add(className);
   }
   return newElement;
}
