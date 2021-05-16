require(['jquery', "slick", "mage/mage"], function($){
    $(document).ready( function() {

        // Adding title attribute to the my-acount link
        $(".my-account-link").attr("title","accedi/registrati");

        // Initializing the Sticky widget to the header
        $('.header.content').mage('sticky', {
            container: '.page-header'
        });

        // Adding the Sticky function to the Main Navigation
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

        // Init the Banner slider with Slick lib
        $('.home-banner-wrapper').slick({
            dots: true,
            centerMode: true,
            centerPadding: '120px',
            slidesToShow: 1
        });

    });
});