//ウィンドウの高さを取得する
$(function(){
  $('.boxL h3 p').addClass('move');
  $(window).scroll(function(){
    $(".boxL").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find("h3 p").removeClass('move');
      } else {
        $(this).find("h3 p").addClass('move');
      }
    });
  });
});