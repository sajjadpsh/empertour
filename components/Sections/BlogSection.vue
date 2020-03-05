<template>
  <div class="row">
    <FullPost />
    <OneThirdPost/>
  </div>
</template>
<script>
// import postCard from "~/components/postCard.vue";
// import LangSwitcher from "~/components/LangSwitcher";
import FullPost from "~/components/FullPost.vue";
import OneThirdPost from "~/components/OneThirdPost.vue";

export default {
  components: { FullPost, OneThirdPost },
  // data: function() {
  //   return {
  //     posts: []
  //   };
  // },
  // props: {
  //   posts: {
  //     type: Array
  //   }
  // }
};
</script>

