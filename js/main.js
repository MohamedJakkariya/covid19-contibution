$(document).ready(() => {
  // Back to top button functionality
  $('.back-to-top').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 800);

    return false;
  });

  
  // Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 130) {
      $('.back-to-top').fadeIn('slow');
      console.log($(this).scrollTop());
    }else{
      $('.back-to-top').fadeOut('slow');
    }
  });
});



  // show back to top button when page scrolls
  function scroll() {
    let position = $('html').scrollTop();
    console.log(position);
    if (position > 25) {
      $('.back-to-top').css('display', 'unset');
    } else {
      $('.back-to-top').css('display', 'none');
    }
  }