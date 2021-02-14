$(function(){
    'use strict';
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    $(window).scroll(function(){
        if($(window).scrollTop() >=760){
            $('header').css('opacity','.6');
        }else{
            $('header').css('opacity','1');
        }
    })

    $(".landing").height(window.outerHeight-100-$("header").height());

    $('.slider').slick({
        
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });

})
