"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

  var btn = document.querySelector("[hamburger-js]"),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

  /**
    * @description
   */
  if (btn) {
    btn.addEventListener("click", function (ev) {
      var elem = ev.currentTarget;

      elem.classList.toggle("is-active");
      mobileContainer.classList.toggle("is-open");

      if (elem.classList.contains('is-active')) {
        $(elem).attr('style', 'transform:translateX(-' + ($(mobileContainer).outerWidth(true) - 15) + 'px)');
      } else {
        $(elem).attr('style', '');
      }

      hideScrollContainer.forEach(function (val, idx) {
        val.classList.toggle("is-hideScroll");
      });
    });

    $(window).on('resize', function () {
      if ($(window).width() < 1200) {
        if (btn.classList.contains('is-active')) {
          $(btn).attr('style', 'transform:translateX(-' + ($(mobileContainer).outerWidth(true) - 15) + 'px)');
        } else {
          $(btn).attr('style', '');
        }
      }
    });
  }
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSectionBGResize
 *
 * @param parentNodeName {String} add parent name for method, before call.
 *
 * @description
 */
var initSectionBGResize = function initSectionBGResize(parentNodeName) {
  if ($('[section-resize-js]').length) {
    var sectionResize = $('[section-resize-js]');

    var sectionRight = $('[section-right-js]'),
        widthElem = sectionRight[0].getBoundingClientRect().left,
        leftOffset = sectionResize.closest(parentNodeName)[0].getBoundingClientRect().left;

    if ($(window).width() > 991) {
      sectionResize.css({
        'left': -leftOffset,
        'width': widthElem
      });
    }
  }
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper slider
 */
var initSwiper = function initSwiper() {

  /**
   * @description Rewards grants section slider
   *
   * @param paginationBool
   * @returns {{pagination: *, freeMode: boolean, loop: boolean, grabCursor: boolean, effect: string, slidesPerGroup: number, watchOverflow: boolean, normalizeSlideIndex: boolean, breakpoints: {"991": {slidesPerGroup: number, slidesPerView: number}, "575": {slidesPerGroup: number, slidesPerView: number}, "424": {slidesPerGroup: number, slidesPerView: number}, "1199": {slidesPerGroup: number, slidesPerView: number}, "767": {slidesPerGroup: number, slidesPerView: number}}, slidesPerView: number, spaceBetween: number}}
   */
  var swiperRewardsOpt = function swiperRewardsOpt() {
    var paginationBool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return {
      loop: false,
      watchOverflow: true,
      normalizeSlideIndex: true,
      grabCursor: true,
      freeMode: true,
      effect: 'slide',
      slidesPerView: 8,
      spaceBetween: 0,
      slidesPerGroup: 8,
      pagination: paginationBool ? { el: '.grants__square', clickable: true } : '',
      breakpoints: {
        1199: {
          slidesPerView: 5,
          slidesPerGroup: 5
        },
        991: {
          slidesPerView: 7,
          slidesPerGroup: 7
        },
        767: {
          slidesPerView: 5,
          slidesPerGroup: 5
        },
        575: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        424: {
          slidesPerView: 1,
          slidesPerGroup: 1
        }
      }
    };
  };

  var swiperGuestBlueLine = new Swiper('.swiper-container--grantsBlueLine', swiperRewardsOpt(true));
  var swiperGuestOrangeLine = new Swiper('.swiper-container--grantsOrangeLine', swiperRewardsOpt());

  if ($('.swiper-container--grantsBlueLine').length > 0) {
    swiperGuestBlueLine.controller.control = [swiperGuestOrangeLine];
    swiperGuestOrangeLine.controller.control = [swiperGuestBlueLine];
  }

  /**
   * @description Features section slider
   *
   * @returns {{navigation: {nextEl: string, prevEl: string}, freeMode: boolean, loop: boolean, grabCursor: boolean, effect: string, watchOverflow: boolean, normalizeSlideIndex: boolean, slidesPerView: number, spaceBetween: number}}
   */
  var swiperFeaturesOpt = function swiperFeaturesOpt(autoDelay) {
    return {
      loop: true,
      watchOverflow: true,
      normalizeSlideIndex: true,
      grabCursor: true,
      freeMode: false,
      effect: 'slide',
      autoplay: {
        delay: autoDelay,
        disableOnInteraction: false
      },
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function renderFraction(currentClass, totalClass) {
          return '<div class="b-skin__out">' + '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>' + '</div>';
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };
  };

  var swiperFeatures0 = new Swiper('.swiper-container--featured-0', swiperFeaturesOpt(4000));
  var swiperFeatures1 = new Swiper('.swiper-container--featured-1', swiperFeaturesOpt(5000));
  var swiperFeatures2 = new Swiper('.swiper-container--featured-2', swiperFeaturesOpt(6000));
  var swiperDaily0 = new Swiper('.swiper-container--daily-0', swiperFeaturesOpt(3000));
  var swiperDaily1 = new Swiper('.swiper-container--daily-1', swiperFeaturesOpt(5500));
  var swiperDaily2 = new Swiper('.swiper-container--daily-2', swiperFeaturesOpt(8000));
  var swiperDaily3 = new Swiper('.swiper-container--daily-3', swiperFeaturesOpt(7500));
};

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

  /**
    * @description
   */
  WebFont.load({
    google: {
      families: ['Anton:400', 'Ubuntu:300,400,500,700', 'Rajdhani:300,400,500,600,700']
    }
  });

  /**
    * @description
   */
  // const WebFontConfig = {
  //   custom: {
  //     families: [
  //       'Lato:n1,n3,n4,n5,n6,n7,n9'
  //     ]
  //   }
  // };
};

/**
 * @description Window on load.
 */
$(window).on("load", function (ev) {
  // initSectionBGResize('.beginners--main, .home--leaded, .skin--like, .skin--main');
});

/**
 * @description Window on resize.
 */
$(window).on("resize", function (ev) {
  // initSectionBGResize('.beginners--main, .home--leaded, .skin--like, .skin--main');
});

/**
 * @description Window on scroll.
 */
$(window).on("scroll", function (ev) {});

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = $(document),
      _window = $(window);

  /*
  * =============================================
  * CALLBACK :: start
  * ============================================= */
  /**
   * @name initLatestTabs
   */
  var initLatestTabs = function initLatestTabs() {
    $('.latest__btn').on('click', function (ev) {
      var elem = $(ev.currentTarget),
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
  var initItemNavBtn = function initItemNavBtn() {
    $('.item__nav-btn').on('click', function (ev) {
      var elem = $(ev.currentTarget);

      $('.item__nav-btn').removeClass('is-active');
      elem.addClass('is-active');
    });
  };

  /**
   * @description
   */
  var initVideoLeakedSub = function initVideoLeakedSub() {
    var vid = document.getElementById("video");

    /**
     *
     */
    $('[play-video-js]').on('click', function (ev) {
      var elem = $(ev.currentTarget);

      if (!vid.paused) {
        vid.pause();
      } else {
        vid.play();
        elem.fadeOut(300);
      }
    });

    /**
     *
     */
    $(vid).on('click', function () {
      if (!vid.paused) {
        vid.pause();
        $('[play-video-js]').fadeIn(300);
      }
    });
  };

  /**
   * @description
   */
  var initSearchExpand = function initSearchExpand() {
    $('[search-btn-js]').on('click', function (ev) {
      if ($(window).width() > 767) {
        $(ev.currentTarget).closest('.header__search').toggleClass('is-active');
      }
    });
  };

  /**
   * @description
   */
  var initGraph = function initGraph() {
    var graph0 = document.getElementById("graph-0"),
        graph1 = document.getElementById("graph-1"),
        graph2 = document.getElementById("graph-2");

    if ($('#graph-0').length > 0) {
      new Chart(graph0, {
        type: "doughnut",
        data: {
          labels: ['Outfits', 'Gliders', 'Pickaxes', 'Emotes'],
          datasets: [{
            data: [4, 2, 3, 2],
            borderWidth: 2,
            backgroundColor: ['#e98849', '#c361f3', '#3b9be4', '#85e430']
          }]
        }
      });

      new Chart(graph1, {
        type: "doughnut",
        data: {
          labels: ['Daily', 'Featured'],
          datasets: [{
            data: [5, 6],
            borderWidth: 2,
            backgroundColor: ['#a8c7bb', '#ffa69e']
          }]
        }
      });

      new Chart(graph2, {
        type: "doughnut",
        data: {
          labels: ['Legendary', 'Rare', 'Epic', 'Uncommon'],
          datasets: [{
            data: [2, 1, 6, 2],
            borderWidth: 2,
            backgroundColor: ['#800020', '#d8beca', '#ff8d00', '#b2edc9']
          }]
        }
      });
    }
  };

  /**
   * @description
   */
  var initFilterRadioBtn = function initFilterRadioBtn() {
    $(window).on('load', function () {
      var checkboxBtn = $('input[type="checkbox"]');

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = checkboxBtn[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;

          if ($(el).is(':disabled')) {
            $(el).closest('.c-form__field').addClass('is-disabled');
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });

    $('input[type="checkbox"]').on('change', function (ev) {
      var elem = $(ev.currentTarget),
          elemParent = elem.closest('.filter__category-main'),
          elemParentID = $(elemParent).data('checkboxhead');

      var checkboxParent = $('.filter__category-checkbox[data-checkboxBody="' + elemParentID + '"]'),
          checkboxBtnArr = checkboxParent.find('input[type="checkbox"]');

      if (elem.closest('.filter__category-main')) {
        if ($(elem).is(':checked')) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = checkboxBtnArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var el = _step2.value;

              if ($(el).is(':disabled')) {
                $(el).closest('.c-form__field').removeClass('is-disabled');
                $(el).prop('disabled', false).change().prop('checked', true).change();
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        } else {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = checkboxBtnArr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _el2 = _step3.value;

              $(_el2).closest('.c-form__field').addClass('is-disabled');
              $(_el2).prop('disabled', true).change().prop('checked', false).change();
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      }
    });
  };

  /**
   * @description
   */
  var initImageCompare = function initImageCompare() {
    $("[compare-box-js]").twentytwenty({
      click_to_move: false,
      no_overlay: true
    });

    $('.skin__description-block > .twentytwenty-wrapper').css({
      'width': '100%',
      'maxWidth': $('.skin__description-block img')[0].naturalWidth
    });
  };

  /**
   * @description
   */
  var initTickerText = function initTickerText() {
    if ($('.b-skin__info--ticker').length > 0 || $('.cm-skin__info--ticker').length > 0) {
      var set = function set() {
        $('.b-skin__info--ticker, .cm-skin__info--ticker, .b-skin__info--wticker, .cm-skin__info--wticker').find('p').css({
          'opacity': '1'
        });

        $tw.css({
          'transform': 'translate3d(' + wwidth + 'px,0,0)'
        });

        window.setInterval(function () {
          $tw.css({
            'transition': 'all linear ' + (width + wwidth) / 250 * 2 + 's'
          });
          $tw.css({
            'transform': 'translate3d(' + width * -1 + 'px,0,0)'
          });
        }, 1);
      };

      var $tw = $('.b-skin__info--ticker, .cm-skin__info--ticker');
      var $w = $('.b-skin__info, .cm-skin__info');

      $tw.bind("transitionend", function () {
        $tw.css({
          'transition': 'all linear 0s'
        });

        set();
      });

      var width = $tw.width() + 50;
      var wwidth = $w.width() + 50;

      set();
    }
  };

  /**
   * @description
   */
  var initDropDown = function initDropDown() {
    /**
     *
     * @param ev
     * @param parent
     * @param drop
     * @param maxWidth
     */
    var dropHundler = function dropHundler(ev, parent, drop, maxWidth) {
      var _el = $(ev.currentTarget),
          _parentNode = _el.closest(parent),
          _dropDownNode = _parentNode.find(drop);

      if ($(window).width() < maxWidth) {
        _dropDownNode.slideToggle(350);
      }
    };

    $('.header__nav-link--wrapper > a').on('click', function (ev) {
      dropHundler(ev, '.header__nav-link--wrapper', '.dropdown-menu', 1200);
    });

    $('.item__dropdown .dropdown__btn').on('click', function (ev) {
      dropHundler(ev, '.item__dropdown', '.dropdown-menu', 768);
    });
  };

  /**
   *
   */
  var initListFilterSelect = function initListFilterSelect() {
    var selectName = $(".filter_0, .filter_1");

    selectName.selectric({
      responsive: true,
      inheritOriginalWidth: false,
      disableOnMobile: false,
      onInit: function onInit(element, data) {
        var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').html($elm.attr('placeholder'));
      },
      onBeforeOpen: function onBeforeOpen(element, data) {
        var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').data('value', $wrapper.find('.label').html()).html($elm.attr('placeholder'));
      },
      onBeforeClose: function onBeforeClose(element, data) {
        var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').html($wrapper.find('.label').data('value'));
      },
      onChange: function onChange(element, data) {
        var $elm = $(element),
            $wrapper = $elm.closest('.' + data.classes.wrapper);

        $wrapper.find('.label').addClass('is-choose');
      }
    });
  };
  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @description Init all method
   */
  var initJquery = function initJquery() {
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

    $('body').on('click', function (e) {
      var className = ".header__search";

      if (!$(e.target).closest(className).length) {
        $('.header__search').removeClass('is-active');
      }
    });
  };
  initJquery();
});