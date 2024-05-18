'use strict';

// Add footer html to the page
document.write(
  `<footer class="pb-5">
  <div class="container-lg px-4 px-lg-5 pt-5">
    <p class="ibm-plex-mono-medium py-5">made in sweden ; since 1925</p>

    <!-- Help and information section -->
    <section class="ibm-plex-mono-medium row pb-5">
      <div class="col-6 col-md-4">
        <h2 class="fs-2">Help</h2>
        <ul class="fs-5 fs-lg-6">
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">My Order</a></li>
          <li><a href="#">FAQ’s</a></li>
          <li><a href="#">Email Unsubscribe</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
      <div class="col-6 col-md-4">
        <h2 class="fs-2">The Company</h2>
        <ul class="fs-5 fs-lg-6">
          <li><a href="#">About Bjell</a></li>
          <li><a href="#">Code of Ethics</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Legal</a></li>
          <li><a href="#">Privacy and Cookie Policy</a></li>
        </ul>
      </div>
    </section>

    <hr />

    <!-- News letter section -->
    <section class="ibm-plex-mono-medium py-5">
      <h2 class="fs-2">Sign up for Bjell Updates</h2>

      <!-- Longer text for desktop -->
      <p class="fs-5 fs-lg-6 pt-2 col-10 d-none d-md-block">
        By entering your email address below, you consent to receiving our
        newsletter with access to our latest collections, events and
        initiatives. More details on this are provided in our
        <a href="#">privacy policy</a>
      </p>

      <!-- Shorter text for mobile -->
      <p class="fs-5 fs-lg-6 pt-2 d-block d-md-none">
        By entering your email address, you consent to receiving our
        newsletter.
      </p>

      <form id="emailSubscriptionForm" class="row pt-4">
        <div class="col-md-8">
          <label for="email" class="form-label fs-4 mb-3 invalid"
            >Email</label
          >
          <input
            type="email"
            class="form-control fs-5"
            id="email"
            aria-describedby="emailHelp"
            placeholder="example@email.com"
            required
          />
        </div>
        <div class="col-md-4 align-self-end pt-4 pt-md-0">
          <button class="btn btn-primary w-100 fs-4 btn-block">
            sign up
          </button>
        </div>
      </form>
    </section>

    <!-- Select location -->
    <section class="py-5">
      <h2 class="fs-2">Location</h2>
      <select class="form-select fs-4" aria-label="Location selector">
        <option class="ibm-plex-mono-medium" value="Sweden" selected>
          Sweden
        </option>
        <option class="ibm-plex-mono-medium" value="Finland">
          Finland
        </option>
        <option class="ibm-plex-mono-medium" value="New Zealand">
          New Zealand
        </option>
      </select>
    </section>

    <!-- Sheep images -->
    <div class="py-5">
      <div class="row justify-content-center sheep-container my-5">
        <img
          class="col-3 col-md-2 col-lg-1 me-5 align-self-start"
          src="img/sheep.svg"
          alt="Sheep graphic element"
          id="sheepImg1"
        />
        <img
          class="col-3 col-sm-3 col-md-2 col-lg-1 ms-5 align-self-end"
          src="img/sheep.svg"
          alt="Sheep graphic element"
          id="sheepImg2"
        />
      </div>
    </div>

    <!-- Social media and link to landing page -->
    <section class="row align-items-center py-5">
      <div class="col-2 col-md-1">
        <a href="https://www.instagram.com/" target="_blank">
          <img
            class="img-fluid"
            src="img/Instagram.svg"
            alt="Instagram logo"
          />
        </a>
      </div>
      <div class="col-2 col-md-1">
        <a href="https://www.facebook.com/" target="_blank">
          <img
            class="img-fluid"
            src="img/Facebook.svg"
            alt="Instagram logo"
          />
        </a>
      </div>
      <div class="col text-end">
        <a
          class="navbar-brand gupter-bold order-2 order-lg-1"
          id="bjellLogo"
          href="index.html"
          >Bjell</a
        >
      </div>
    </section>
  </div>
</footer>`
);
