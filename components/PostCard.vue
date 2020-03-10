<template>
  <div class="single-tat stat-v2 stat-fullwidth">
    <nuxt-link :to="localePath({ name: 'post-id', params: { id: post.id , slug:post }})">
      <div class="stat-img">
        <img src="/img/blog/tat-2.png" alt />
      </div>
      <div class="stat-text">
        <div class="stat-meta">
          <p>
            <nuxt-link
              :to="localePath({ name: 'author-id', params: { id: post.authorId }})"
            >
            <span 
            class="sm-date" 
            v-for="author in authors" 
            v-if="author.id==post.authorId">
              {{author.firstName}} {{author.surname}}
            </span>
 -          </nuxt-link>
            <nuxt-link
              :to="localePath({ name: 'category-name', params: { name: post.category }})"
            >
              <span class="sm-category">{{post.category}}</span>
            </nuxt-link>
          </p>
        </div>

        <h4>{{post.title}}</h4>
        <div class="stat-location-comment">
          <ul>
            <li class="slocation city">
              <i class="fa" aria-hidden="true"></i>
              {{(postedAt)}}
            </li>
            <li class="slocation"></li>
          </ul>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import moment from 'moment-jalaali-es'
moment().format('jYYYY/jM/jD')
export default {
  props: {
    post: {
      type: Object
    },
    author:{
      type: Object
    }
  },
  mounted: function(){
    return(
      this.$axios
        .get("http://blogapi.empertour.ir/author/", {
          headers: { "Access-Control-Allow-Origin": "" }
        })
        .then(res => {
          this.authors = res.data;
        })
        .catch(e => {
          // console.log(e);
        })
    )
  },
  data: function(){
    return{
      authors:[]
    }
  },
  computed: {
      postedAt() {
         return moment(this.post.postedAt).format('jYYYY/jM/jD')
      }
   } 
};
</script>