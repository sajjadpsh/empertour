<template>
  <div class="single-tat stat-v2 stat-fullwidth">
<<<<<<< HEAD
    <div class="stat-img">
      <img src="/img/blog/tat-2.png" alt />
    </div>
    <div class="stat-text">
      <div class="stat-meta">
        <p>
          <span class="sm-date blog-post-author">نویسنده</span> -
=======
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
>>>>>>> 079ec4e1f16d69e21dd67b94946a4c0664ea1bf7

          <nuxt-link :to="localePath({ name: 'category-name', params: { category: post.category }})">
          <span class="sm-category blog-post-category">{{post.category}}</span>
          </nuxt-link>
        </p>
      </div>
      <nuxt-link
        :to="localePath({ name: 'post-id', params: { id: post.id }})"
      >
        <h4>{{post.title}}</h4>
<<<<<<< HEAD
        <p>  اهمیت عدم سفر در این روز ها برای جلوگیری از شیوع هرچه بیشتر ویروس کرونا (بیشن توی خونت شمالیا گناه نکردن ک)</p>
      </nuxt-link>
      <div class="stat-location-comment">
        <ul class="blog-post-date">
          <li class="slocation city">
            <i class="fa" aria-hidden="true"></i>
            {{post.postedAt}}
          </li>
          <li class="slocation"></li>
        </ul>
=======
        <div class="stat-location-comment">
          <ul>
            <li class="slocation city">
              <i class="fa" aria-hidden="true"></i>
              {{(postedAt)}}
            </li>
            <li class="slocation"></li>
          </ul>
        </div>
>>>>>>> 079ec4e1f16d69e21dd67b94946a4c0664ea1bf7
      </div>
    </div>
  </div>
</template>

<style scoped>
  .blog-post-author{
    color:#6a1b9a;
  }  
  .blog-post-category{
    color:#ffc107;
  }
  .blog-post-date{
    color:#ffc107;
  }
</style>


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