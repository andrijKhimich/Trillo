$(document).ready(function(){


  //slick slider
  // $('.slider').slick({
  //   infinite: true,
  //   speed: 500,
  //   // fade: true,
  //   cssEase: 'linear',
  //   prevArrow: $('.prew'),
  //   nextArrow: $('.next'),
  //   slidesToShow: 2,
  //   slidesToScroll: 1
  // });

  //  MODAL
  if ($('.main-page').length) {
    $("#application").iziModal({
      radius: 5,
      zindex: 5,
      width: 800,
      overlayColor: 'rgba(31,45,64,0.6)',
      transitionIn: 'fadeInDown',
      transitionOut: 'fadeOut',
      // transitionInOverlay: 'bounceInDown',
      // transitionOutOverlay: 'bounceOutDown',
    });
  //   $("#call").iziModal({
  //     radius: 5,
  //     zindex: 5,
  //     width: 800,
  //     overlayColor: 'rgba(31,45,64,0.6)',
  //     transitionIn: 'fadeInDown',
  //     transitionOut: 'fadeOut',
  //     // transitionInOverlay: 'bounceInDown',
  //     // transitionOutOverlay: 'bounceOutDown',
  //   });
  //   $("#application-answer").iziModal({
  //     radius: 5,
  //     zindex: 5,
  //     width: 800,
  //     overlayColor: 'rgba(31,45,64,0.6)',
  //     transitionIn: 'fadeIn',
  //     transitionOut: 'fadeOut',
  //     // transitionInOverlay: 'bounceInDown',
  //     // transitionOutOverlay: 'bounceOutDown',
  //   });
  //   $("#call-answer").iziModal({
  //     radius: 5,
  //     zindex: 5,
  //     width: 800,
  //     overlayColor: 'rgba(31,45,64,0.6)',
  //     transitionIn: 'fadeIn',
  //     transitionOut: 'fadeOut',
  //     // transitionInOverlay: 'bounceInDown',
  //     // transitionOutOverlay: 'bounceOutDown',
  //   });
  //   $("#modal-thanks").iziModal({
  //     radius: 5,
  //     zindex: 5,
  //     width: 800,
  //     overlayColor: 'rgba(31,45,64,0.6)',
  //     transitionIn: 'fadeInDown',
  //     transitionOut: 'fadeOut',
  //     // transitionInOverlay: 'bounceInDown',
  //     // transitionOutOverlay: 'bounceOutDown',
  //   });
  }
});

