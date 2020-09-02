$(document).ready(function () {
   $(".introduction-slide img").css({
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      'width': 'auto',
      'transform': 'translate(-50%, -50%)'
   });
});


//Add margin .services-line__description because of IE lost block's sizes after dynamic adaptive operation on 800px screen width
//$(document).ready(function () {
   function marginMove() {
      if ($(window).width() > '800') {
         $('.services-line__description').css('margin-bottom', '0')
      }
      else {
         $('.services-line__description').css('margin-bottom', '200px')
      }
   }
   
   $(window).on('load resize', marginMove);
//});

