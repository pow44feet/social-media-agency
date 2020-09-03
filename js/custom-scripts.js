//Burger
$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger, .menu').toggleClass('active');
    $('.menu-list__item').toggleClass('fade');
		$('body').toggleClass('lock');
	});
});


//Dynamic adaptive
  let move_array=[];
if($('*[data-move]')){
  $.each($('*[data-move]'), function(index, val) {
    if($(this).data('move')!='' && $(this).data('move')!=null){
      $(this).attr('data-move-index',index);
      move_array[index]={
        'parent':$(this).parent(),
        "index":$(this).index()
      };
    }
  });
}
function dynamic_adaptive(){
    let w=$(window).outerWidth();
  $.each($('*[data-move]'), function(index, val) {
    if($(this).data('move')!='' && $(this).data('move')!=null){
        let dat_array=$(this).data('move').split(',');
        let dat_parent=$('.'+dat_array[0]);
        let dat_index=dat_array[1];
        let dat_bp=dat_array[2];
      if(w<dat_bp){
        if(!$(this).hasClass('js-move_done_'+dat_bp)){
          if(dat_index>0){
            $(this).insertAfter(dat_parent.find('*').eq(dat_index-1));
          }else{
            $(this).prependTo(dat_parent);
          }
          $(this).addClass('js-move_done_'+dat_bp);
        }
      }else{
        if($(this).hasClass('js-move_done_'+dat_bp)){
          dynamic_adaptive_back($(this));
          $(this).removeClass('js-move_done_'+dat_bp);
        }
      }
    }
  });
}
function dynamic_adaptive_back(el){
    let index_original=el.data('move-index');
    let move_place=move_array[index_original];
    let parent_place=move_place['parent'];
    let index_place=move_place['index'];
  if(index_place>0){
    el.insertAfter(parent_place.find('*').eq(index_place-1));
  }else{
    el.prependTo(parent_place);
  }
}
$(window).resize(function(event) {
  dynamic_adaptive();
});
  dynamic_adaptive();

//console.log(move_array);

function dynamic_adaptive_back_all(){
  $.each($('*[data-move]'), function(index, val) {
      let index_original=$(this).data('move-index');
      let move_place=move_array[index_original];
      let parent_place=move_place['parent'];
      let index_place=move_place['index'];
    if(index_place>0){
      $(this).insertAfter(parent_place.find('*').eq(index_place-1));
    }else{
      $(this).prependTo(parent_place);
    }
  });
}


//Footer-item transformation to tabs
$(document).ready(function () {

   $('.footer-item__title').click(function () {
      winWidth = $(window).width();

      if (winWidth >= 600) return;
      else {
         $(this).toggleClass('active').next().slideToggle(300);
      }
   });
   
});

   


/*$(document).ready(function(){
  $('.introduction__slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
  });
});*/


/*$(document).ready(function(){
  $(window).on("load resize", function(){
    var width = $(document).width();
    
    if (width <= 899.98) {
    var source = $(".introduction-slide-item source").remove();
    var image = $(".introduction-slide-item img").remove();
    }
  });
});*/


$(document).ready(function(){
   $(window).on("load resize", function(){
    var width = $(document).width();
    
    if (width <= 899.98) {
      $('.introduction__slider').slick('unslick');
      $(".introduction-slide-item").css('display', 'none');
    } else {
      $(".introduction-slide-item").css('display', 'block');
      $('.introduction__slider').not('.slick-initialized').slick({  
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
      });
    }
  });
});


/*
$(document).ready(function(){
   $(window).on("load resize", function(){
      var width = $(document).width();
      var wow = array();
      
      if (width <= 899.98) {
      $('.introduction__slider').slick('unslick');
      $(".introduction-slide-item").css('display', 'none');
      } else {
      $(".introduction-slide-item").css('display', 'block');
      $('.introduction__slider').not('.slick-initialized').slick({  
         arrows: false,
         autoplay: true,
         autoplaySpeed: 5000,
         fade: true,
      });
      }
   });
});


wow = new WOW(
   {
   boxClass:     'wow',      // default
   animateClass: 'animated', // default
   offset:       0,          // default
   mobile:       true,       // default
   live:         true        // default
}
)
wow.init();
*/

/*
magnific-popup initalize
$(document).ready(function() {
  $('.').magnificPopup({
  	delegate: 'a',
  	type:'image',
  	closeOnBgClick: true,
  	gallery: {
    enabled: true,
    tCounter: ''
  	},
  	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
		return item.el.attr('title');
		}
	}
  });
});
*/
