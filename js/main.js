jQuery(document).ready(function ($) {

  $('#burger').on('click', function () {
    $(this).toggleClass('active');
    $('.header-nav ').slideToggle();
  });

  $(window).on('resize', function () {
    const scrollbarWidth = 17;
    $(window).width() >= (992 - scrollbarWidth) ? $('#burger').removeClass('active') && $('.header-nav ').css('display', 'none') : null;
  });

});