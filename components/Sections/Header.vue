<template>
  <header id="header" class="header-area headerV2 bg-dark-blue">
    <nav class="navbar navbar-expand-lg footstep-nav footstep-nav-v2">
      <div class="container-fluid">
        <nuxt-link :to="localePath('index')" class="navbar-brand" >
          <img src="/img/common/empertour.svg" alt class="logo empertourLogo" />
        </nuxt-link>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto "><li class="nav-item "></li><li class=""></li></ul>
          <ul class="navbar-nav goleft">
            <li class="nav-item active dropdown ">
              <nuxt-link :to="localePath('index')" class="nav-link" id="navbarDropdown">
                خانه
                <span class="sr-only">(current)</span>
              </nuxt-link>
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
 
ul{
  text-align: left;
  direction: ltr;
}

</style>


