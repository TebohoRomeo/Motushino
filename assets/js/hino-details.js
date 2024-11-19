const truckData = {
    "trucks": [
      {
        "id": 1,
        "image": "./assets/img/product/hino-300.png",
        "model": "HINO 300 614 SWB",
        "details": {
          "Engine Capacity": "4009",
          "Transmission": "Mechanical",
          "Emission Level": "Euro 3",
          "Application": "Freight Carrier",
          "Rear Axle Type": "Single Reducion Hypoid"
        }
      },
      {
        "id": 2,
        "image": "./assets/img/product/hino-500.png",
        "model": "HINO 500 824 SWB",
        "details": {
          "Engine Capacity": "7000",
          "Transmission": "Automatic",
          "Emission Level": "Euro 5",
          "Application": "Long-haul Carrier",
          "Rear Axle Type": "Double Reduction Hypoid"
        }
      }
    ]
  };
  
  // Function to render truck details dynamically
  function renderTruckDetails() {
    const truckContainer = document.getElementById("truck-container");
  
    truckData.trucks.forEach((truck) => {
      const truckElement = document.createElement("div");
      truckElement.classList.add("row", "justify-content-between");
  
      truckElement.innerHTML = `
        <div class="col-md-5 col-lg-4">
          <div class="property-price d-flex justify-content-center foo">
            <div class="card-header-c d-flex">
              <img src="${truck.image}" alt="${truck.model}">
            </div>
          </div>
        </div>
  
        <div class="col-lg-7 col-12 section-md-t3">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box-d">
                <h3 class="title-d">${truck.model} - DETAILS</h3>
              </div>
            </div>
          </div>
  
          <div class="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
            <div class="summary-list" id="truckDetails-${truck.id}">
              <ul class="list">
                ${Object.entries(truck.details).map(([key, value]) => `
                  <li class="d-flex justify-content-between">
                    <strong>${key}</strong>
                    <p class="float-end">${value}</p>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
  
      truckContainer.appendChild(truckElement);
    });
  }
  
  // Call the function to render trucks when the page loads
  document.addEventListener("DOMContentLoaded", renderTruckDetails);