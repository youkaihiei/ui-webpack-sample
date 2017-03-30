import jQuery from 'jquery';

class Global {
    constructor(){
        /*! Owl Carousel Call */
        jQuery(document).ready(function($){

            //CHANGE NAVBAR LOGO ON SCROLL
            $(window).scroll(function() {
                if ($(".navbar").offset().top > 50) {
                    $('.small-logo').removeClass('not-shown');
                    $('.big-logo').addClass('not-shown');
                    $('.navbar-nav>li').css({'padding-top':'20px', 'padding-bottom':'20px'})
                }
                else {
                    $('.big-logo').removeClass('not-shown');
                    $('.small-logo').addClass('not-shown');
                    $('.navbar-nav>li').css({'padding-top':'45px', 'padding-bottom':'45px'})
                }
            });

            //set active class for current page nav link
            var pathname = window.location.href.slice(0, -1)

            $(`ul.navbar-nav li a[href="${pathname}"]`).addClass('active')

        });
    }
}

export default Global;