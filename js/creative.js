/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(function () {
    var body = $('#change');
    var backgrounds = [
      'url(img/home2.jpg)','url(img/home1.jpg)', 'url(img/home3.jpg)',
     ];
    var current = 0;

    function nextBackground() {
        body.css({
            'background': backgrounds[current = ++current % backgrounds.length],
           'position': "relative", 'width': "100%",'height': "100%", 'background-position': "center",
            'background-repeat': "no-repeat",'-webkit-background-size': "cover", '-moz-background-size': "cover",
            'background-size': "cover", '-o-background-size': "cover"
       });
 
        setTimeout(nextBackground, 3000);
    }
    setTimeout(nextBackground, 3000);
         body.css({'background': backgrounds[0],      'position': "relative", 'width': "100%",'height': "100%", 'background-position': "center",
            'background-repeat': "no-repeat",'-webkit-background-size': "cover", '-moz-background-size': "cover",
            'background-size': "cover", '-o-background-size': "cover"
});
//   header {
//     position: relative;
//     width: 100%;
//     min-height: auto;
//     text-align: center;
//     color: #fff;
//     background-image: url(../img/splash.jpg);
//     background-position: center;
//     -webkit-background-size: cover;
//     -moz-background-size: cover;
//     background-size: cover;
//     -o-background-size: cover;
// }



});

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
