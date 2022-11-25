async function readJson(filename) {
   let response = await fetch(`data/${filename}.json`);
   let data = await response.json();
   storeData(data);
   return data;
}
readJson("destination");
// readJson("technology");

function storeData(data) {
   sessionStorage.setItem("destination", data);
   console.log(sessionStorage.getItem("destination"));
}

function readData(data) {}

function renderDestination(destination) {
   // console.log(destination, "destination");
   // title.textContent = destination.name;
   // description.textContent = destination.description;
   // // destinationImage.src = destination.images.png;
   // footerDistance.textContent = destination.distance;
   // footerTime.textContent = destination.travel;
}

// // renderData();
