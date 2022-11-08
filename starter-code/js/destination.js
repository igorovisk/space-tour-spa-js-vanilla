const sectionTitle = document.getElementById("section__title");
const sectionDescription = document.getElementById("section__description");
const destinationImage = document.getElementById("main__image");
const footerDistance = document.getElementById("footer__distance");
const footerTime = document.getElementById("footer__time");

// async function readJson() {
//    let response = await fetch("./destination.json");
//    let data = await response.json();
//    storeData(data);
// }
// readJson();

function storeData(data){
   window.destinationData
}






function renderBase(data) {
   sectionTitle.textContent = data.destinations[d].name;
   sectionDescription.textContent = data.destinations[0].description;
   destinationImage.src = data.destinations[0].images.png;
   footerDistance.textContent = data.destinations[0].distance;
   footerTime.textContent = data.destinations[0].travel;
}

function changeAndRenderData(destination) {
   console.log(destination, "destination");

   sectionTitle.textContent = destination.name;
   sectionDescription.textContent = destination.description;
   destinationImage.src = destination.images.png;
   footerDistance.textContent = destination.distance;
   footerTime.textContent = destination.travel;
}

// renderData();
