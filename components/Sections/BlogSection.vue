<template>
  <div class="row">
    <div class="col-md-12" v-for="post in firstPost" :key="post.id">
      <PostCard :post="post" />
    </div>
    <div class="col-md-4" v-for="post in posts" :key="post.id">
      <PostCard :post="post" />
    </div>
  </div>
</template>
<script>
import PostCard from "~/components/PostCard.vue";
import axios from "axios";
export default {
  components: { PostCard },
  mounted: function() {
    return axios
      .get("http://localhost:3000/test.json")
      .then(res => {
        this.firstPost = res.data.slice(0, 1);
        this.posts = res.data.slice(1, 4);
      })
      .catch(e => {
        console.log(e);
      });
  },
  data: function() {
    return {
      posts: [],
      firstPost: []
    };
  }
};
</script>

