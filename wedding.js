$(function() {
  //change nav when scrolling
  $(document).scroll(function() {
    var $nav = $("nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.parent().height());
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

});
