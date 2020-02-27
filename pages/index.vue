<template>
  <div>
      <section id="hero" class="hero-area hero-first hero-v2">
        <div class="hero1-slider">
            <div class="item">
                <div class="hero-slider">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="hero-text">
                                    <div class="ht-counter-area">
                                        <p>THE COUNTER: <span class="counter-up">70</span> Countries <span class="counter-up">1036</span> Cities</p>
                                    </div>
                                    <div class="ht-title">
                                        <h2>Leave your mark on all over the world.</h2>
                                    </div>
                                    <div class="ht-rmore-btn">
                                        <a href="#" class="btn-style-b">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-maps">
            <div id="gmap" class="gmap-wrapper"></div>
        </div>
    </section>

      <section id="blog-post3" class="blog-postV3 section-padding bg-dark-blue">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="single-tat stat-v2 stat-fullwidth">
                        <div class="stat-img">
                            <img src="/img/blog/tat-1-fw.png" alt="">
                        </div>
                        <div class="stat-text">
                            <div class="stat-meta">
                                <p><span class="sm-date">19 مرداد</span> - <span class="sm-category">سفر ها و بلیت ها</span></p>
                            </div>
                            <a href="#">
                                <h4 style="font-family: BYekan, 'BYekan', tahoma;">آریا وارسته</h4>
                            </a>
                            <p style="font-family: BYekan, 'BYekan', tahoma;">لورم مورم ایپزوم میپزوم</p>
                            <div class="stat-location-comment">
                                <ul>
                                    <li class="slocation">
                                        <a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i>تهران، ایران</a>
                                    </li>
                                    <li class="slocation">
                                        <a href="#"><i class="fa fa-comments" aria-hidden="true"></i>نظرات <span>(25)</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-tat stat-v2">
                        <div class="stat-img">
                            <img src="/img/blog/tat-2.png" alt="">
                        </div>
                        <div class="stat-text">
                            <div class="stat-meta">
                                <p><span class="sm-date">30 بهمن</span> - <span class="sm-category">دسته بندی مربوط</span></p>
                            </div>
                            <a href="#">
                                <h4>سید سجاد پیشوایان</h4>
                            </a>
                            <div class="stat-location-comment">
                                <ul>
                                    <li class="slocation">
                                        <a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i>مشهد</a>
                                    </li>
                                    <li class="slocation">
                                        <a href="#"><i class="fa fa-comments" aria-hidden="true"></i>نظر <span>(25)</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-tat stat-v2">
                        <div class="stat-img">
                            <img src="/img/blog/tat-3.png" alt="">
                        </div>
                        <div class="stat-text">
                            <div class="stat-meta">
                                <p><span class="sm-date">September 17, 2018</span> - <span class="sm-category">Tips & Tricks</span></p>
                            </div>
                            <a href="#">
                                <h4>سی سیز سیزر سسیرسس </h4>
                            </a>
                            <div class="stat-location-comment">
                                <ul>
                                    <li class="slocation">
                                        <a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i>Georgia</a>
                                    </li>
                                    <li class="slocation">
                                        <a href="#"><i class="fa fa-comments" aria-hidden="true"></i>Comment <span>(25)</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-tat stat-v2">
                        <div class="stat-img">
                            <img src="/img/blog/tat-2.png" alt="">
                        </div>
                        <div class="stat-text">
                            <div class="stat-meta">
                                <p><span class="sm-date">September 19, 2018</span> - <span class="sm-category">Tips & Tricks</span></p>
                            </div>
                            <a href="#">
                                <h4>محمد باقر اینا</h4>
                            </a>
                            <div class="stat-location-comment">
                                <ul>
                                    <li class="slocation">
                                        <a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i>شیراز</a>
                                    </li>
                                    <li class="slocation">
                                        <a href="#"><i class="fa fa-comments" aria-hidden="true"></i>نظرات <span>(25)</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    </section>
  </div>
</template>

<script>

//   import BlogSection from "/components/Sections/BlogSection"

//   import blogsEn from '/contents/en/blogsEn.js'
//   import blogsEs from '/contents/es/blogsEs.js'

//   export default {
//     async asyncData ({app}) {

//       const blogs = app.i18n.locale === 'en' ? blogsEn : blogsEs

//       async function asyncImport (blogName) {
//         const wholeMD = await import(`/contents/${app.i18n.locale}/blog/${blogName}.md`)
//         return wholeMD.attributes
//       }

//       return Promise.all(blogs.map(blog => asyncImport(blog)))
//       .then((res) => {
//         return {
//           blogs: res
//         }
//       })
//     },

//     components: { BlogSection },

//     transition: {
//       name: 'slide-fade'
//     },

//     head () {
//       return {
//         title: this.$t('indexPageHead.title'),
//         htmlAttrs: {
//           lang: this.$i18n.locale,
//         },
//         script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },],
//         meta: [
//           { name: "author", content: "Marina Aisa" },
//           { name: "description", property: "og:description", content: this.$t('indexPageHead.description'), hid: "description" },
//           { property: "og:title", content: this.$t('indexPageHead.title') },
//           { property: "og:image", content: this.ogImage },
//           { name: "twitter:description", content: this.$t('indexPageHead.description') },
//           { name: "twitter:image", content: this.ogImage }
//         ]
//       };
//     },

//     computed: {
//       ogImage: function () {
//         return;
//       }
//     }
//   }
//
</script>
