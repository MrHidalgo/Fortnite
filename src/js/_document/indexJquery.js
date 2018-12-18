

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
  /**
   * @name initLatestTabs
   */
  const initLatestTabs = () => {
    $('.latest__btn').on('click', (ev) => {
      const elem = $(ev.currentTarget);

      $('.latest__btn').removeClass('is-active');
      elem.addClass('is-active');
    });
  };
	/*
	* CALLBACK :: end
	* ============================================= */



  /**
   * @description Init all method
   */
  const initJquery = () => {
    // default
    initWebFontLoader();
    initPreventBehavior();
    initSvg4everybody();
		// ==========================================

    // lib
    initObjectFitImages();
    initValidation();
    initHamburger();
    initStellar();
    initSwiper();
		// ==========================================

    // callback
		// ==========================================
    initLatestTabs();
  };
  initJquery();
});

