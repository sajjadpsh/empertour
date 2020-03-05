<template>
    <div class="col-md-12">
      <div class="single-tat stat-v2 stat-fullwidth" v-for="(post, index) in posts" :key="index">
        <div class="stat-img">
          <img src="/img/blog/tat-1-fw.png" alt />
        </div>
        <div class="stat-text">
          <div class="stat-meta">
            <p>
              <span class="sm-date">{{post.comments[0].authorName}}</span> -
              <span class="sm-category">{{post.category}}</span>
            </p>
          </div>
          <nuxt-link :to="localePath({ name: 'dest', params: {}})">
            <h4 style="font-family: BYekan, 'BYekan', tahoma;">{{post.title}}</h4>
          </nuxt-link>
          <p style="font-family: BYekan, 'BYekan', tahoma;">{{post.content}}</p>
          <div class="stat-location-comment">
            <ul>
              <li class="slocation">
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

<script>
import axios from "axios";

export default {
  mounted: function() {
    return axios
      .get("http://localhost:3000/test.json")
      .then(res => {
        this.posts = res.data.slice(0, 1);
      })
      .catch(e => {
        console.log(e);
      });
  },
  data: function() {
    return {
      posts: []
    };
  }
};
</script>