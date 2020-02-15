$(document).on('turbolinks:load', function(){
  $(function(){
    $('#menu_link').touchstart(function(){
      $('.icon_link_tab').addClass('open');
    });
    $('.close_btn').touchstart(function(){
      $('.icon_link_tab').removeClass('open');
    });
  });

  $(function(){
    $('a[href^=#]').touchstart(function() {
      $('.icon_link_tab').removeClass('open');
    });
  });
});