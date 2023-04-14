// Scrollng

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      var target = this.hash;
      var $target = $(target);
      $('html, body').animate({
        'scrollTop': $target.offset().top
      }, 1000, 'swing');
    });
  });

  // Image Slider
 
  $(document).ready(function(){
    $('.carousel').slick({
      dots: true, // add navigation dots
      infinite: true, // enable infinite scrolling
      speed: 500, // set animation speed
      slidesToShow: 3, // set number of visible slides at a time
      slidesToScroll: 1 // set number of slides to scroll at a time
    })
  });

  // GO TO TOP BUTTON

  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, scrollTop - scrollTop / 8);
  }
}

// COUPON SLIDER

$(document).ready(function(){
  $('.slick-carousel').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
