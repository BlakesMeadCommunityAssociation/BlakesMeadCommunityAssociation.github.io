requirejs(['jquery'], function ($) {
  'use strict';

  var threshold = 60,
      pastThreshold = false,
      toggleClass = 'small-header',
      $window = $(window),
      $attached = $('body');

  $window.scroll(function () {
    var y = $window.scrollTop();

    if (!pastThreshold && y >= threshold) {
      pastThreshold = true;
      $attached.addClass(toggleClass);
    } else if (pastThreshold && y < threshold) {
      pastThreshold = false;
      $attached.removeClass(toggleClass);
    }
  });
});
