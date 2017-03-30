import jQuery from 'jquery';

class Home {
    constructor(){
        jQuery(document).ready(function($) {

            var $slideshowContainers = $('.slideshow-container');
            var $leftSlider = $('.left-slider')
            var $rightSlider = $('.right-slider')
            var $sculpsure = $('a.sculpsure')
            var $sclerotherapy = $('a.sclerotherapy')
            var $veingogh = $('a.veingogh')
            var $downArrow = $('#down-arrow')
            //disable user events during animations
            var animated = false
            //slideshow counter
            var counter = 0
            var $scheduleBtn = $('.schedule-btn')
            
            //scroll to contact form on button click
            $scheduleBtn.each(function(index){
                $(this).on('click', function(e){
                    e.preventDefault()
                    console.log('click')
                    $('body,html').animate({
                        scrollTop: $('#consultation').offset().top - 50,
                    }, 1000)
                })
            })
            
            //arrow to scroll to top of slideshow
            $downArrow.click(function() {
                $('html, body').animate({
                    scrollTop: $("#slideshow").offset().top - $('.navbar').height()
                }, 2000);
            });
            
            //slideshow progress bar animation
            function progressBar () {
                $('div.bar').css('width', '0')
                $('div.bar').animate({
                    width: "100%"
                }, {duration: 9500, easing: 'swing', queue: false});
            }
            
            function showSlide(slideIndex) {
                $('div.bar').fadeIn({duration: 1000, queue: false})
                $slideshowContainers
                    .eq(slideIndex%$slideshowContainers.length)
                    .fadeIn(1000, function(){
                        animated = false;
                        $('a.' + this.classList[1]).addClass('active')
                    })     
            }
            
            function hideSlide(slideIndex, direction) {
                $('div.bar').fadeOut({duration: 1000, queue: false})
                $slideshowContainers
                    .eq(slideIndex%$slideshowContainers.length)
                    .fadeOut(1000, function(){
                        $('a.' + this.classList[1]).removeClass('active')
                        if(direction=='forward'){
                            slideIndex++
                        } else if(direction=='back') {
                            slideIndex--
                        } else {
                            slideIndex = direction
                        }
                        showSlide(slideIndex)
                        progressBar()
                    });
            }
            
            //initialize slideshow on pageload
            var slideIndex = 0;
            showSlide(slideIndex)
            progressBar()
            
            //set interval for slides every 10 seconds
        //    setInterval(function(){
        //            counter++
        //            if(counter%10 == 0 && !animated) {
        //                animated = true
        //                hideSlide(slideIndex, 'forward')
        //                slideIndex++
        //            } 
        //    }, 1000)
            
            
            //slideshow controls
            $leftSlider.on('click', function(e){
                e.preventDefault()
                if(!animated) {
                    animated = true
                    counter = 0
                    hideSlide(slideIndex, 'back')
                    slideIndex-- 
                }
                
            })
            
            $rightSlider.on('click', function(e){
                e.preventDefault()
                if(!animated) {
                    animated = true
                    counter = 0
                    hideSlide(slideIndex, 'forward')
                    slideIndex++
                }
            })
            
            $sculpsure.on('click', function(e){
                e.preventDefault()
                if(!animated && (!$(this).hasClass('active'))) {
                    animated = true
                    counter = 0
                    hideSlide(slideIndex, 0)
                    slideIndex = 0
                }
            })
            
            $sclerotherapy.on('click', function(e){
                e.preventDefault()
                if(!animated && (!$(this).hasClass('active'))) {
                    animated = true
                    counter = 0
                    hideSlide(slideIndex, 1)
                    slideIndex=1
                }
            })
            
            $veingogh.on('click', function(e){
                e.preventDefault()
                if(!animated && (!$(this).hasClass('active'))) {
                    animated = true
                    counter = 0
                    hideSlide(slideIndex, 2)
                    slideIndex = 2
                }
            })
            
        });
    }
}

export default Home;
