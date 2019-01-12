

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

  const initFilterCollapse = () => {
    $('.filter__category-title').on('click', (ev) => {
      const elem = $(ev.currentTarget),
        collapseContent = elem.siblings('.filter__category-content');

      if($(window).width() <= 575) {
        collapseContent.slideToggle(300);
      }
    });
  };

  const initItemNavBtn = () => {
    $('.item__nav-btn').on('click', (ev) => {
      const elem = $(ev.currentTarget);

      $('.item__nav-btn').removeClass('is-active');
      elem.addClass('is-active');
    });
  };

  const initVideoLeakedSub = () => {
    const vid = document.getElementById("video");

    /**
     *
     */
    $('[play-video-js]').on('click', (ev) => {
      const elem = $(ev.currentTarget);

      if(!vid.paused) {
        vid.pause();
      } else {
        vid.play();
        elem.fadeOut(300);
      }
    });

    /**
     *
     */
    $(vid).on('click', () => {
      if(!vid.paused) {
        vid.pause();
        $('[play-video-js]').fadeIn(300);
      }
    });
  };

  const initSearchExpand = () => {
    $('[search-btn-js]').on('click', (ev) => {
      if($(window).width() > 767) {
        $(ev.currentTarget)
          .closest('.header__search')
          .toggleClass('is-active');
      }
    })
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
    initFilterCollapse();
    initItemNavBtn();
    initVideoLeakedSub();
    initSearchExpand();

    $('body').on('click', function (e) {
      const className = ".header__search";

      if (!$(e.target).closest(className).length) {
        $('.header__search').removeClass('is-active');
      }
    });
  };
  initJquery();
});

