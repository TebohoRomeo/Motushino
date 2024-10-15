const data = {
  series: [
    {
      name: "Hino 200 Series",
      models: [
        {
          name: "Hino 200 310",
          price: "R409,780 Excl VAT",
          image: "./assets/img/product/hino-model-150-main.png",
        },
      ],
    },
    {
      name: "Hino 300 Series",
      models: [
        {
          name: "Hino 300 614 SWB MT",
          price: "R582,498 Excl VAT",
          image: "./assets/img/product/614-AT-SWB.jpg",
        },
        {
          name: "Hino 300 614 SWB AT",
          price: "R606,096 Excl VAT",
          image: "./assets/img/product/614-AT-SWB.jpg",
        },
        {
          name: "Hino 300 614 LWB MT",
          price: "R593,676 Excl VAT",
          image: "./assets/img/product/614-AT-SWB.jpg",
        },
        {
          name: "Hino 300 614 LWB MT",
          price: "R649,624 Excl VAT",
          image: "./assets/img/product/714-SWB.jpg",
        },
      ],
    },
    {
      name: "Hino 700 Series",
      models: [
        {
          name: "Hino 700 2841 Tip SSC (AMT)",
          price: "R1,674,720 Excl VAT",
          image: "./assets/img/product/HINO 700-2841 FC AMT 6X4.png",
        },
        {
          name: "Hino 700 2841 FC SSC (AMT)",
          price: "R1,584,740 Excl VAT",
          image: "./assets/img/product/HINO 700-2841 FC AMT 6X4.png",
        },
        {
          name: "Hino 700 2841 TT SSC 3.9 Stl (AMT)",
          price: "R1,643,720 Excl VAT",
          image: "./assets/img/product/HINO 700-2841 FC AMT 6X4.png",
        },
        {
          name: "Hino 700 2841 TT SSC 3.9 Stl (AMT)",
          price: "R2,060,559 Excl VAT",
          image: "./assets/img/product/HINO 700-2841 FC AMT 6X4.png",
        },
      ],
    },
  ],
};

// Rendering the HTML from JSON data
const contentDiv = document.getElementById("content");

data.series.forEach((series) => {
  // Add series title
  const seriesTitleDiv = document.createElement("div");
  seriesTitleDiv.classList.add("col-12");
  seriesTitleDiv.innerHTML = `<h2 class="mb-5">${series.name}</h2>`;
  contentDiv.appendChild(seriesTitleDiv);

  // Add models
  series.models.forEach((model) => {
    const modelDiv = document.createElement("div");
    modelDiv.classList.add("col-lg-4", "col-12", "mb-3");

    modelDiv.innerHTML = `
                    <div class="product-thumb">
                        <a href="#">
                            <img src="${model.image}" class="img-fluid product-image" alt="${model.name}">
                        </a>
                        <div class="product-info d-flex">
                            <div>
                                <h5 class="product-title mb-0">
                                    <a href="#" class="product-title-link">${model.name}</a>
                                </h5>
                                <p class="product-p">${model.price}</p>
                            </div>
                        </div>
                    </div>
                `;

    contentDiv.appendChild(modelDiv);
  });
});




// <section class="products section-padding">
// <div class="container">
//     <div id="content" class="row">
//         <!-- Content will be dynamically inserted here -->
//     </div>
// <!-- REtuen the html here -->
// </div>
// </section>







