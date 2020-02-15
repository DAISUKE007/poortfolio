$(document).on('turbolinks:load', function(){
  $(function(){
    $(document).on("click", "#menu_link", function() {
      $('.icon_link_tab').addClass('open');
    });
    $(document).on("click", ".close_btn", function() {
      $('.icon_link_tab').removeClass('open');
    });
  });

  $(function(){
    $(document).on("click", "a[href^=#]", function() {
      $('.icon_link_tab').removeClass('open');
    });
  });
});