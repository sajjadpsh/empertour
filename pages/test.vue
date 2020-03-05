<template>
  <div>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"

export default {
  mounted: function() {
    return axios.get('http://localhost:3000/test.json')
      .then((res) => {
        this.posts = res.data.slice(1,4);
      })
      .catch((e) => {
        console.log(e)
      })
  },
  data: function(){
        return {
            posts: []
        }
    },

  // data: () => {
  //   return {
  //     posts: []
  //   };
  // },
//   created() {
//     this.fetchSomething();
//   },
//   methods: {
//   async fetchSomething() {
//     const data = await this.$axios.$get('/test.json')
//     this.posts = data
//   }
// }

  // props: {
  //   posts: {
  //     type: Array
  //   }
  // }

  //   methods: {
  //     fetch () {
  //         let dataobject = this.$axios.$get('localhost:3000/test.json')
  //     return {
  //         title: dataobject.title
  //     }
  // .then((res) => {
  //   store.commit('setStars', res.dataobject)
  // })

  //   }

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