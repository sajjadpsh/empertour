<template>
  <div>
    
    <section id="blog-post3" class="blog-postV3 section-padding ">
      <div class="container">
        <BlogSection/>
      </div>
    </section>
  </div>
</template>



<style scoped>

.section-padding{
  background-image: url('/img/common/car_pattern.svg');
  background-color: #8450BE;
}
.blog-title{
  color:#6a1b9a;
}
</style>

<script>
import BlogSection from "~/components/Sections/BlogSection";

export default {
  props: {
    posts: {
      type: Array
    }
  },
  components: { BlogSection }
};

</script>