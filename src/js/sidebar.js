import jQuery from 'jquery'

class Sidebar {
    constructor(){
        jQuery(document).ready(function($){
            var controller = null;
            
            //set initial values for page width and item height
            var width = $(window).width()
            var subpageHeight = $('.subpage').height()
            var sidebarHeight = $('#consultation-sidebar').height()
            
            function initScrollMagic(){
                $('body').scrollTop( 0 );

                controller = new ScrollMagic.Controller()
                var scene = new ScrollMagic.Scene({
                    duration: subpageHeight - sidebarHeight,
                    offset: 50
                })
                .setPin("#consultation-sidebar") // pins the element for the the scene's duration
                .addTo(controller); // assign the scene to the controller
            }
            
            //767 is mobile breakpoint
            if( width > 767) {
                initScrollMagic()
            }
            
            $(window).resize(function(){
                //reset values when page size changes
                width = $(window).width()
                subpageHeight = $('.subpage').height()
                sidebarHeight = $('#consultation-sidebar').height()
                
                if( width < 768 ) {
                    if (controller) {
                        controller = controller.destroy(true)
                    }
                } else if ( width > 767 ) {
                    if ( !controller ) {
                        initScrollMagic()
                    }
                }
            })
        })
    }
}

export default Sidebar;