$(function() {
  $(".top-nav_menu").on('click', 'li a', function() {

    $(".link_active").removeClass('link_active');
      $(this).addClass('link_active');
  })



$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.top-nav_menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
});


  

  
  var link = $('.menu-btn');
  var link_active = $('.menu-btn_active');
  
  link.click(function(){
    link.toggleClass('menu-btn_active');
  });
  link_active.click(function(){
    link.removeClass('menu-btn_active');
  });






});


 

