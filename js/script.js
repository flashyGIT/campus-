document.addEventListener("DOMContentLoaded", () => {

  // Toggle Resources
  const resourceBtn = document.getElementById("resourceBtn");
  const resourcesList = document.getElementById("resourcesList");

  if (resourceBtn) {
    resourceBtn.addEventListener("click", () => {
      resourcesList.classList.toggle("visually-hidden");
    });
  }

  // Dining Menu Loader
  const loadMenuBtn = document.getElementById("loadMenuBtn");
  if (loadMenuBtn) {
    loadMenuBtn.addEventListener("click", loadMenu);
  }

  // Events Loader
  const loadEventsBtn = document.getElementById("loadEventsBtn");
  if (loadEventsBtn) {
    loadEventsBtn.addEventListener("click", loadEvents);
  }
});


// Demo Menu API (sample dataset)
function loadMenu() {
  const container = document.getElementById("menuContainer");

  fetch("https://api.sampleapis.com/coffee/hot")
    .then(r => r.json())
    .then(menu => {
      container.innerHTML = "";

      menu.slice(0, 6).forEach(item => {
        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
          <div class="card h-100">
            <img src="${item.image}" alt="${item.title}" class="card-img-top">
            <div class="card-body">
              <h5>${item.title}</h5>
              <p>${item.description || "A delicious campus drink!"}</p>
            </div>
          </div>
        `;
        container.appendChild(col);
      });
    });
}


// Demo Campus Events API (sample dataset)
function loadEvents() {
  const container = document.getElementById("eventsContainer");

  fetch("https://api.sampleapis.com/futurama/episodes")
    .then(r => r.json())
    .then(events => {
      container.innerHTML = "";

      events.slice(0, 6).forEach(event => {

        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `
          <div class="card h-100">
            <img src="${event?.image || 'images/campus.jpg'}" 
                 alt="${event.title}" class="card-img-top">
            <div class="card-body">
              <h5>${event.title}</h5>
              <p>Date: ${event.originalAirDate}</p>
            </div>
          </div>
        `;

        container.appendChild(col);
      });
    });
}


*/

