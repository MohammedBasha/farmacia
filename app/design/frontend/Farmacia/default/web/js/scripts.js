require(['jquery', "slick"], function($){
    $(document).ready( function() {

        // Adding title attribute to the my-acount link
        $(".my-account-link").attr("title","accedi/registrati");

        // Init the Banner slider with Slick lib
        $('.home-banner-wrapper').slick({
            dots: true,
            centerMode: true,
            centerPadding: '120px',
            slidesToShow: 1
        });

    });
});