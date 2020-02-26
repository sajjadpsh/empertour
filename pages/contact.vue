<template>
    <div>
        <section class="innerpage-title-area errorTitle">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="innerpage-titile">
                        <h2>مخاطب</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Innerpage Title Area -->

    <!-- Contact Wrapper -->
    <Section class="contact-content-area section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="contact-form-wrapper">
                        <div class="cform-top-text">
                            <h4>هرچه میخواهد دل تنگت بگو</h4>
                        </div>
                        <div class="cf-msg"></div>
                        <form method="post" action="assets/php/mail.php" id="cf">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="firstName" name="firstName" placeholder="نام">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="lastName" name="lastName" placeholder="نام خانوادگی">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="پست الکترونیکی" required="">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="subjectName" name="Subject" placeholder="عنوان">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea class="form-control" id="msg" name="msg" placeholder="متن پیام" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" id="submit" name="submit" class="btn btn-primary">ارسال</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Section>
    </div>
</template>