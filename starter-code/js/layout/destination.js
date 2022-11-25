function destinationLayout() {
   //LOAD CSS
   const link = createElement("link");
   link.href = "./styles/destination.css";
   link.rel = "stylesheet";
   const head = document.head;
   head.append(link);

   destinationImageContainer.classList.remove("hide");
   destinationImageContainer.classList.add("show");
   section.style.marginTop = "20px";

   const slider = createElement("div", "slider");
   for (let i = 1; i <= 4; i++) {
      const sliderDiv = createElement("div");
      const a = createElement("a");
      a.textContent = "Link";
      a.addEventListener("click", (ev) => {
         ev.preventDefault();
         renderDestination(ev.target.textContent);
      });
      const sliderSpan = createElement("span");
      sliderDiv.appendChild(a);
      sliderDiv.appendChild(sliderSpan);
      slider.appendChild(sliderDiv);
   }
   const sliderDivs = slider.children;
   const moonLink = (sliderDivs[0].children[0].textContent = "Moon");
   const marsLink = (sliderDivs[1].children[0].textContent = "Mars");
   const europaLink = (sliderDivs[2].children[0].textContent = "Europa");
   const titanLink = (sliderDivs[3].children[0].textContent = "Titan");

   //make moon active first
   sliderDivs[0].children[1].classList.add("active");

   section.insertBefore(slider, title);

   title.classList.remove("heading__title");
   title.classList.add("section__title");
   title.textContent = "Moon";
   description.textContent =
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
   exploreButton.classList.add("hide");

   const footer = createElement("footer");
   const footerDistance = createElement("p");
   const footerTime = createElement("p");
   footer.classList.add("footer");
   footer.appendChild(footerDistance);
   footer.appendChild(footerTime);

   footerDistance.textContent = "384,400 KM";
   footerTime.textContent = "3 DAYS";
   main.appendChild(footer);
}
