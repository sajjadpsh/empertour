// -----------------------------

//   JS INDEX
/* =================== */
/*  
   
    ## Preloader
    ## Sticky Header
    ## Scroll-up
    ## Counter Up
    ## Smooth Scroll
    ## owl carousel
    ## Product Details JS
    ## Hero Map Show Hide
    ## My Present Location
    ## Ajax Contact Form
    ## Product Range Slider
*/
// -----------------------------
(function($) {
    "use strict";


    /*---------------------
    Preloader
    --------------------- */

    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    /* -----Preloader End----- */

    /*-----------------
    Sticky Header
    -----------------*/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 85) {
            $('.headerV1').addClass('navbar-fixed-top');
        } else {
            $('.headerV1').removeClass('navbar-fixed-top');
        }
    });

    var hv2height = $(".hero-v2").height();

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > hv2height) {
            $('.footstep-nav-v2').addClass('navbar2-fixed-top');
        } else {
            $('.footstep-nav-v2').removeClass('navbar2-fixed-top');
        }
    });
    /* -----Sticky End----- */




    /*-----------------
    Scroll-up
    -----------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 1500,
        animation: 'fade'
    });
    /* -----Scroll-up End----- */

    /*------------------------------
    Counter Up
    ------------------------------ */
    // $('.counter-up').counterUp();
    $('.counter-up').counterUp({
        delay: 10,
        time: 1000
    });

    /*---------------------
    Smooth Scroll
    --------------------- */
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 80
        }, 1200);
    });



    /*---------------------
    owl carousel
    --------------------- */

    // Trips Carousel
    function trips_carousel() {
        var owl = $(".trips-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 3
                }
            }
        });
    }
    trips_carousel();



    // Instagram Post Carousel
    function instaPost_carousel() {
        var owl = $(".instaPost-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                760: {
                    items: 6
                }
            }
        });
    }
    instaPost_carousel();


    // Sidebar Post Carousel
    function sidebarPost_carousel() {
        var owl = $(".sidebarPost-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 1,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    sidebarPost_carousel();


    // Brand Logo Carousel
    function bsw_slider() {
        var owl = $(".bsw-silder");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 1,
            smartSpeed: 2000,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                760: {
                    items: 4
                }
            }
        });
    }
    bsw_slider();

    // Customer Reviews Carousel
    function c_review_carousel() {
        var owl = $(".c-review-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                992: {
                    items: 3
                }
            }
        });
    }
    c_review_carousel();
    // Customer Reviews Carousel End

}(jQuery));


$(".hero1-slider").owlCarousel({
    margin: 10,
    loop: true,
    dots: true,
    nav: false,
    items: 1
});

// Owl Carousel JS END

/*---------------------
    Product Details JS
    --------------------- */
// Product Quantity Increment Decrement 

$("#pQup").on('click', function() {
    document.getElementById("p-quantity").value = parseInt(document.getElementById("p-quantity").value) + 1;

});

$("#pQdown").on('click', function() {
    document.getElementById("p-quantity").value = parseInt(document.getElementById("p-quantity").value) - 1;
    if (document.getElementById("p-quantity").value <= 0) {
        document.getElementById("p-quantity").value = 0;
    }
});



// Product Color Select
$('.pColor-input').on('click', function() {
    if ($(this).is(":checked")) {
        $('.pColor-input').parent().removeClass("p-border");
        $(this).parent().addClass("p-border");
    } else {
        $(this).parent().removeClass("p-border");
    }
});

// Product Details JS END


/*---------------------
     Hero Map Show Hide
    --------------------- */

$('.hli-btn').on('click', function() {
    if ($(".hero-maps").hasClass('show-hero-map')) {
        $(".hero-maps").removeClass("show-hero-map");
    } else {
        $(".hero-maps").addClass("show-hero-map");
    }
});

// Hero Map Show Hide JS End


/*---------------------
     My Present Location
    --------------------- */

$('.cwi-close').on('click', function() {
    $('.current-where-i').css('right', '-400px');
});
// My Present Location Js END

// Product Range Slider

$(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 5000,
        values: [500, 5000],
        slide: function(event, ui) {
            $("#amountMin").val("$" + ui.values[0]);
            $("#amountMax").val("$" + ui.values[1]);
        }
    });
    $("#amountMin").val("$" + $("#slider-range").slider("values", 0));
    $("#amountMax").val("$" + $("#slider-range").slider("values", 1));

});

/*---------------------
    // Ajax Contact Form
    --------------------- */


$('.cf-msg').hide();
$('form#cf button#submit').on('click', function() {

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();
    var subjectName = $('#subjectName').val();
    var msg = $('#msg').val();
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!regex.test(email)) {
        alert('Please enter valid email');
        return false;
    }

    firstName = $.trim(firstName);
    lastName = $.trim(lastName);
    subjectName = $.trim(subjectName);
    email = $.trim(email);
    msg = $.trim(msg);

    if (firstName != '' && email != '' && msg != '') {
        var values = "firstName=" + firstName + "&lastName=" + lastName + "&subjectName=" + subjectName + "&email=" + email + " &msg=" + msg;
        $.ajax({
            type: "POST",
            url: "~/assets" / php / mail.php ",
            data: values,
            success: function() {
                $('#firstName').val('');
                $('#lastName').val('');
                $('#subjectName').val('');
                $('#email').val('');
                $('#msg').val('');

                $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                setTimeout(function() {
                    $('.cf-msg').fadeOut('slow');
                }, 4000);
            }
        });
    } else {
        $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
    }
    return false;
});


// Ajax Contact Form JS END