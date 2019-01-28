

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
      const elem = $(ev.currentTarget),
        _elemID = elem.data('id'),
        _elemTabs = $('[data-content="' + _elemID + '"]');

      $('.latest__content').removeClass('is-active');
      _elemTabs.toggleClass('is-active');

      $('.latest__btn').removeClass('is-active');
      elem.addClass('is-active');
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


  const initGraph = () => {
    let graph0 = document.getElementById("graph-0"),
      graph1 = document.getElementById("graph-1"),
      graph2 = document.getElementById("graph-2");

    if($('#graph-0').length > 0) {
      new Chart(graph0, {
        type: "doughnut",
        data: {
          labels: [
            'Outfits',
            'Gliders',
            'Pickaxes',
            'Emotes'
          ],
          datasets: [{
            data: [4,2,3,2],
            borderWidth: 2,
            backgroundColor: [
              '#e98849',
              '#c361f3',
              '#3b9be4',
              '#85e430'
            ]
          }]
        }
      });

      new Chart(graph1, {
        type: "doughnut",
        data: {
          labels: [
            'Daily',
            'Featured'
          ],
          datasets: [{
            data: [5,6],
            borderWidth: 2,
            backgroundColor: [
              '#a8c7bb',
              '#ffa69e',
            ]
          }]
        }
      });

      new Chart(graph2, {
        type: "doughnut",
        data: {
          labels: [
            'Legendary',
            'Rare',
            'Epic',
            'Uncommon'
          ],
          datasets: [{
            data: [2,1,6,2],
            borderWidth: 2,
            backgroundColor: [
              '#800020',
              '#d8beca',
              '#ff8d00',
              '#b2edc9'
            ]
          }]
        }
      });
    }
  };


  const initFilterRadioBtn = () => {
    $(window).on('load', () => {
      const checkboxBtn = $('input[type="checkbox"]');

      for(let el of checkboxBtn) {
        if($(el).is(':disabled')) {
          $(el).closest('.c-form__field').addClass('is-disabled');
        }
      }
    });

    $('input[type="checkbox"]').on('change', (ev) => {
      const elem = $(ev.currentTarget),
        elemParent = elem.closest('.filter__category-main'),
        elemParentID = $(elemParent).data('checkboxhead');

      const checkboxParent = $('.filter__category-checkbox[data-checkboxBody="' + elemParentID + '"]'),
        checkboxBtnArr = checkboxParent.find('input[type="checkbox"]');

      if(elem.closest('.filter__category-main')) {
        if($(elem).is(':checked'))  {
          for(let el of checkboxBtnArr) {
            if($(el).is(':disabled')) {
              $(el).closest('.c-form__field').removeClass('is-disabled');
              $(el)
                .prop('disabled', false).change()
                .prop('checked', true).change();
            }
          }
        } else {
          for(let el of checkboxBtnArr) {
            $(el).closest('.c-form__field').addClass('is-disabled');
            $(el)
              .prop('disabled', true).change()
              .prop('checked', false).change();
          }
        }
      }
    })
  };


  const initListFilterSelect = () => {
    $('.filter_0').selectpicker();
    $('.filter_1').selectpicker();
  };

  const initImageCompare = () => {
    $("[compare-box-js]").twentytwenty({
      click_to_move: true,
      no_overlay: true
    });
  };

  const initTickerText = () => {
    if($('.b-skin__info--ticker').length > 0) {
      let $tw = $('.b-skin__info--ticker');
      let $w = $('.b-skin__info');

      $tw.bind("transitionend", function(){
        $tw.css({
          'transition':'all linear 0s'
        });

        set();
      });

      let width = $tw.width() + 50;
      let wwidth = $w.width() + 50;

      function set(){
        $('.b-skin__info--ticker, .b-skin__info--wticker').find('p').css({
          'opacity' : '1'
        });

        $tw.css({
          'transform':'translate3d(' + wwidth + 'px,0,0)'
        });

        window.setInterval(function(){
          $tw.css({
            'transition':'all linear ' + (((width + wwidth) / 250) * 2) + 's'
          });
          $tw.css({
            'transform':'translate3d(' + (width *- 1) + 'px,0,0)'
          });
        },1)
      }

      set();
    }
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
    initItemNavBtn();
    initVideoLeakedSub();
    initSearchExpand();
    initGraph();
    initFilterRadioBtn();
    initListFilterSelect();
    initImageCompare();
    initTickerText();

    $('body').on('click', function (e) {
      const className = ".header__search";

      if (!$(e.target).closest(className).length) {
        $('.header__search').removeClass('is-active');
      }
    });
  };
  initJquery();
});

