function toggleMenu(){}

async function readJson(filename) {
   let response = await fetch(`./${filename}.json`);
   let data = await response.json();
   storeData(data);
}
