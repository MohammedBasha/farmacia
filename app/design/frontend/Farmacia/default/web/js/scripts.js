require(["jquery",
        "jquery/ui",
        "slick",
        "mage/mage",
        "accordion"
    ], function($){
    $(document).ready( function() {

        // Adding title attribute to the my-acount link
        $(".my-account-link").attr("title","accedi/registrati");

        // Manage the Navigation Menu sub items collapse in the Mobile view
        if ($(window).width() <= 767) {

            // Adding the All Category link in each submenu
            $('.navigation li.level0 li.parent > a > span').each(function() {
                var linkHref = $(this).parent().attr('href'),
                    linkValue = $(this).text();

                $(this).parent().parent().find('ul:first').prepend('<li><a href="'+linkHref+'" title="'+linkValue+'">'+ 'All '+linkValue +'</a></li>');
            });

            // Adding the Plus Icon
            $('li.level0 li.parent > a').prepend('<i class="fas fa-plus"></i>');

            // Stopping he Clicking default behavior on link
            $('.navigation li.level0 li.parent > a').click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).children("i").trigger("click");
                return false;
            });

            // The Collapsing Function
            $('.navigation li.level0 li.parent > a i').click(function() {
                if ($(this).parent().parent().siblings('.ui-menu-item').hasClass('lichild_clicked')) {
                    $(this).parent().parent().siblings('.lichild_clicked').children('ul').slideUp();
                    $(this).parent().parent().siblings('.lichild_clicked').children('a').children('i').removeClass('fa-plus').addClass('fa-minus');
                    $(this).parent().parent().siblings('.lichild_clicked').removeClass("lichild_clicked").children('a').children('i').removeClass('fa-minus').addClass('fa-plus');
                }
             
                if ($(this).hasClass('fa-minus')) {
                    $(this).parent().parent().find('ul:first').slideUp();
                    $(this).parent().parent().removeClass("lichild_clicked");
                    $(this).removeClass('fa-minus');
                    $(this).addClass('fa-plus');
                } else {
                    $(this).parent().parent().find('ul:first').slideDown();
                    $(this).addClass('fa-minus');
                    $(this).parent().parent().addClass("lichild_clicked");
                    $(this).removeClass('fa-plus');
                }
                return false;
             });
            
        }

        // Initializing the Sticky widget to the header
        if ($(window).width() >= 767) {
            $('.header.content').mage('sticky', {
                container: '.page-header'
            });
        }

        // Adding the Sticky function to the Main Navigation
        if ($(window).width() >= 767) {
            $('.sticky-nav-toggle i').click(function() {
                if($('.nav-sections').hasClass('_sticky')) {
                    $('.nav-sections').removeClass('_sticky');
                } else {
                    $('.nav-sections').addClass('_sticky');
                    $('.nav-sections._sticky').css('top', $('.header.content').outerHeight());
                }
            });

            setInterval(function(){
                if(!$('.sticky-nav-toggle').is(':visible')){
                    $('.nav-sections').removeClass('_sticky');
                }
            }, 200);
        }

        $(window).on('resize', function(){
            if ($(window).width() >= 767) {
                $('.sticky-nav-toggle i').click(function() {
                    if($('.nav-sections').hasClass('_sticky')) {
                        $('.nav-sections').removeClass('_sticky');
                    } else {
                        $('.nav-sections').addClass('_sticky');
                        $('.nav-sections._sticky').css('top', $('.header.content').outerHeight());
                    }
                });

                setInterval(function(){
                    if(!$('.sticky-nav-toggle').is(':visible')){
                        $('.nav-sections').removeClass('_sticky');
                    }
                }, 200);
            }
        });

        // Init the Banner slider with Slick lib
        $('.home-banner-wrapper').slick({
            dots: true,
            centerMode: true,
            centerPadding: '120px',
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        infinite: true,
                        dots: true,
                        centerPadding: '0'
                    }
                }
            ]
        });

        // Initializing the Accordion Widget in the Footer Mobile
        $(".footer-content-mobile").accordion();
    });
});