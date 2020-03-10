<template>
  <div>
    <ul>
      <li v-for="post in posts">
        <p>{{ post.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted: function() {
    axios.get("http://blogapi.empertour.ir/post?skip=0&limit=-1")
      .then(res => (
        this.posts=res.data
      ));
  },
  
  data: function() {
    return {
      posts: [],
      contents: []
    };
  },
  // props: {
  //   posts: {
  //     type: Array
  //   }
  // }

};
</script>