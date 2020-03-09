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
              <div class="container small"> 
                <!-- <p>{{post.content}}</p> -->
                <client-only>
                  <DynamicMarkdown
                  
                    :render-func="renderFunc"
                    :static-render-funcs="staticRenderFuncs"
                    :extra-component="extraComponent"
                  />
                </client-only>
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

  //   mounted: function() {
  //   return (
  //     this.$axios
  //       .get("http://blogapi.empertour.ir/post?skip=0&limit=1", {
  //         headers: { "Access-Control-Allow-Origin": "" }
  //       })
  //       .then(res => {
  //           this.firstpost = res.data.content
  //           this.extraComponent= firstpost.extraComponent,
  //           this.renderFunc= `(${firstpost.vue.render})`,
  //           this.staticRenderFuncs= `[${firstpost.vue.staticRenderFns}]`
  //         }
  //       )
  //       .catch(e => {
  //         // console.log(e);
  //       })
  //   )
  // },
 async asyncData ({params, app}) {
      const fileContent = await import(`~/contents/fa/${params.id}.md`)
      const attr = fileContent.attributes
      return {
        extraComponent: attr.extraComponent,
        renderFunc: `(${fileContent.vue.render})`,
        staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`,
        image: {
          main: attr.image && attr.image.main,
          og: attr.image && attr.image.og
        }
      }
    },
    components: { DynamicMarkdown},
    computed: {
      extraComponentLoader () {
        if (!this.extraComponent) {
          return null
        }
        return () => import(`~/components/blog/${this.extraComponent}.vue`)
      },
      postcontent(firstpost){
        return this.$firstpost.vue.render
      }
    },
    data: function() {
    return {
      posts: [],
      firstpost: []
    };
  },
  // props:{
  //   firstpost:{
  //     type: Array
  //   }
  // }
  }
</script>
