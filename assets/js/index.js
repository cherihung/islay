/**
 * Main JS file for Islay theme
 * Version: 0.0.1
 * Author: Chienyi Cheri Hung @cyhung
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
      //extend .site-content to window size if it is less than window height
      if($(window).width() > 640) {
            var mainObj = $('.site-content');
            var mainObj_height = mainObj.height();
            if(mainObj_height < $(window).height()) {
              mainObj.css('height',$(window).height())
            }
      }
    });
    $(window).load(function() {
        $(window).scroll( function(){
          //toggle the up arrow anchor for jumping back to top of page
          var top_of_window = $(window).scrollTop();
          var anchor = $('.footer-jump');
             if(top_of_window > 0) {
                $(anchor).show('fast');
              } else {
                $(anchor).hide('fast');
              }
        });
        //smooth scroll
        $('a[href*=#]:not([href=#])').click(function() {
         event.preventDefault();
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
          }
        }
      }); 
   });
 
}(jQuery));

// TODO: need finishing
/*
function scrollIcon(p) {
  var icon = $('.blog-logo-bg');
  var pos;           
  if(p < 100) {
      pos  = 0+'px'; //-(p+10)+'px';                     
      icon.css('background-position', pos+' -20px');
  } else if(p >= 500) {
      pos  = -510+'px'; //-(p+10)+'px';                     
      icon.css('background-position', pos+' -20px');
  } else {
      pos  = -(p+10)+'px';                     
      icon.css('background-position', pos+' -20px');
  }
      
}*/



(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');