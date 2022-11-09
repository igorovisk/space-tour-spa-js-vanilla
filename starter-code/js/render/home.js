async function readJson(filename) {
   let response = await fetch(`data/${filename}.json`);
   let data = await response.json();
   populateDOMElements(data);
}
readJson("home");

function populateDOMElements(data) {
   title.textContent = data.title;
   description.textContent = data.description;
   buttonText.textContent = "EXPLORE";
}
