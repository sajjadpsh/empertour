<template>
  <div>
    <section id="hero" class="hero-area hero-first hero-v2">
      <div class="hero1-slider">
        <div class="item">
          <div class="hero-slider">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="hero-text">
                    <div class="ht-counter-area">
                      <p>
                        یه عددی از
                        <span class="counter-up">70</span> عدد از
                        <span class="counter-up">1036</span> شهر ها چرت و پرنت
                      </p>
                    </div>
                    <div class="ht-title">
                      <h2>بیان از امپراتور استفاده کنید به خدا از همه بهتره</h2>
                    </div>
                    <div class="ht-rmore-btn">
                      <a class="btn-style-b">مطالب بیشتر</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-maps">
        <div id="gmap" class="gmap-wrapper"></div>
      </div>
    </section>
    <section id="blog-post3" class="blog-postV3 section-padding bg-dark-blue">
      <div class="container">
        <BlogSection/>
      </div>
    </section>
  </div>
</template>



<style scoped>
.city {
  color: aqua;
}
</style>

<script>
import BlogSection from "~/components/Sections/BlogSection";
// import EmperPost from "~/components/EmperPost";
//   import blogsEn from '/contents/en/blogsEn.js'
//   import blogsEs from '/contents/es/blogsEs.js'
import axios from "axios";

export default {
  props: {
    posts: {
      type: Array
    }
  },
  components: { BlogSection }

  // transition: {
  //   name: 'slide-fade'
  // },

  // head () {
  //   return {
  //     title: this.$t('indexPageHead.title'),
  //     htmlAttrs: {
  //       lang: this.$i18n.locale,
  //     },
  //     script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },],
  //     meta: [
  //       { name: "author", content: "Marina Aisa" },
  //       { name: "description", property: "og:description", content: this.$t('indexPageHead.description'), hid: "description" },
  //       { property: "og:title", content: this.$t('indexPageHead.title') },
  //       { property: "og:image", content: this.ogImage },
  //       { name: "twitter:description", content: this.$t('indexPageHead.description') },
  //       { name: "twitter:image", content: this.ogImage }
  //     ]
  //   };
  // },

  // computed: {
  //   ogImage: function () {
  //     return;
  //   }
  // }
};
</script>