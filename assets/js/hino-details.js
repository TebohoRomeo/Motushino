    // Parse the index from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const index = parseInt(urlParams.get('index'));

    let trucks = [
      {
          name: "Hino 200",
          description: "RELIABLE AND TOUGH, PERFECT FOR MEDIUM AND LONG HAUL DISTANCES",
          specs: [
            { Engine_capacity: '2989', Transmission: 'Manual', Emission_Level: 'Euro 2', Application: '' , Front_Axle_Type: '', Rear_Axle_Type: '' }
          ],
          image: "truck_b.jpg"
        },
        {
          name: "Hino 300 614 LWB",
          description: "RELIABLE AND SAFE, THERE IS NO QUESTION THAT THE HINO 300 WILL GET YOUR GOODS SAFELY TO THEIR DESTINATION",
          specs: [
            { Engine_capacity: '2989', Transmission: 'MEchanical', Emission_Level: 'Euro 3', Application: 'Freight Carrier' , Front_Axle_Type: 'Reversed Elliot I-Beam', Rear_Axle_Type: 'Single Reducion Hypoid' }
          ],
          image: "truck_b.jpg"
        },
      {
        name: "Truck B",
        description: "Description of Truck A",
        image: "truck_a.jpg"
      },
      // Add more trucks as needed
    ];

    let truckDetailsContainer = document.getElementById("truckDetails");
    let truck = trucks[index];

    let nameElement = document.createElement("h2");
    nameElement.textContent = truck.name;

    let descriptionElement = document.createElement("p");
    descriptionElement.textContent = truck.description;

    let specsElement = document.createElement("ul");
    if (truck.specs) {
      truck.specs.forEach(spec => {
        let specItem = document.createElement("li");
        specItem.textContent = `${Object.keys(spec)[0]}: ${Object.values(spec)[0]}`;
        specsElement.appendChild(specItem);
      });
    }

    let imageElement = document.createElement("img");
    imageElement.src = `images/${truck.image}`;

    truckDetailsContainer.appendChild(nameElement);
    truckDetailsContainer.appendChild(descriptionElement);
    truckDetailsContainer.appendChild(specsElement);
    truckDetailsContainer.appendChild(imageElement);