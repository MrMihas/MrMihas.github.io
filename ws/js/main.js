jQuery(document).ready(function(){
  $('[data-target="tarif"]').on('click', function(event){
event.preventDefault();
$('.modal').show();
  })

  $('.close').on('click',function() {
    event.preventDefault();
    $('.modal').hide();
  });
	
	
	
	
// 	 $('.menu-item-has-children').click(function(){
// 		  $('.sub-menu').removeClass('sub-menu_active');
// 				  $(this).addClass('sub-menu_active', 500);

// 				  });
				 
// 	$('.menu-item-has-children').click(function(){
// 		$('.top-nav').addClass('testHeight');
// 	})
	
	
 
 if($(window).width() < 768){
$('.menu-item-has-children').click(function(){
  $('.menu-item-has-children .sub-menu li').slideUp();
  $(this).find('li').slideToggle();
});
 };
	
	   $(".menu-item-has-children > a").attr("href", "javascript:void(0);");
});



$(document).ready(function() {
  
  var $slider = $(".slider"),
      $slideBGs = $(".slide__bg"),
      diff = 0,
      curSlide = 0,
      numOfSlides = $(".slide").length-1,
      animating = false,
      animTime = 500,
      autoSlideTimeout,
      autoSlideDelay = 6000,
      $pagination = $(".slider-pagi");
  
  function createBullets() {
    for (var i = 0; i < numOfSlides+1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-"+i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  };
  
  createBullets();
  
  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
  };
  
  function autoSlide() {
    autoSlideTimeout = setTimeout(function() {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  };
  
  autoSlide();
  
  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-"+curSlide).addClass("active");
      setTimeout(function() {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlideTimeout);
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-"+curSlide).addClass("active");
    $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
    $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
    diff = 0;
    autoSlide();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function(e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;
    
    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
      $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
      $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
    });
  });
  
  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-control", function() {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-pagi__elem", function() {
    curSlide = $(this).data("page");
    changeSlides();
  });
  
});




jQuery(document).ready(function(){
  var modalTriggerBts = $('a[data-type="cd-modal-trigger"]'),
    coverLayer = $('.cd-cover-layer');
  
  /*
    convert a cubic bezier value to a custom mina easing
    http://stackoverflow.com/questions/25265197/how-to-convert-a-cubic-bezier-value-to-a-custom-mina-easing-snap-svg
  */
  var duration = 600,
    epsilon = (1000 / 60 / duration) / 4,
    firstCustomMinaAnimation = bezier(.63,.35,.48,.92, epsilon);

  modalTriggerBts.each(function(){
    initModal($(this));
  });

  function initModal(modalTrigger) {
    var modalTriggerId =  modalTrigger.attr('id'),
      modal = $('.cd-modal[data-modal="'+ modalTriggerId +'"]'),
      svgCoverLayer = modal.children('.cd-svg-bg'),
      paths = svgCoverLayer.find('path'),
      pathsArray = [];
    //store Snap objects
    pathsArray[0] = Snap('#'+paths.eq(0).attr('id')),
    pathsArray[1] = Snap('#'+paths.eq(1).attr('id')),
    pathsArray[2] = Snap('#'+paths.eq(2).attr('id'));

    //store path 'd' attribute values 
    var pathSteps = [];
    pathSteps[0] = svgCoverLayer.data('step1');
    pathSteps[1] = svgCoverLayer.data('step2');
    pathSteps[2] = svgCoverLayer.data('step3');
    pathSteps[3] = svgCoverLayer.data('step4');
    pathSteps[4] = svgCoverLayer.data('step5');
    pathSteps[5] = svgCoverLayer.data('step6');
    
    //open modal window
    modalTrigger.on('click', function(event){
      event.preventDefault();
      modal.addClass('modal-is-visible');
      coverLayer.addClass('modal-is-visible');
      animateModal(pathsArray, pathSteps, duration, 'open');
    });

    //close modal window
    modal.on('click', '.modal-close', function(event){
      event.preventDefault();
      modal.removeClass('modal-is-visible');
      coverLayer.removeClass('modal-is-visible');
      animateModal(pathsArray, pathSteps, duration, 'close');
    });
  }

  function animateModal(paths, pathSteps, duration, animationType) {
    var path1 = ( animationType == 'open' ) ? pathSteps[1] : pathSteps[0],
      path2 = ( animationType == 'open' ) ? pathSteps[3] : pathSteps[2],
      path3 = ( animationType == 'open' ) ? pathSteps[5] : pathSteps[4];
    paths[0].animate({'d': path1}, duration, firstCustomMinaAnimation);
    paths[1].animate({'d': path2}, duration, firstCustomMinaAnimation);
    paths[2].animate({'d': path3}, duration, firstCustomMinaAnimation);
  }

  function bezier(x1, y1, x2, y2, epsilon){
    //https://github.com/arian/cubic-bezier
    var curveX = function(t){
      var v = 1 - t;
      return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
    };

    var curveY = function(t){
      var v = 1 - t;
      return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
    };

    var derivativeCurveX = function(t){
      var v = 1 - t;
      return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (- t * t * t + 2 * v * t) * x2;
    };

    return function(t){

      var x = t, t0, t1, t2, x2, d2, i;

      // First try a few iterations of Newton's method -- normally very fast.
      for (t2 = x, i = 0; i < 8; i++){
        x2 = curveX(t2) - x;
        if (Math.abs(x2) < epsilon) return curveY(t2);
        d2 = derivativeCurveX(t2);
        if (Math.abs(d2) < 1e-6) break;
        t2 = t2 - x2 / d2;
      }

      t0 = 0, t1 = 1, t2 = x;

      if (t2 < t0) return curveY(t0);
      if (t2 > t1) return curveY(t1);

      // Fallback to the bisection method for reliability.
      while (t0 < t1){
        x2 = curveX(t2);
        if (Math.abs(x2 - x) < epsilon) return curveY(t2);
        if (x > x2) t0 = t2;
        else t1 = t2;
        t2 = (t1 - t0) * .5 + t0;
      }

      // Failure
      return curveY(t2);

    };
  };
});
