<template>
  <div>
    <section class="innerpage-title-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="innerpage-titile">
              <h2>خلاصه</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="destination-overview-area section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="destination-details-content">
              <nuxt-link :to="localePath('index')">{{ $t('comeBack') }}</nuxt-link>
              <div class="ddc-title">
                <h4>{{post.title}}</h4>
              </div>
              <div class="ddc-meta">
                <p>
                  <span class="sm-date">{{postedAt}}</span> -
                  <span class="sm-category">{{post.category}}</span>
                </p>
              </div>
              <template lang="md">
                {{post.content}}
                <!-- <vue-markdown> -->
                  <!-- {{markdown}} -->
                <!-- </vue-markdown> -->
                <!-- {{markdown}} -->
                <!-- <DynamicMarkdown
                  :render-func="renderFunc"
                  :static-render-funcs="staticRenderFuncs"
                  :extra-component="extraComponent"
                >
                {{markdown}}
                </DynamicMarkdown> -->
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue";
import axios from "@nuxtjs/axios";
import moment from "moment-jalaali-es";
// import VueMarkdown from 'vue-markdown'


export default {
  async asyncData({ params, app, $axios }) {
    const posts = await $axios.get(
      `http://blogapi.empertour.ir/post/${params.id}`
    )
    return {
      post: posts.data
    }
  },
  components: { DynamicMarkdown },
  computed: {
    markdown() {
      return unescape(this.post.content)
    },
    extraComponentLoader() {
      if (!this.extraComponent) {
        return null;
      }
      return () => import(`~/components/blog/${this.extraComponent}.vue`);
    },
    postedAt() {
      return moment(this.post.postedAt).format("jYYYY/jM/jD");
    },
  },
};
</script>
