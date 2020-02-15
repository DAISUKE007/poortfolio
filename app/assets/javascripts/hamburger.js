$(document).on('turbolinks:load', function(){
  $(function(){
    $('#menu_link').touchend(function(){
      $('.icon_link_tab').addClass('open');
    });
    $('.close_btn').touchend(function(){
      $('.icon_link_tab').removeClass('open');
    });
  });

  $(function(){
    $('a[href^=#]').touchend(function() {
      $('.icon_link_tab').removeClass('open');
    });
  });
});