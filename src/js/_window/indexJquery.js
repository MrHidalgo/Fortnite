

/**
 * @description Window on load.
 */
$(window).on("load", (ev) => {
  initSectionBGResize('.beginners--main, .home--leaded, .skin--like, .skin--main');
});


/**
 * @description Window on resize.
 */
$(window).on("resize", (ev) => {
  initSectionBGResize('.beginners--main, .home--leaded, .skin--like, .skin--main');
  // initSectionBGResize('.home--leaded');
});


/**
 * @description Window on scroll.
 */
$(window).on("scroll", (ev) => {});

