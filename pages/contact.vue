<template>
    <div>
         <header id="header" class="header-area headerV1">
        <nav class="navbar navbar-expand-lg footstep-nav footstep-nav-v1">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="/assest/img/common/logo.png" alt="" class="logo"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
        
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Home
                                <span class="sr-only">(current)</span>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="index.html">Home V1</a>
                                <a class="dropdown-item" href="index-2.html">Home V2</a>
                                <a class="dropdown-item" href="index-3.html">Home V3</a>
                                <a class="dropdown-item" href="index-4.html">Home V4</a>
                                <a class="dropdown-item" href="index-5.html">Home V5</a>
                                <a class="dropdown-item" href="index-6.html">Home V6</a>
                            </div>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="about-me.html">About</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="destination.html">Destination</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="travel-tips.html">Tips</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="tour-planning.html">Tour</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="shop.html">Shop</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Pages
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                                <a class="dropdown-item" href="gear-i-use.html">Product</a>
                                <a class="dropdown-item" href="product-details.html">Product Details</a>
                                <a class="dropdown-item" href="tips-overview.html">Tips Overview</a>
                                <a class="dropdown-item" href="destination-overview.html">Destination Overview</a>
                                <a class="dropdown-item" href="cart.html">Cart</a>
                                <a class="dropdown-item" href="checkout.html">Checkout</a>
                                <a class="dropdown-item" href="404.html">404</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            <a class="nav-link smoothscroll place-order-btn " href="#">Place Oreder</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>

    </header>
    <!-- /Header Area -->
    
    <!-- Innerpage Title Area -->
    <section class="innerpage-title-area errorTitle">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="innerpage-titile">
                        <h2>Contact</h2>
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
                            <h4>Please, feel yourself comfortable to fill in our contact form</h4>
                        </div>
                        <div class="cf-msg"></div>
                        <form method="post" action="/assest/php/mail.php" id="cf">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Last Name">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email" required="">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="subjectName" name="subjectName" placeholder="Subject">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea class="form-control" id="msg" name="msg" placeholder="Message" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" id="submit" name="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Section>
    <!-- /Contact Wrapper -->

    <!-- Instagram Post Area -->
    <section class="instagram-post">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="instaPost-slider-wrapper">
                        <div class="instaPost-carousel owl-carousel owl-theme">
                            <div class="item">
                                <div class="insta-single">
                                    <img src="/assest/img/slider/insta-post-1.png" alt="">
                                </div>
                            </div>
                            <div class="item">
                                <div class="insta-single">
                                    <img src="/assest/img/slider/insta-post-2.png" alt="">
                                </div>
                            </div>
                            <div class="item">
                                <div class="insta-single">
                                    <img src="/assest/img/slider/insta-post-3.png" alt="">
                                </div>
                            </div>
                            <div class="item">
                                <div class="insta-single">
                                    <img src="/assest/img/slider/insta-post-4.png" alt="">
                                </div>
                            </div>
                            <div class="item">
                                <div class="insta-single">
                                    <img src="/assest/img/slider/insta-post-5.png" alt="">
                                </div>
                            </div>
                            <div class="item">
                                <div class="insta-single">
                                    <img src="/assest/img/slider/insta-post-6.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="instaPost-follow">
                            <a href="#" class="btn-style-b">follow @ instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Instagram Post Area -->

    <!-- Newsletter Area -->
    <section id="newsletter" class="newsletter-area section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="nla-left">
                        <h3>Join <span>987,4561</span> Monthly Reader. Subscribe Today!</h3>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="nla-right">
                        <form class="newsletter-form">
                            <div class="input-group">
                                <input type="email" class="form-control" placeholder="Email Address">
                                <button class="btn-style-a" type="submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Newsletter Area -->

    <!-- Footer Area Area -->
    <footer class="footer-area">
        <div class="footer-widget">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="fw-left">
                            <div class="footer-logo">
                                <img src="/assest/img/common/logo-2.png" alt="">
                            </div>
                            <div class="footer-text">
                                <p>I’m a location independent blogger, digital influencer, small group tour organizer and world traveler with a serious passion for the sun, the sea and adventure. </p>
                                <p>Eight years and 60-something countries later and I’m still on the road.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="fw-single footer-contact">
                                    <h4>Contact Me</h4>
                                    <ul class="fws">
                                        <li><span>Add:</span> 221B Baker St <br>London, NW1 6XE <br>UK</li>
                                        <li><span>T:</span> +010 222 9999</li>
                                        <li><span>E:</span> info@footsteps.com</li>
                                        <li><span>W:</span>  www.footsteps.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="fw-single footer-links">
                                    <h4>Account</h4>
                                    <ul class="fws">
                                        <li><a href="#">My Lists</a></li>
                                        <li><a href="#">My Requests</a></li>
                                        <li><a href="#">My Credits</a></li>
                                        <li><a href="#">My Info</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="fw-single">
                                    <h4>Travel</h4>
                                    <ul class="fws footer-links">
                                        <li><a href="#">Travel</a></li>
                                        <li><a href="#">Why Travel</a></li>
                                        <li><a href="#">Become a Traveler</a></li>
                                        <li><a href="#">How Its Works</a></li>
                                        <li><a href="#">Traveling FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="fc-left">
                            <ul class="fc-social">
                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="fc-right">
                            <ul>
                                <li><p>© 2018 Footgear. All rights reserved</p></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Site Map</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
</template>