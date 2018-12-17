

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


  /**
   * @name initGrantsSquareBtn
   */
  const initGrantsSquareBtn = () => {
    $('.grants__square-btn').on('click', (ev) => {
      $('.grants__square-btn').removeClass('is-active');
      $(ev.currentTarget).addClass('is-active');
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
    initGrantsSquareBtn();
		// ==========================================

    // callback
		// ==========================================
    initLatestTabs();
  };
  initJquery();
});

