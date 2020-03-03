<template>
  <footer class="footer-area ft-aV2 bg-dark-blue">
        <div class="footer-widget">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="fw-left">
                            <div class="footer-logo">
                                <img src="/img/common/logo-4.png" alt="">
                            </div>
                            <div class="footer-text">
                                <p> اپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت
                                    و سه درصد گذشته، حال و آین</p>
                                <p>رم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیش</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="fw-single footer-contact">
                                    <h4>ارتباط با ما</h4>
                                    <ul class="fws">
                                        <li><span>نشانی:</span> متاسفانه ایران <br>تهران  <br>خیابون حافط</li>
                                        <li><span>تلفن:</span>09367405960</li>
                                        <li><span>پست الکترونیک:</span> a.varaste.n@gmail.com</li>
                                        <li><span>تارنما:</span> www.empertour.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="fw-single footer-links">
                                    <h4>حساب</h4>
                                    <ul class="fws">
                                        <li><a href="#">لیست های من</a></li>
                                        <li><a href="#">درخواست های من</a></li>
                                        <li><a href="#">اعتبارات من</a></li>
                                        <li><a href="#">سرخی من</a></li>
                                        <li><a href="#">زردی تو!</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="fw-single">
                                    <h4>سفر</h4>
                                    <ul class="fws footer-links">
                                        <li><a href="#">خود سفر</a></li>
                                        <li><a href="#">سفر های من</a></li>
                                        <li><a href="#">سفر در اوج بیماری</a></li>
                                        <li><a href="#">چیزای دیگه</a></li>
                                        <li><a href="#">سفر کنیم تا بقیه رو</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright" style="direction: ltr;
        text-align: left;">
            <div class="container">
                <div class="row copyCont">
                    <div class="col-md-6 copyCont ">
                        <div class="fc-right ">
                            <ul>
                                <li>
                                    <p>آریا وارسته نژاد این رو تست میکنه</p>
                                </li>
                                <li><a href="#">قانونام</a></li>
                                <li><a href="#">و چیزای دیگه</a></li>
                                <li><a href="#">بفرمااینم نقشه </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 soCont">
                        <div class="fc-left">
                            <ul class="fc-social">
                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer> 
</template>
<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
    .footer-copyright{
      
    }
    .copyCont{
        text-align: left;
        direction: ltr;
    }
    .soCont{
        text-align: right
    }
</style>