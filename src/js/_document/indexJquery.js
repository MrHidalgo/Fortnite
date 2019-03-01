

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


  /**
   * @description
   */
  const initItemNavBtn = () => {
    $('.item__nav-btn').on('click', (ev) => {
      const elem = $(ev.currentTarget);

      $('.item__nav-btn').removeClass('is-active');
      elem.addClass('is-active');
    });
  };


  /**
   * @description
   */
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


  /**
   * @description
   */
  const initSearchExpand = () => {
    $('[search-btn-js]').on('click', (ev) => {
      if($(window).width() > 767) {
        $(ev.currentTarget)
          .closest('.header__search')
          .toggleClass('is-active');
      }
    })
  };


  /**
   * @description
   */
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


  /**
   * @description
   */
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


  /**
   * @description
   */
  const initImageCompare = () => {
    $("[compare-box-js]").twentytwenty({
      click_to_move: false,
      no_overlay: true
    });

    if($('.twentytwenty-wrapper').length > 0) {
      $('.skin__description-block > .twentytwenty-wrapper').css({
        'width' : '100%',
        'maxWidth' : $('.skin__description-block img')[0].naturalWidth
      });
    }
  };


  /**
   * @description
   */
  const initTickerText = () => {
    if($('.b-skin__info--ticker').length > 0 || $('.cm-skin__info--ticker').length > 0) {

      let $tw = $('.b-skin__info--ticker, .cm-skin__info--ticker');
      let $w = $('.b-skin__info, .cm-skin__info');

      $tw.bind("transitionend", function(){
        $tw.css({
          'transition':'all linear 0s'
        });

        set();
      });

      let width = $tw.width() + 50;
      let wwidth = $w.width() + 50;

      function set(){
        $('.b-skin__info--ticker, .cm-skin__info--ticker, .b-skin__info--wticker, .cm-skin__info--wticker').find('p').css({
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


  /**
   * @description
   */
  const initDropDown = () => {
    /**
     *
     * @param ev
     * @param parent
     * @param drop
     * @param maxWidth
     */
    const dropHundler = (ev, parent, drop, maxWidth) => {
      const _el = $(ev.currentTarget),
        _parentNode = _el.closest(parent),
        _dropDownNode = _parentNode.find(drop);

      if($(window).width() < maxWidth) {
        _dropDownNode.slideToggle(350);
      }
    };

    $('.header__nav-link--wrapper > a').on('click', (ev) => {
      dropHundler(ev, '.header__nav-link--wrapper', '.dropdown-menu', 1200);
    });

    $('.item__dropdown .dropdown__btn').on('click', (ev) => {
      dropHundler(ev, '.item__dropdown', '.dropdown-menu', 768);
    });
  };


  /**
   *
   */
  const initListFilterSelect = () => {
    const selectName = $(".filter_0, .filter_1");

    selectName.selectric({
      responsive: true,
      inheritOriginalWidth: false,
      disableOnMobile: false,
      onInit: function(element, data){
        var $elm = $(element),
          $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').html($elm.attr('placeholder'));
      },
      onBeforeOpen: function(element, data){
        var $elm = $(element),
          $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').data('value', $wrapper.find('.label').html()).html($elm.attr('placeholder'));
      },
      onBeforeClose: function(element, data){
        var $elm = $(element),
          $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').html($wrapper.find('.label').data('value'));
      },
      onChange: function(element, data) {
        var $elm = $(element),
          $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').addClass('is-choose');
      }
    });
  };


  const initComboDrop = () => {
    $('[combo-drop-btn-js]').on('click', (ev) => {
      const _headerHeight = $('header').outerHeight(true),
        _bannerMainHeight = $('.body > .banner--main').outerHeight(true);

      const _btn = $(ev.currentTarget),
        _btnArr = $('[combo-drop-btn-js]'),
        _btnData = _btn.find('.combos__block-top')[0].getBoundingClientRect(),
        _btnOffsetTop = _btn.offset().top,
        _btnIconHeight = _btn.find('.icon-plus-add').outerHeight(true),
        _btnIconWidth = _btn.find('.icon-plus-add').outerWidth(true),
        _btnIconLeft = _btn.find('.icon-plus-add').offset().left;

      const _dropNode = $('[combo-drop-js]'),
        _dropCorner = $('.combo__drop-corner');

      let _classCorner = '';

      if(!_btn.hasClass('is-active')) {
        $('html,body').addClass('is-hideScroll');

        _btnArr.removeClass('is-active');
        _btnArr.find('span').removeClass('is-open');

        _btn.addClass('is-active');
        _btn.find('.icon-plus-add').parent().addClass('is-open');

        _classCorner = (_btnIconWidth >= 61) ? 'is-big' : 'is-small';

        _dropCorner.addClass(_classCorner);
        _dropCorner.css({
          top: -(_btnIconHeight) - 15,
          left: _btnIconLeft - 15
        });

        _dropNode.css({
          'top' : _btnOffsetTop+ ((_btnData.height / 2) + (_btnIconHeight / 2))
        }).hide().slideDown(350);
      }
    });

    $('[combo-drop-cancel-js], [combo-drop-ok-js]').on('click', (ev) => {
      $('.combo__drop').slideUp(350);
      $('[combo-drop-btn-js]').removeClass('is-active');
      $('[combo-drop-btn-js]').find('span').removeClass('is-open');
      $('[combo-drop-skin-js]').removeClass('is-active');
      $('html,body').removeClass('is-hideScroll');
      $('.combo__drop-corner').removeClass('is-small is-big')
    });

    $('[combo-drop-skin-js]').on('click', (ev) => {
      $('[combo-drop-skin-js]').removeClass('is-active');
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
		// ==========================================

    // lib
    initHamburger();
    // initSwiper();
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
    // initTickerText();
    initDropDown();
    initComboDrop();

    $('body').on('click', function (e) {
      const className = ".header__search, .combo__custom .combos__block--custom, .combo__drop";

      if (!$(e.target).closest(className).length) {
        $('.header__search').removeClass('is-active');
        $('.combo__drop').slideUp(350);
        $('[combo-drop-btn-js]').removeClass('is-active');
        $('[combo-drop-btn-js]').find('span').removeClass('is-open');
        $('[combo-drop-skin-js]').removeClass('is-active');
        $('html,body').removeClass('is-hideScroll');
        $('.combo__drop-corner').removeClass('is-small is-big')
      }
    });
  };
  initJquery();
});

