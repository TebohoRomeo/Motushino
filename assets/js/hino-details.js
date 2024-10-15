const contentDiv = document.getElementById('content');
const detailsDiv = document.getElementById('details');

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
          image: "./assets/img/product/HINO 700-2841 FC AMT 6X4.png",
        },
        {
          name: "Hino 300 714 SWB AT",
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

// Function to display truck models
function displayModels() {
    data.series.forEach(series => {
        // Create series container
        const seriesDiv = document.createElement('div');
        seriesDiv.classList.add('series');

        // Create series title
        const seriesTitle = document.createElement('h2');
        seriesTitle.textContent = series.name;
        seriesDiv.appendChild(seriesTitle);

        // Create model container
        const modelsDiv = document.createElement('div');
        modelsDiv.classList.add('models');

        series.models.forEach(model => {
            // Create individual model card
            const modelDiv = document.createElement('div');
            modelDiv.classList.add('model');

            // Add model image
            const modelImage = document.createElement('img');
            modelImage.src = model.image;
            modelDiv.appendChild(modelImage);

            // Add model name
            const modelName = document.createElement('p');
            modelName.textContent = model.name;
            modelDiv.appendChild(modelName);

            // Add model price
            const modelPrice = document.createElement('p');
            modelPrice.textContent = model.price;
            modelDiv.appendChild(modelPrice);

            // Add click event to model for displaying details
            modelDiv.onclick = () => displayDetails(model);
            modelsDiv.appendChild(modelDiv);
        });

        seriesDiv.appendChild(modelsDiv);
        contentDiv.appendChild(seriesDiv);
    });
}

// Function to display details of a clicked model
function displayDetails(model) {
    detailsDiv.innerHTML = `
        <span class="back-button" onclick="hideDetails()">← Back to Models</span>
        <h3>${model.name}</h3>
        <img src="${model.image}" alt="${model.name}" style="width: 150px; height: auto;">
        <p><strong>Price:</strong> ${model.price}</p>
        <p><strong>Description:</strong> ${model.description}</p>
    `;
    detailsDiv.style.display = 'block'; // Show details
    contentDiv.style.display = 'none'; // Hide models
}

// Function to hide details and show models again
function hideDetails() {
    detailsDiv.style.display = 'none'; // Hide details
    contentDiv.style.display = 'block'; // Show models again
}

// Initial call to display models
displayModels();


{/* <section class="products section-padding">
<div class="container">
    <div class="row">

        <div class="col-12">
            <h2 class="mb-5">Hino 200 Series</h2>
        </div>

        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/hino-model-150-main.png" class="img-fluid product-image"
                        alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <span class="product-alert me-auto">New Arrival</span>

                        <a href="#" class="bi-heart-fill product-icon"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 200 310</a>
                        </h5>

                        <p class="product-p">R409,780 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <h2 class="mb-5">Hino 300 Series</h2>
        </div>

        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/614-AT-SWB.jpg" class="img-fluid product-image" alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <span class="product-alert">Discounted Price</span>

                        <a href="#" class="bi-heart-fill product-icon ms-auto"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 300 614 SWB MT</a>
                        </h5>

                        <p class="product-p">R582,498</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-12">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/614-AT-SWB.jpg" class="img-fluid product-image" alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <a href="#" class="bi-heart-fill product-icon ms-auto"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 300 614 SWB AT</a>
                        </h5>

                        <p class="product-p">R606,096</p>
                    </div>

                    <!-- <small class="product-price text-muted ms-auto">R606,096</small> -->
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/614-AT-SWB.jpg" class="img-fluid product-image" alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <a href="#" class="bi-heart-fill product-icon ms-auto"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 300 614 LWB MT</a>
                        </h5>

                        <p class="product-p">R593,676</p>
                    </div>

                    <!-- <small class="product-price text-muted ms-auto">R593,676</small> -->
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/714-SWB.jpg" class="img-fluid product-image" alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <a href="#" class="bi-heart-fill product-icon ms-auto"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 300 714 SWB MT</a>
                        </h5>

                        <p class="product-p">R649,624</p>
                    </div>

                    <!-- <small class="product-price text-muted ms-auto">R649,624</small> -->
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/714-SWB.jpg" class="img-fluid product-image" alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <a href="#" class="bi-heart-fill product-icon ms-auto"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 300 714 SWB AT</a>
                        </h5>

                        <p class="product-p">R673,256</p>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/614-AT-SWB.jpg" class="img-fluid product-image" alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <a href="#" class="bi-heart-fill product-icon ms-auto"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 300 714 LWB MT</a>
                        </h5>

                        <p class="product-p">R659,146</p>
                    </div>

                </div>
            </div>
        </div> <!-- hino number 5 here-->
        <div class="col-lg-4 col-12">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/ak3_menu_thumb.jpg" class="img-fluid product-image"
                        alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <a href="#" class="bi-heart-fill product-icon ms-auto"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 300 816 SWB MT</a>
                        </h5>

                        <p class="product-p">R707,791</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/ak3_menu_thumb.jpg" class="img-fluid product-image"
                        alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <a href="#" class="bi-heart-fill product-icon ms-auto"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 300 816 SWB AT</a>
                        </h5>

                        <p class="product-p">715,841</p>
                    </div>

                    <!-- <small class="product-price text-muted ms-auto">715,841</small> -->
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/ba3_menu_thumb.jpg" class="img-fluid product-image"
                        alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <a href="#" class="bi-heart-fill product-icon ms-auto"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 300 916 LWB MT</a>
                        </h5>

                        <p class="product-p">R763,336</p>
                    </div>

                    <!-- <small class="product-price text-muted ms-auto">R763,336</small> -->
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/ba3_menu_thumb.jpg" class="img-fluid product-image"
                        alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <a href="#" class="bi-heart-fill product-icon ms-auto"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 300 916 LWB AT</a>
                        </h5>

                        <p class="product-p">R787,072</p>
                    </div>

                    <!-- <small class="product-price text-muted ms-auto">R787,072</small> -->
                </div>
            </div>
        </div>
        <div class="col-12">
            <h2 class="mb-5">Hino 500 Series</h2>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/hino-500/1018-fc.jpg" class="img-fluid product-image" alt="">
                </a>

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 500 1018 FC</a>
                        </h5>

                        <p class="product-p">R845,330 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/hino-500/1326-tipper.jpg" class="img-fluid product-image" alt="">
                </a>

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 500 1326 Tipper</a>
                        </h5>

                        <p class="product-p">R930,680 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/hino-500/1326.jpg" class="img-fluid product-image" alt="">
                </a>


                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 500 1326 FC</a>
                        </h5>

                        <p class="product-p">R911,820 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <!-- Pic here -->
                    <img src="./assets/img/hino-500/4x4.jpg" class="img-fluid product-image" alt="">
                </a>

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 500 1322 4X4 DWA FC</a>
                        </h5>

                        <p class="product-p">R1,158,030 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <!-- Pic here -->
                    <img src="./assets/img/hino-500/4x4.jpg" class="img-fluid product-image" alt="">
                </a>


                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 500 1322 4X4 SWA FC</a>
                        </h5>

                        <p class="product-p">R1,177,900 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/hino-500/1627lwb.jpg" class="img-fluid product-image" alt="">
                </a>

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 500 1627 4X2 TIP</a>
                        </h5>

                        <p class="product-p">R1,033,180 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <!-- pic hre -->
                <a href="#">
                    <img src="./assets/img/hino-500/1627lwb.jpg" class="img-fluid product-image" alt="">
                </a>

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 500 1627 MT FC LWB</a>
                        </h5>

                        <p class="product-p">R1,067,370 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/hino-500/1627lwb.jpg" class="img-fluid product-image" alt="">
                </a>

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 500 1627 AT FC LWB</a>
                        </h5>

                        <p class="product-p">R1,157,320 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/hino-500/1627lwb.jpg" class="img-fluid product-image" alt="">
                </a>

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 500 1627 MT FC SLWB</a>
                        </h5>

                        <p class="product-p">R1,085,170 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/hino-500/1627lwb.jpg" class="img-fluid product-image" alt="">
                </a>

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 500 1627 AT FC SLWB</a>
                        </h5>

                        <p class="product-p">R1,175,690 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="col-lg-4 col-12 mb-3">
                <div class="product-thumb">
                    <a href="#">
                        <img src="./assets/img/product/HINO 700-2841 FC AMT 6X4.png" class="img-fluid product-image" alt="">
                    </a>

                    <div class="product-info d-flex">
                        <div>
                            <h5 class="product-title mb-0">
                                <a href="#" class="product-title-link">Hino 500 2829 6X2 6MT FC LWB Stl</a>
                            </h5>

                            <p class="product-p">R1,314,390 Excl VAT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-12 mb-3">
                <div class="product-thumb">
                    <a href="#">
                        <img src="./assets/img/product/HINO 700-2841 FC AMT 6X4.png" class="img-fluid product-image" alt="">
                    </a>

                    <div class="product-info d-flex">
                        <div>
                            <h5 class="product-title mb-0">
                                <a href="#" class="product-title-link">Hino 500 2829 6X2 AT FC LWB Stl</a>
                            </h5>

                            <p class="product-p">R1,481,580 Excl VAT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-12 mb-3">
                <div class="product-thumb">
                    <a href="#">
                        <img src="./assets/img/product/HINO 700-2841 FC AMT 6X4.png" class="img-fluid product-image" alt="">
                    </a>

                    <div class="product-info d-flex">
                        <div>
                            <h5 class="product-title mb-0">
                                <a href="#" class="product-title-link">Hino 500 2829 6X2 9MT FC SLWB Air</a>
                            </h5>

                            <p class="product-p">R1,416,320 Excl VAT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-12 mb-3">
                <div class="product-thumb">
                    <a href="#">
                        <img src="./assets/img/product/HINO 700-2841 FC AMT 6X4.png" class="img-fluid product-image" alt="">
                    </a>

                    <div class="product-info d-flex">
                        <div>
                            <h5 class="product-title mb-0">
                                <a href="#" class="product-title-link">Hino 500 2829 6X2 AT FC SLWB Air</a>
                            </h5>

                            <p class="product-p">R1,583,530 Excl VAT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-12 mb-3">
                <div class="product-thumb">
                    <a href="#">
                        <img src="./assets/img/product/HINO 700-2841 FC AMT 6X4.png" class="img-fluid product-image" alt="">
                    </a>

                    <div class="product-info d-flex">
                        <div>
                            <h5 class="product-title mb-0">
                                <a href="#" class="product-title-link">Hino 500 2836 6x4 Tipper</a>
                            </h5>

                            <p class="product-p">R1,469,480 Excl VAT</p>
                        </div>
                    </div>
                </div>
            </div> -->
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/hino-500/2836-FC.jpg" class="img-fluid product-image" alt="">
                </a>

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 500 2836 6x4 FC</a>
                        </h5>

                        <p class="product-p">R1,504,380 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <h2 class="mb-5">Order Models Only - Hino 500 </h2>
        </div>

        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/hino-500/2036-mix-tip.jpg" class="img-fluid product-image"
                        alt="">
                </a>

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 500 2836 6x4 Mixer</a>
                        </h5>

                        <p class="product-p">R1,524,450 Excl VAT</p>
                    </div>
                </div>


            </div>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/hino-500/2036-mix-tip.jpg" class="img-fluid product-image"
                        alt="">
                </a>

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 500 1627 CC MT *</a>
                        </h5>

                        <p class="product-p">R1,474,810 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/hino-500/crew-cab-1627FC.jpg" class="img-fluid product-image"
                        alt="">
                </a>

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 500 1627 CC AT *</a>
                        </h5>

                        <p class="product-p">R1,564,150 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <h2 class="mb-5">Hino 700 Series</h2>
        </div>

        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/HINO 700-2841 FC AMT 6X4.png"
                        class="img-fluid product-image" alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <span class="product-alert me-auto">New Arrival</span>

                        <a href="#" class="bi-heart-fill product-icon"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 700 2841 Tip SSC (AMT)</a>
                        </h5>

                        <p class="product-p">R1,674,720 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/HINO 700-2841 FC AMT 6X4.png"
                        class="img-fluid product-image" alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <span class="product-alert me-auto">New Arrival</span>

                        <a href="#" class="bi-heart-fill product-icon"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 700 2841 FC SSC (AMT)</a>
                        </h5>

                        <p class="product-p">R1,584,740 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/HINO 700-2841 FC AMT 6X4.png"
                        class="img-fluid product-image" alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <span class="product-alert me-auto">New Arrival</span>

                        <a href="#" class="bi-heart-fill product-icon"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 700 2841 TT SSC 3.9 Stl (AMT)</a>
                        </h5>

                        <p class="product-p">R1,643,720 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-12 mb-3">
            <div class="product-thumb">
                <a href="#">
                    <img src="./assets/img/product/HINO 700-2841 FC AMT 6X4.png"
                        class="img-fluid product-image" alt="">
                </a>

                <!-- <div class="product-top d-flex">
                        <span class="product-alert me-auto">New Arrival</span>

                        <a href="#" class="bi-heart-fill product-icon"></a>
                    </div> -->

                <div class="product-info d-flex">
                    <div>
                        <h5 class="product-title mb-0">
                            <a href="#" class="product-title-link">Hino 700 2845 TT SSC 3.9 Stl (AMT)</a>
                        </h5>

                        <p class="product-p">R2,060,559 Excl VAT</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section> */}