(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  $('#see-more').on('click', function(event) {
    const btn = `#${event.target.id}`
    if ($(btn).text() === 'See More') {
      $(btn).text('See Less')
    } else {
      $(btn).text('See More')
    }
    $('.secondary').toggleClass('hidden')
  })

  $('#about a').on('mouseenter', function(event) {
    $('#about .hover-descrip').text(event.target.id)
  })

  $('#about a').on('mouseleave', function(event) {
    $('#about .hover-descrip').text('')
  })

})(jQuery); // End of use strict
