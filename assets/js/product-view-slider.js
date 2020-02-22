// Product Details Slider 
$(window).on('load', function (){
    //load first image into gallery
    $(".photogallery .pg-menu li:first-child img").addClass("activeImage");
    $(".photogallery .pg-menu li:first-child img").parent().addClass('pgm-active');
    var src = $(".photogallery .pg-menu li:first-child img")[0].src;
    $(".photogallery .galleryimage")[0].src = src;
    var text = $(".photogallery .pg-menu li:first-child span").text();
    $(".photogallery .gallerydescription").text(text);
    

    $(".photogallery .pg-menu img").on('click', function (){
        $(".activeImage").parent().removeClass('pgm-active');
        $(this).parent().addClass('pgm-active');
        $(".activeImage").removeClass("activeImage");
        $(this).addClass("activeImage");
        
        var imageSrc = $(this)[0].src;
        var description = $(this).next().text();
        $(".photogallery .galleryimage")[0]. src = imageSrc;
        $(".photogallery .gallerydescription").text(description);
        clearInterval(galleryInterval);
    });
    
    var galleryInterval = setInterval(nextImage, 9000000);
});



function nextImage(){
    
    var current = $(".activeImage");
    current.removeClass("activeImage");
    //console.log(current.parent().next().length);
    if(current.parent().next().length >= 1){
        current.parent().next().children().addClass("activeImage");
        var img = current.parent().next().children("img");
        var text = current.parent().next().children("span");
    
    }
    else{
        $(".photogallery .pg-menu li:first-child img").addClass("activeImage");
        var img = $(".photogallery .pg-menu li:first-child img");
        var text = $(".photogallery .pg-menu li:first-child span");
    }
    $(".photogallery .galleryimage")[0]. src = img[0].src;
    $(".photogallery .gallerydescription").text(text.text());
}



$(window).on('load', function () {
    var pgm_height = $(".photogallery .pg-menu ul").height();
    
    $(".pgm-scroll-btn").on('click', function (){
        
        
        $('.photogallery .pg-menu ul').animate({
            
            // scrollTop: 0 < pgm_height ? '+=120px' : '+=0px'
            scrollTop: pgm_height > 0 ? '+=120px' : '+=0px'
            
        }, 800);
        
    });

    
});