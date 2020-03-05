<template>
    <div class="single-tat stat-v2 stat-fullwidth">
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
</template>

<script>
export default {
    props: {
      post: {
        type: Object
      }
    }
}
</script>