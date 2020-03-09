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
      <div class="row">
        <div class="col-md-4" v-for="post in posts" :key="post.authorId">
          <PostCard :post="post" />
        </div>
      </div>
    </div>
  </section>
</div>
  
</template>

<script>
import PostCard from "~/components/PostCard.vue";
import axios from "@nuxtjs/axios";
// import axios from "axios";

export default {
  components: { PostCard },

  mounted: function() {
    return (
      this.$axios
        // .get("http://localhost:3000/test.json",{
        .get("http://blogapi.empertour.ir/post?skip=0&limit=-1", {
          headers: { "Access-Control-Allow-Origin": "" }
        })
        .then(res => {
          this.posts = res.data;
        })
        .catch(e => {
          // console.log(e);
        })
    );
  },

  data: function() {
    return {
      posts: [],
      firstpost: []
    };
  },
  props: {
    post: {
      type: Object
    },
    firstPost: {
      type: Array
    }
  }
};
</script>