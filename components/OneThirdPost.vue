<template>
  <div class="col-md-4" >
    <div class="single-tat stat-v2" v-for="post in posts" :key="post.id" :post="posts">
      <div class="stat-img">
        <img src="/img/blog/tat-2.png" alt />
      </div>
      <div class="stat-text">
        <div class="stat-meta">
          <p>
            <span class="sm-date">نویسنده</span> -
            <span class="sm-category">{{post.category}}</span>
          </p>
        </div>
        <nuxt-link :to="localePath({ name: 'dest', params: { slug: post.id }})">
          <h4>{{post.title}}</h4>
        </nuxt-link>
        <p style="font-family: BYekan, 'BYekan', tahoma;">{{post.content}}</p>
        <div class="stat-location-comment">
          <ul>
            <li class="slocation city">
              <i class="fa" aria-hidden="true"></i>
              {{post.postedAt}}
            </li>
            <li class="slocation"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">

import axios from "axios";

  export default {
    mounted: function() {
    return axios
      .get("http://localhost:3000/test.json")
      .then(res => {
        this.posts = res.data.slice(1, 4);
      })
      .catch(e => {
        console.log(e);
      });
  },
  data: function() {
    return {
      posts: []
    };
  },
    props: {
      post: {
        type: Object
      }
    }
  }
</script>