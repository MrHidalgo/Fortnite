

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

  const listFilterSoldierBtn = () => {
    $('.filter__category-soldier > a').on('click', (ev) => {
      const elem = $(ev.currentTarget);

      $('.filter__category-soldier > a').removeClass('is-active');
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
    listFilterSoldierBtn();
  };
  initJquery();
});

