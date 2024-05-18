'use strict';

// Add shopping cart html to the page
document.write(
  `    <aside
  class="offcanvas offcanvas-end blue-bg px-4 py-5"
  tabindex="-1"
  id="shoppingCart"
  aria-labelledby="shoppingCartLabel"
>
  <div class="offcanvas-header p-0 pb-4 justify-content-between">
    <h5
      class="offcanvas-title ibm-plex-mono-semibold"
      id="shoppingCartLabel"
    >
      Added to Shopping Bag
    </h5>
    <button
      type="button"
      class="btn fs-5 text-light"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    >
      <i class="bi bi-x-lg"></i>
    </button>
  </div>
  <hr />
  <div class="offcanvas-body p-0">
    <div class="row pt-5 pb-4">
      <div class="col-4">
        <img
          class="img-fluid w-100"
          src="img/beige_ugg_sneakers.jpg"
          alt="Ugg sneakers"
        />
      </div>
      <div class="col-7">
        <h6 class="pb-3 m-0">Ugg Sneakers</h6>
        <p class="pb-3 m-0">11,398 kr</p>
        <p class="pb-3 m-0">Style: WDD4455 66765-1</p>
        <p class="pb-3 m-0">Quantity: 1</p>
      </div>
    </div>
    <hr />
    <div class="row pt-5 pb-4">
      <div class="col-4">
        <img
          class="img-fluid w-100"
          src="img/beige_wool_sweater.jpg"
          alt="Ugg sneakers"
        />
      </div>
      <div class="col-8">
        <h6 class="pb-3 m-0">Wool Sweater</h6>
        <p class="pb-3 m-0">40,112 kr</p>
        <p class="pb-3 m-0">Style: 67JGDKIE-WW667095</p>
        <p class="pb-3 m-0">Quantity: 1</p>
      </div>
    </div>
  </div>
  <button class="btn btn-primary fs-4 btn-block mt-5 w-100">
    checkout
  </button>
  <button class="btn fs-4 btn-block mt-4 w-100 text-light">
    view shopping cart
  </button>
</aside>`
);
