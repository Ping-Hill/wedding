$(function() {
  //change nav when scrolling
  $(document).scroll(function() {
    var $nav = $("nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.parent().height());
    $('header > h1').toggleClass('mediaQueryScroll', $(this).scrollTop() > $nav.parent().height());
  });

  // Smooth scroll
  $('nav a').click(function(e) {
    e.preventDefault();
    var $thisTarget = $(this).attr('href'),
      $targetOffset = $($thisTarget).offset().top
                      - $('nav').height();
    $('html, body').animate({
      scrollTop: $targetOffset
    }, 800);
  });

  //sub-nav menus
  $('.detailsContainer').children().hover(function () {
    $(this).parent().children().last().addClass("detailsActive");
    $(this).parent().children().first().css("backgroundColor", "rgba(233, 233, 233, 0.8)");
  },function () {
    $(this).parent().children().first().css("backgroundColor", "initial");
    $(this).parent().children().last().removeClass("detailsActive");
  })
});
