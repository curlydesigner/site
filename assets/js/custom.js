$(window).load(function () {

    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(550).css({
        'overflow': 'visible'
    });


    //  isotope
    var $container = $('.portfolio_container');
    $container.isotope({
        filter: '*',
    });

    // $('.portfolio_filter a').click(function () {
    //     $('.portfolio_filter .active').removeClass('active');
    //     $(this).addClass('active');

    //     var selector = $(this).attr('data-filter');
    //     $container.isotope({
    //         filter: selector,
    //         animationOptions: {
    //             duration: 500,
    //             animationEngine: "jquery"
    //         }
    //     });
    //     return false;
    // });

    // back to top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    // input
    $(".input-contact input, .textarea-contact textarea").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".input-contact input, .textarea-contact textarea").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });



    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

});


// background color
$('[data-color]').each(function () {
    $(this).css({
        'background-color': $(this).data('color')
    });
});

// progress bar
$('[data-progress]').each(function () {
    $(this).css({
        'bottom': $(this).data('progress')
    });
});