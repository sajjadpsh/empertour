<template>
  <footer>
    <footer class="footer-area ft-aV2 bg-dark-blue">
      <div class="footer-widget">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="fw-left">
                <div class="footer-logo">
                  <img src="~/assets/img/common/logo-4.png" alt />
                </div>
                <div class="footer-text">
                  <p>I’m a location independent blogger, digital influencer, small group tour organizer and world traveler with a serious passion for the sun, the sea and adventure.</p>
                  <p>Eight years and 60-something countries later and I’m still on the road.</p>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-4">
                  <div class="fw-single footer-contact">
                    <h4>Contact Me</h4>
                    <ul class="fws">
                      <li>
                        <span>Add:</span> 221B Baker St
                        <br />London, NW1 6XE
                        <br />UK
                      </li>
                      <li>
                        <span>T:</span> +010 222 9999
                      </li>
                      <li>
                        <span>E:</span> info@footsteps.com
                      </li>
                      <li>
                        <span>W:</span> www.footsteps.com
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="fw-single footer-links">
                    <h4>Account</h4>
                    <ul class="fws">
                      <li>
                        <a href="#">My Lists</a>
                      </li>
                      <li>
                        <a href="#">My Requests</a>
                      </li>
                      <li>
                        <a href="#">My Credits</a>
                      </li>
                      <li>
                        <a href="#">My Info</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="fw-single">
                    <h4>Travel</h4>
                    <ul class="fws footer-links">
                      <li>
                        <a href="#">Travel</a>
                      </li>
                      <li>
                        <a href="#">Why Travel</a>
                      </li>
                      <li>
                        <a href="#">Become a Traveler</a>
                      </li>
                      <li>
                        <a href="#">How Its Works</a>
                      </li>
                      <li>
                        <a href="#">Traveling FAQs</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="fc-left">
                <ul class="fc-social">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="fc-right">
                <ul>
                  <li>
                    <p>© 2018 Footgear. All rights reserved</p>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Site Map</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </footer>
</template>
<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.footer {
	&__info {
		background-color: $background-secondary;
		padding: 1.5em 0;
  }
  
  &__info-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;

    @media (min-width: $screen-sm){
      flex-direction: row;
    }
  }

	&__copyright {
		text-align: center;
		@media (min-width: $screen-sm) {
			text-align: inherit;
		}
	}

	&__top-page {
		color: $text-negative;
		display: block;
		text-align: center;
		line-height: 1;
		-webkit-transition: 1s;
		-moz-transition: 1s;
    transition: 1s;
    
		@media (min-width: $screen-sm){
			text-align: right;
		}
	}
}
</style>

