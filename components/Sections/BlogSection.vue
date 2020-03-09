<template>
  <div class="row">
    <div class="col-md-12" v-for="post in firstpost" :key="post.id">
      <PostCard :post="post" />
    </div>
    <div class="col-md-4" v-for="post in posts" :key="post.id">
      <PostCard :post="post" />
    </div>
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
        .get("http://blogapi.empertour.ir/post?skip=0&limit=1", {
          headers: { "Access-Control-Allow-Origin": "" }
        })
        .then(res => {
          this.firstpost = res.data;
        })
        .catch(e => {
          // console.log(e);
        }),
      this.$axios
        // .get("http://localhost:3000/test.json",{
        .get("http://blogapi.empertour.ir/post?skip=1&limit=-1", {
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

