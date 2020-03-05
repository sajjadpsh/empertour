<template>
  <div class="row">
    <div class="col-md-12" v-for="(post,index) in firstPost" :key="index">
      <PostArea :post="post"/>
    </div>
    <div class="col-md-4" v-for="(post,index) in posts" :key="index">
      <PostArea :post="post"/>
    </div>
  </div>
</template>
<script>

import PostArea from "~/components/PostArea.vue";
import axios from 'axios'
export default {
  components: { PostArea },
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
      firstPost:[]
    };
  },
  props: {
    posts: {
      type: Array
    },
    firstPost:{
      type: Array
    }
  }
};
</script>

