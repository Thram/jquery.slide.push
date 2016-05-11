/**
 * Created by thram on 11/05/16.
 */
(function ($) {

  var $body  = $('body');
  var $menus = $('.sp-menu');

  var toggleState = function ($menu) {
    $menu.toggleClass('sp-menu-open');
    if ($menu.hasClass('push')) {
      var pushDirection = 'right';
      if ($menu.hasClass('sp-menu-right')) pushDirection = 'left';
      if ($menu.hasClass('sp-menu-left')) pushDirection = 'right';
      if ($menu.hasClass('sp-menu-top')) pushDirection = 'bottom';
      if ($menu.hasClass('sp-menu-bottom')) pushDirection = 'top';
      $body.toggleClass('sp-menu-push-to' + pushDirection);
    }
  };

  $menus.each(function () {
    var $menu = $(this);
    if ($menu.hasClass('push')) {
      $body.addClass('sp-menu-push')
    }

    $(document).mouseup(function (e) {
      if ($menu.hasClass('sp-menu-open') && !$menu.is(e.target) && $menu.has(e.target).length === 0) {
        toggleState($menu);
      }
    });

    $menu.find('.handle').click(function () {
      toggleState($menu);
    });
  });
})(jQuery);
