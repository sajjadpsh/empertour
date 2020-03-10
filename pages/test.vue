<template>
  <div>
    <ul>
      <li v-for="(content,index) in contents" :key="index">
        <p>{{ content.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted: function() {
    axios.get("http://localhost:3000/test.json")
      .then(res => (
        this.contents=res.data
      ));
      for (let index = 0; index < contents.length; index++) {
          contents[index] = unescape(contents[index].content)
      }
  },

  data: function() {
    return {
      posts: [],
      contents: []
    };
  },
  props: {
    posts: {
      type: Array
    }
  }

};
</script>