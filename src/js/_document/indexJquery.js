

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
    const dropHandler = (ev, parent, drop, maxWidth) => {
      const _el = $(ev.currentTarget),
        _parentNode = _el.closest(parent),
        _dropDownNode = _parentNode.find(drop);

      if($(window).width() < maxWidth) {
        _dropDownNode.slideToggle(350);
      }
    };

    $('.header__nav-link--wrapper > a').on('click', (ev) => {
      dropHandler(ev, '.header__nav-link--wrapper', '.dropdown-menu', 1200);
    });

    $('.item__dropdown .dropdown__btn').on('click', (ev) => {
      dropHandler(ev, '.item__dropdown', '.dropdown-menu', 768);
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
    let _id = 0,
      _classMod = '';

    const checkDisabledBtn = () => {
      return $('.combos__block[data-combos-id="1"]').hasClass('is-skin');
    };

    const checkPreviewSkinNode = () => {
      if($('#combo-preview').is(':visible')) {
        $("[data-btn-name='screenshot']").removeClass('is-disabled');
      } else {
        $("[data-btn-name='screenshot']").addClass('is-disabled');
      }
    };

    const additionalBtnPrevScreen = () => {
      if(checkDisabledBtn()) {
        $("[data-btn-name='preview']").removeClass('is-disabled');
      } else {
        $("[data-btn-name='preview']").addClass('is-disabled');
        $('.combo__view').hide();
      }

      checkPreviewSkinNode();
    };

    const updatePreviewBox = () => {
      const _mainSkin = $('.combos__block[data-combos-id="1"]'),
        _mainSkinTitle = $('[combo-custom-title-js]');

      const _obj = {
        main : {
          img: _mainSkin.find('[combo-custom-img-js]').clone(),
          classModSkin: _mainSkin.attr('class').substring(_mainSkin.attr('class').indexOf('combos__block--')),
          classModTitle: _mainSkinTitle.attr('class').substring(_mainSkinTitle.attr('class').indexOf('combos__box--'))
        }
      };

      const _viewMainSkin = $('[combo-viewMain-skin-js]'),
        _viewMainSkinImg = _viewMainSkin.find('.combos__block-top'),
        _viewMainSkinTitle = _viewMainSkin.siblings('.combos__box-title');

      _viewMainSkinImg.html(_obj.main.img);

      _viewMainSkin
        .removeClass('combos__block--common')
        .addClass(_obj.main.classModSkin);

      _viewMainSkinTitle
        .removeClass('combos__box--common')
        .addClass(_obj.main.classModTitle);

      for (let _el of $('[combo-custom-skinAdditional-js] .combos__block')) {
        const _elID = $(_el).data('id'),
          _elImg = $(_el).find('[combo-custom-img-js]').clone(),
          _comboAdditionalSkin = $('[combo-viewAdditional-skin-js] .combos__block[data-id="' + _elID + '"]');

        if($(_el).hasClass('is-skin') && (_comboAdditionalSkin.data('id') === _elID)) {
          $('[combo-viewAdditional-skin-js] .combos__block[data-id="' + _elID + '"] .combos__block-top--img').html(_elImg);

          _comboAdditionalSkin
            .show()
            .removeClass('combos__block--common')
            .addClass($(_el).attr('class').substring($(_el).attr('class').indexOf('combos__block--')));

        } else {
          $('[combo-viewAdditional-skin-js] .combos__block[data-id="' + _elID + '"] .combos__block-top--img').html(_elImg);

          _comboAdditionalSkin
            .hide()
            .removeClass(_comboAdditionalSkin.attr('class').substring(_comboAdditionalSkin.attr('class').indexOf('combos__block--')))
            .addClass('combos__block--common');
        }
      }
    };

    $('[combo-drop-btn-js]').on('click', (ev) => {
      ev.preventDefault();

      const _btn = $(ev.currentTarget),
        _btnArr = $('[combo-drop-btn-js]'),
        _btnData = _btn.find('.combos__block-top')[0].getBoundingClientRect(),
        _btnOffsetTop = _btn.offset().top,
        _btnIconHeight = _btn.find('.icon-plus-add').outerHeight(true),
        _btnIconWidth = _btn.find('.icon-plus-add').outerWidth(true);

      if (_btn.hasClass('is-skin')) {
        return false;
      }

      const _dropNode = $('[combo-drop-js]'),
        _dropCorner = $('.combo__drop-corner');

      let _classCorner = '';

      _id = _btn.data('combos-id');

      if(!_btn.hasClass('is-active')) {
        $('html,body').addClass('is-hideScroll');

        _btnArr.removeClass('is-active');
        _btnArr.find('span').removeClass('is-open');

        _btn.addClass('is-active');
        _btn.find('.icon-plus-add').parent().addClass('is-open');

        _classCorner = (_btnIconWidth >= 61) ? 'is-big' : 'is-small';

        _dropCorner.addClass(_classCorner);
        _dropCorner.css({
          top: (_btn.find('.icon-plus-add')[0].getBoundingClientRect().top) - 15,
          left: (_btn.find('.icon-plus-add')[0].getBoundingClientRect().left) - 15
        });

        _dropNode.css({
          'top' : _btnOffsetTop+ ((_btnData.height / 2) + (_btnIconHeight / 2))
        }).hide().slideDown(350);
      }
    });

    $('[combo-drop-skin-js]').on('click', (ev) => {
      ev.preventDefault();

      $('[combo-drop-skin-js]').removeClass('is-active');
      $(ev.currentTarget).addClass('is-active');
    });

    $('[combo-drop-ok-js]').on('click', (ev) => {
      ev.preventDefault();

      const _elem = $('.combo__drop .combos__box.is-active'),
        _elemSkinPath = _elem.data('combos-path'),
        _elemSkinName = _elem.data('combos-name'),
        _elemSkinExt = _elem.data('combos-ext'),
        _elemMod = _elem.data('combos-mod');

      const _skin = $('[data-combos-id="' + _id + '"]'),
        _imgContainer = _skin.find('[combo-custom-img-js]'),
        _skinTitle = $('[combo-custom-title-js]');

      let _imgSrc = _elemSkinPath + '/' + _elemSkinName + '.' + _elemSkinExt,
        _imgSrcset = _elemSkinPath + '/' + _elemSkinName + '@2x.' + _elemSkinExt + ' 2x';

      _classMod = _elemMod;

      _imgContainer.attr('src', _imgSrc).attr('srcset', _imgSrcset);
      _skin
        .removeClass('combos__block--custom')
        .addClass('is-skin ' + _skin.data('name') + '--' + _elemMod);

      if(_id === 1) {
        _skinTitle.addClass(_skinTitle.data('name') + '--' + _elemMod);
      }

      $('[combo-drop-cancel-js]').click();
      additionalBtnPrevScreen();
      updatePreviewBox();
    });

    $('[combo-remove-skin-js]').on('click', (ev) => {
      const _skin = $(ev.currentTarget).closest('a'),
        _imgContainer = _skin.find('[combo-custom-img-js]'),
        _skinTitle = $('[combo-custom-title-js]');

      _imgContainer.attr('src', '').attr('srcset', '');
      _skin
        .removeClass('is-skin ' + _skin.attr('class').substring(_skin.attr('class').indexOf('combos__block--')))
        .addClass(_skin.data('name') + '--custom');

      if(_skin.data('combos-id') === 1) {
        _skinTitle.removeClass(_skinTitle.attr('class').substring(_skinTitle.attr('class').indexOf('combos__box--')));
      }

      additionalBtnPrevScreen();
      checkPreviewSkinNode();
      updatePreviewBox();

      ev.preventDefault();
      ev.stopPropagation();
    });

    $('[combo-custom-preview-js]').on('click', (ev) => {
      updatePreviewBox();

      $('.combo__view').slideDown(350);
      checkPreviewSkinNode();
    });

    $('[combo-custom-screenshot-js]').on('click', (ev) => {
      function saveAs(uri, filename) {
        let link = document.createElement('a');

        if (typeof link.download === 'string') {
          link.href = uri;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          window.open(uri);
        }
      }

      html2canvas(
        document.querySelector("#combo-preview"),
        {
          backgroundColor: null
        }
        ).then(canvas => {
        saveAs(
          canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"),
          'combo-custom.png'
        );
      });
    });

    $('[combo-drop-cancel-js]').on('click', (ev) => {
      ev.preventDefault();

      $('html,body').removeClass('is-hideScroll');

      $('.combo__drop').slideUp(350);
      $('[combo-drop-btn-js]')
        .removeClass('is-active')
        .find('span')
        .removeClass('is-open');

      $('[combo-drop-skin-js]').removeClass('is-active');
      $('.combo__drop-corner').removeClass('is-small is-big')
    });

    $(document).keyup((ev) => {
      ev.preventDefault();

      if(ev.which === 27) {
        $('[combo-drop-cancel-js]').click();
      }
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

