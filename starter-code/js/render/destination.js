async function readJson(filename) {
   let response = await fetch(`data/${filename}.json`);
   let data = await response.json();
   storeData(data);
   return data;
}
readJson("destination");

function storeData(data) {
   sessionStorage.setItem("destination", JSON.stringify(data.destinations));
}

function renderDestination(destination) {
   const getStorageItem = sessionStorage.getItem("destination");

   const data = JSON.parse(getStorageItem).find((planet) => {
      return planet.name == destination;
   });
   console.log(data, "data");
   title.textContent = data.name;
   description.textContent = data.description;
   console.log(description, "decr");
   destinationImage.src = data.images.png;
   footerDistance.textContent = data.distance;
   footerTime.textContent = data.travel;
}

// // renderData();
