<template>
  <div class="single-tat stat-v2 stat-fullwidth">
    <div class="stat-img">
      <img src="/img/blog/tat-2.png" alt />
    </div>
    <div class="stat-text">
      <div class="stat-meta">
        <p>
          <span class="sm-date">نویسنده</span> -

          <nuxt-link :to="localePath({ name: 'category-name', params: { category: post.category }})">
          <span class="sm-category">{{post.category}}</span>
          </nuxt-link>
        </p>
      </div>
      <nuxt-link
        :to="localePath({ name: 'post-id', params: { id: post.id }})"
      >
        <h4>{{post.title}}</h4>
      </nuxt-link>
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
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    }
  }
};
</script>