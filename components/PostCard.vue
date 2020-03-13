<template>
  <div class="single-tat stat-v2 stat-fullwidth">
    <nuxt-link :to="localePath({ name: 'post-id', params: { id: post.id }})">
      <div class="stat-img">
        <img src="/img/blog/tat-2.png" alt />
      </div>
      <div class="stat-text">
        <div class="stat-meta">
          <p>
            <nuxt-link :to="localePath({ name: 'author-id', params: { id: post.authorId }})">
              <span v-for="author in authors" v-bind:key="author">
                <span class="sm-date blog-post-author" v-if="author.id==post.authorId">
                  {{author.firstName}} {{author.surname}}
                </span>
              </span>
              -
            </nuxt-link>
            <!-- <nuxt-link :to="localePath({ name: 'category-name', params: { name: post.category }})">{{post.category}}
            </nuxt-link> -->
            <nuxt-link :to="localePath({ name: 'category-name', params: { name: post.category }})">
          <span class="sm-category blog-post-category">{{post.category}}</span>
        </nuxt-link>
          </p>
        </div>

        <!-- <nuxt-link :to="localePath({ name: 'category-name', params: { category: post.category }})">
          <span class="sm-category blog-post-category">{{post.category}}</span>
        </nuxt-link> -->
        <h4>{{post.title}}</h4>
        <!-- <p> اهمیت عدم سفر در این روز ها برای جلوگیری از شیوع هرچه بیشتر ویروس کرونا (بیشن توی خونت شمالیا گناه نکردن ک)
        </p> -->
        <div class="stat-location-comment">
          <ul class="blog-post-date">
            <li class="slocation city">
              <i class="fa" aria-hidden="true"></i>
              {{postedAt}}
            </li>
            <li class="slocation"></li>
          </ul>
        </div>
      </div>
      <!-- <nuxt-link
        :to="localePath({ name: 'post-id', params: { id: post.id }})"
      > -->
    </nuxt-link>
  </div>
</template>

<style scoped>
  .blog-post-author {
    color: #6a1b9a;
  }

  .blog-post-category {
    color: #ffc107;
  }

  .blog-post-date {
    color: #ffc107;
  }
</style>


<script>
  import moment from "moment-jalaali-es";
  export default {
    props: {
      post: {
        type: Object
      },
      author: {
        type: Object
      }
    },
    mounted: function () {
      return this.$axios
        .get("http://blogapi.empertour.ir/author/", {
          headers: {
            "Access-Control-Allow-Origin": ""
          }
        })
        .then(res => {
          this.authors = res.data;
        })
        .catch(e => {
          // console.log(e);
        });
    },
    data: function () {
      return {
        authors: []
      };
    },
    computed: {
      postedAt() {
        return moment(this.post.postedAt).format("jYYYY/jM/jD");
      }
    },
  };
</script>