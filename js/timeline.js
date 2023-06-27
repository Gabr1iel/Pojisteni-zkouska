(function ($) {
  $(function () {

    $(window).on('scroll', function () {
      fnOnScroll();
    });

    $(window).on('resize', function () {
      fnOnResize();
    });

    var Timeline = $('.js-timeline'),
      TimelineLine = $('.js-timeline-line'),
      TimelineLineProgress = $('.js-timeline-line-progress'),
      TimelinePoint = $('.js-circle-wrap'),
      TimelineSection = $('.js-timeline-section'),
      OuterHeight = $(window).outerHeight(),
      Height = $(window).height(),
      f = -1,
      agFlag = false;

    function fnOnScroll() {
      agPosY = $(window).scrollTop();

      fnUpdateFrame();
    }

    function fnOnResize() {
      agPosY = $(window).scrollTop();
      Height = $(window).height();

      fnUpdateFrame();
    }

    function fnUpdateWindow() {
      agFlag = false;

      TimelineLine.css({
        top: TimelineSection.first().find(TimelinePoint).offset().top - TimelineSection.first().offset().top,
        bottom: Timeline.offset().top + Timeline.outerHeight() - TimelineSection.last().find(TimelinePoint).offset().top
      });

      f !== agPosY && (f = agPosY, Height, fnUpdateProgress());
    }

    function fnUpdateProgress() {
      var agTop = TimelineSection.last().find(TimelinePoint).offset().top;

      i = agTop + agPosY - $(window).scrollTop();
      a = TimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
      n = agPosY - a + OuterHeight / 2;
      i <= agPosY + OuterHeight / 2 && (n = i - a);
      TimelineLineProgress.css({height: n + "px"});

      TimelineSection.each(function () {
        var agTop = $(this).find(TimelinePoint).offset().top;

        (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * OuterHeight ? $(this).addClass('active') : $(this).removeClass('active');
      })
    }

    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
      agFlag = true;
    }

  });
})(jQuery);