<template>
  <div class="body">
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
  import Footer from '~/components/Sections/Footer'
  import Header from '~/components/Sections/Header'
  export default {
    components: {
      Footer,Header
    }
  }
</script>

<style scoped>
        .body {
            background: #fff;
            color: #777777;
            font-size: 14px;
            line-height: 31px;
            font-weight: 400;
            padding: 0;
            font-family: BYekan, 'BYekan', tahoma;
            direction: rtl;
            text-align: right;
        }
        
        * {
            font-family: BYekan, 'BYekan', tahoma;
            direction: rtl;
            text-align: right;
        }
    </style>