<template>
    <header id="header" class="header-area headerV2 bg-dark-blue">
      <nav class="navbar navbar-expand-lg footstep-nav footstep-nav-v2">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="~/assets/img/common/logo-4.png" alt class="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                  <span class="sr-only">(current)</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="index.html">Home V1</a>
                  <a class="dropdown-item" href="index-2.html">Home V2</a>
                  <a class="dropdown-item" href="index-3.html">Home V3</a>
                  <a class="dropdown-item" href="index-4.html">Home V4</a>
                  <a class="dropdown-item" href="index-5.html">Home V5</a>
                  <a class="dropdown-item" href="index-6.html">Home V6</a>
                </div>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="about-me.html">About</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="destination.html">Destination</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="travel-tips.html">Tips</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="tour-planning.html">Tour</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="shop.html">Shop</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Pages</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                  <a class="dropdown-item" href="gear-i-use.html">Product</a>
                  <a class="dropdown-item" href="product-details.html">Product Details</a>
                  <a class="dropdown-item" href="tips-overview.html">Tips Overview</a>
                  <a class="dropdown-item" href="destination-overview.html">Destination Overview</a>
                  <a class="dropdown-item" href="cart.html">Cart</a>
                  <a class="dropdown-item" href="checkout.html">Checkout</a>
                  <a class="dropdown-item" href="404.html">404</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
              <li class="nav-item">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <a class="nav-link smoothscroll place-order-btn" href="#">Place Oreder</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
</template>