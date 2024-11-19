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
          name: "Hino 300 714 LWB MT",
          price: "R649,624 Excl VAT",
          image: "./assets/img/product/714-SWB.jpg",
        },
        {
          name: "Hino 300 714 SWB AT",
          price: "R673,256 Excl VAT",
          image: "./assets/img/product/714-SWB.jpg",
        },
        {
          name: "Hino 300 714 LWB MT",
          price: "R659,146 Excl VAT",
          image: "./assets/img/product/614-AT-SWB.jpg",
        },
        {
          name: "Hino 300 816 SWB MT",
          price: "R707,791 Excl VAT",
          image: "./assets/img/product/ak3_menu_thumb.jpg",
        },
        {
          name: "Hino 300 816 SWB AT",
          price: "R715,841 Excl VAT",
          image: "./assets/img/product/ak3_menu_thumb.jpg",
        },
        {
          name: "Hino 300 916 LWB MT",
          price: "R763,336 Excl VAT",
          image: "./assets/img/product/ba3_menu_thumb.jpg",
        },
        {
          name: "Hino 300 916 LWB AT",
          price: "R787,072 Excl VAT",
          image: "./assets/img/product/ba3_menu_thumb.jpg",
        },
      ],
    },
    {
      name: "Order Models Only - Hino 500",
      models: [
        {
          name: "Hino 500 2836 6x4 Mixer",
          price: "R1,524,450 Excl VAT",
          image: "./assets/img/hino-500/2036-mix-tip.jpg",
        },
        {
          name: "Hino 500 1627 CC MT *",
          price: "R1,474,810 Excl VAT",
          image: "./assets/img/hino-500/2036-mix-tip.jpg",
        },
        {
          name: "Hino 500 1627 CC AT *",
          price: "R1,564,150 Excl VAT",
          image: "./assets/img/hino-500/crew-cab-1627FC.jpg",
        },
      ],
    },
    {
      name: "Hino 700 Series",
      models: [
        {
          name: "Hino 700 2841 Tip SSC (AMT)",
          price: "R1,674,720 Excl VAT",
          image: "./assets/img/Featured/Hino_700.png",
        },
        {
          name: "Hino 700 2841 FC SSC (AMT)",
          price: "R1,584,740 Excl VAT",
          image: "./assets/img/Featured/Hino_700.png",
        },
        {
          name: "Hino 700 2841 TT SSC 3.9 Stl (AMT)",
          price: "R1,643,720 Excl VAT",
          image: "./assets/img/Featured/Hino_700.png",
        },
        {
          name: "Hino 700 2841 TT SSC 3.9 Stl (AMT)",
          price: "R2,060,559 Excl VAT",
          image: "./assets/img/Featured/Hino_700.png",
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
    // modelDiv.classList.add("col-12", "mb-3", "d-flex", "justify-content-center");

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
