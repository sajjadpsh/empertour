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

  // async asyncData () {
  //   const dataobject = await this.$axios.$get('localhost:3000/test.json')
  //   return {
  //     objects: dataobject,
  //     // title: dataobject.title,
  //     // content: dataobject.content,
  //     // postedAt: dataobject.postedAt,
  //     // comments: dataobject.comments,
  //     // likes: dataobject.likes,
  //     // views: dataobject.views,
  //     // authorId: dataobject.authorId,
  //     // tags: dataobject.tags,
  //     // category: dataobject.category,
  //     // id: dataobject.id,
  //   }
  // },
};
</script>