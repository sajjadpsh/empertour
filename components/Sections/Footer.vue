<template>
  <footer class="footer-area ft-aV2 bg-dark-blue">
        <div class="footer-widget">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="fw-left">
                            <div class="footer-logo">
                                <b><h2 class="footer-name">امپراتور</h2></b>
                            </div>
                            <div class="footer-text">
                                <p> امپراتور سایت خرید تور های داخلی و خارجی در کشور می باشد که در تلاش است لحظات خوشی را برای خانواده های ایرانی رقم بزند. شما در سایت امپراتور با خیال آسوده می توانید مقصد مورد نظر خود را مشخص کرده و از میان پیشنهاد های مختلف آژانس های مسافرتی بهترین گزینه را برگزینید. با امپراتور سفر کنید و مقاصد ماجراجویی ، هیجان انگیز ، ساحلی یا تاریخی خود را انتخاب کنید.    
                                </p>
                                <p>امپراتور در نظر دارد با ایجاد بستری امن ، مطمئن و راحت فرآیند تصمیم گیری شما برای سفر های خانوادگی و دوستانه را تسهیل کند. امپراتور به دنبال ایجاد یک تجربه ی ناب برای شما و همسفر هایتان می باشد.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="fw-single footer-contact">
                                    <h4>ارتباط با ما</h4>
                                    <ul class="fws">
                                        <li><span></span> <br>  <br></li>
                                        <li><span></span></li>
                                        <li><span></span> </li>
                                        <li><span></span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="fw-single footer-links">
                                    <h4>حساب</h4>
                                    <ul class="fws">
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="fw-single">
                                    <h4>دسته بندی ها</h4>
                                    <ul class="fws footer-links">
                                        <li><a href="#">خود سفر</a></li>
                                        <li><a href="#">سفر های من</a></li>
                                        <li><a href="#">سفر در اوج بیماری</a></li>
                                        <li><a href="#">چیزای دیگه</a></li>
                                        <li><a href="#">سفر کنیم تا بقیه رو</a></li>
                                        <li><a href="#">مریض کنیم</a></li>

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
                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
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
    .footer-name{
        color:white;
        font-size: 250%;
    }
</style>