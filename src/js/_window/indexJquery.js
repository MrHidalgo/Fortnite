

/**
 * @description Window on load.
 */
$(window).on("load", (ev) => {
  initSectionBGResize('.beginners--main');
});


/**
 * @description Window on resize.
 */
$(window).on("resize", (ev) => {
  initSectionBGResize('.beginners--main');
});


/**
 * @description Window on scroll.
 */
$(window).on("scroll", (ev) => {});

