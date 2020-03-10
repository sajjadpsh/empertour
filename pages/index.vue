<template>
  <div>
    
    <section id="blog-post3" class="blog-postV3 section-padding ">
      <div class="container">
        <BlogSection/>
      </div>
    </section>
  </div>
</template>



<style scoped>

.section-padding{
  background-image: url('/img/common/car_pattern.svg');
  background-color: #8450BE;
}
.blog-title{
  color:#6a1b9a;
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