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
                <h4>تایتل</h4>
              </div>
              <div class="ddc-meta">
                <p>
                  <span class="sm-date">تاریخ</span> -
                  <span class="sm-category">کتگوری</span>
                </p>
              </div>
              <!-- <ImageResponsive
                :imageURL="'blog/' + id + '/_main.jpg'"
                v-if="!noMainImage"
                width="100%"
                class="elevate-cover__img"
                :alt="'Blog picture'"
              />-->
              <!-- <component class="elevate-cover__img" :is="extraComponentLoader" /> -->
              <div class="container small" v-for="item in firstpost" :key="item.id">
                <p>{{item.content}}</p>
                <!-- <client-only>
                  <DynamicMarkdown
                    :render-func="renderFunc"
                    :static-render-funcs="staticRenderFuncs"
                    :extra-component="extraComponent"
                  />
                </client-only>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="js">

  import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue"


  export default {

    mounted: function() {
    return (
      this.$axios
        .get("http://localhost:3000/test.json",{
        // .get("http://blogapi.empertour.ir/post?skip=0&limit=-1", {
          headers: { "Access-Control-Allow-Origin": "" }
        })
        .then(res => {
          this.firstpost = res.data;
          // this.extraComponent= res.data.extraComponent,
          // this.renderFunc= `(${res.data.vue.render})`,
          // this.staticRenderFuncs= `[${res.data.vue.staticRenderFns}]`,
          }
        )
        .catch(e => {
          // console.log(e);
        })
    )
  },
data: function() {
    return {
      firstpost: []
    };
  },
  extraComponentLoader () {
        if (!this.extraComponent) {
          return null
        }
        return () => import(`~/components/blog/${this.extraComponent}.vue`)
      },

    components: { DynamicMarkdown},


      
  }
</script>

<style lang="scss">
.overflowhidden {
  overflow: hidden;
}
.blogSelected-horizontalImage {
  height: 56rem;
  background-size: contain;
  transition: all ease 0.35s;
  opacity: 0;

  &[lazy="loading"] {
    filter: blur(15px);
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }
  &[lazy="loaded"] {
    opacity: 1;
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }
  .intro {
    display: flex;
  }
}
.elevate-cover {
  display: flex;
  flex-direction: column;
  min-height: 459px;

  @media (min-width: $screen-md) {
    flex-direction: row;
  }

  &__img,
  &__textOffset {
    width: 100%;
  }

  &__left {
    max-width: 500px;
    width: 100%;
    padding: 2.4rem;
    margin-bottom: auto;

    @media (min-width: $screen-md) {
      margin-left: auto;
      padding: 2.4rem 4rem 2.4rem 2.4rem;
    }
  }

  &__textOffset {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 3rem;
    font-family: "Tiempos Headline", Arial, sans-serif;
    color: $secondary;

    @media (min-width: $screen-sm) {
      font-size: 4rem;
    }
  }

  &__description {
    margin: 0;
    opacity: 0;
    animation: fadeinmove 0.5s ease;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }
}
.dynamicMarkdown {
  padding: 3.2rem 0;
  font-size: 16px;
  line-height: 1.7;
  color: $secondary;

  > *:not(.datagrid):not(.image-placeholder) {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  @media (min-width: $screen-sm) {
    padding: 7.2rem 0;
    font-size: 19px;
  }

  h2 {
    padding-bottom: 3.2rem;
    padding-bottom: 2rem;

    @media (max-width: $screen-sm) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2.2rem;
    padding-bottom: 2rem;
  }

  li {
    list-style-type: initial;
  }

  pre {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    padding: 2.4rem;
    border-radius: 4px;
    background-color: #f6f8fa;
    overflow-x: scroll;
    display: block;
    margin-bottom: 5rem;

    code {
      background-color: #f6f8fa;
    }
  }

  code {
    background: #f3f4f4;
    border-radius: 4px;
    display: inline;
    color: $secondary;
    font-size: 14px;
    padding: 0.2em 0.4em;

    @media (min-width: $screen-sm) {
      font-size: 16px;
    }
  }
}
</style>
