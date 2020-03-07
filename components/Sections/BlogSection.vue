<template>
  <div class="row">
    <!-- <div class="col-md-12" v-for="post in firstpost" :key="post.id">
      <PostCard :post="post" />
    </div>-->
    <div class="col-md-4" v-for="post in posts" :key="post.id">
      <PostCard :post="post" />
    </div>
  </div>
</template>
<script>
import PostCard from "~/components/PostCard.vue";
import axios from "@nuxtjs/axios";
export default {
  components: { PostCard },

  mounted: function() {
    return (
      this.$axios
        // .get("http://localhost:3000/test.json")
        .get("http://blogapi.empertour.ir/post?skip=0&limit=-1")
        .then(res => {
          // this.firstpost = res.data.slice(0, 1);
          this.posts = res.data;
        })
        .catch(e => {
          console.log(e);
        })
    );
  },
  data: function() {
    return {
      posts: []
    };
  }
  // async asyncData() {
  //   return await axios
  //     .get("http://blogapi.empertour.ir/post?skip=0&limit=-1")
  //     .then(res => {
  //       return { posts: res.data };
  //     })
  //     .catch((e) => {
  //         console.log(e);
  //     })
  // },
  
  // async asyncData() {
  //   const authors = await axios
  //     .get("http://blogapi.empertour.ir/post?skip=0&limit=-1")
  //     .then(res => res.data);

  //   return { posts: res }.catch(e => {
  //     error({ statusCode: 404, message: "Post not found" });
  //   });
  // },
  
  // props: {
  //   post: {
  //     type: Object
  //   },
  //   firstPost: {
  //     type: Array
  //   }
  // }
};
</script>

