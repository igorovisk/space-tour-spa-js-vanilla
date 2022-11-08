const app = document.getElementById("app");

//HEADER
const header = createElement("header");
const nav = createElement("nav");
const img = createElement("img");
const div = createElement("div");
header.appendChild(nav);
nav.appendChild(img);
nav.appendChild(div);

//MAIN
const main = createElement("main");
const section = document.createElement("section", 'heading');
const h1 = document.createElement("h1", 'heading__title');
const p = document.createElement("p", 'heading__title');
const a = document.createElement("a");
main.appendChild(section);
section.appendChild(h1);
section.appendChild(p);
main.appendChild(a);

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
