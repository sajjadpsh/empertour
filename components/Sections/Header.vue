<template>
  <header id="header" class="header-area headerV2 bg-dark-blue">
    <nav class="navbar navbar-expand-lg footstep-nav footstep-nav-v2">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/img/common/empertour.svg" alt class="logo empertourLogo" />
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
          <ul class="navbar-nav ml-auto liCont">
            <li class="nav-item active dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown">
                خانه
                <span class="sr-only">(current)</span>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="index.html">زیر شاخه</a>
                <a class="dropdown-item" href="index-2.html">تست</a>
                <a class="dropdown-item" href="index-3.html">مرگ</a>
                <a class="dropdown-item" href="index-4.html">میر</a>
                <a class="dropdown-item" href="index-5.html">ای وای</a>
                <a class="dropdown-item" href="index-6.html">و غیره</a>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="about-me.html">درباره کرونا</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="destination.html">هدف</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="travel-tips.html">آموزش ها</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="tour-planning.html">تور</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="shop.html">فروشگاه</a>
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
              >صفحات</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                <a class="dropdown-item" href="gear-i-use.html">محصولات</a>
                <a class="dropdown-item" href="product-details.html">ماسک</a>
                <a class="dropdown-item" href="tips-overview.html">عینک</a>
                <a class="dropdown-item" href="destination-overview.html">گان</a>
                <a class="dropdown-item" href="cart.html">شان</a>
                <a class="dropdown-item" href="checkout.html">چیزای دیگه</a>
                <a class="dropdown-item" href="404.html">404</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">ارتباط با ما</a>
            </li>
            <li class="nav-item orderBtn">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <a class="nav-link smoothscroll place-order-btn" href="#">سفارشو اینا</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.empertourLogo {
  height: 50px;
}

.liCont {
  margin-right: 30%;
}

.orderBtn {
  position: absolute;
  float: right;
}
</style>
