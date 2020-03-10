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
          aria-label="Toggle navigation">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto liCont">
            <li class="nav-item active dropdown">
              <a class="nav-link" href="#" id="navbarDropdown">
                خانه
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="">
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
  background-color: #4a148c;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.nav-item:hover{
  color: #ff9800 !important;
}
.nav-link:hover{
  color:#ff9800 !important;
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


