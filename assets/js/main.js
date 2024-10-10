(function ($) {
"user strict";


// preloader
$(window).on('load', function () {
  $('.coffeeloader').fadeOut(1000);
});

//Create Background Image
(function background() {
    let img = $('.bg-img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
})();

// aos
AOS.init();

})(jQuery);

AOS.init({
  offset: 120,
  delay: 0, 
  duration: 2000, 
  easing: 'ease',
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});