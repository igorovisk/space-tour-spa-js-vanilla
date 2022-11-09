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
      a.textContent = "Moon";
      a.addEventListener("click", () => {});
      const sliderSpan = createElement("span");
      sliderDiv.appendChild(a);
      sliderDiv.appendChild(sliderSpan);
      slider.appendChild(sliderDiv);
   }

   section.insertBefore(slider, title);

   title.classList.remove("heading__title");
   title.classList.add("section__title");

   exploreButton.classList.add("hide");

   const footer = createElement("footer");
   const footerDistance = createElement("p");
   const footerTime = createElement("p");
   footer.classList.add("footer");
   footer.appendChild(footerDistance);
   footer.appendChild(footerTime);

   footerDistance.textContent = "384,400 KM";
   footerTime.textContent = "3 DAYS";
   console.log(main, "main");
   main.appendChild(footer);
}
