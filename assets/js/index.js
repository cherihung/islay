/**
 * Main JS file for Islay theme
 * Version: 0.0.1
 * Author: Chienyi Cheri Hung @cyhung
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
       
    });
    $(window).load(function() {
      /* $(window).scroll( function(){
        var top_of_window = $(window).scrollTop();
           if(top_of_window > 0 && top_of_window <= 500) {
              scrollIcon(top_of_window);
            }
   
        }); */
   });
  

}(jQuery));

// TODO: need finesse 
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
      
}

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