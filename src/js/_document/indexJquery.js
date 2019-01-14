

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

  const initImageCompare = () => {
    var x, i;
    /* Find all elements with an "overlay" class: */
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
      /* Once for each "overlay" element:
      pass the "overlay" element as a parameter when executing the compareImages function: */
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider, sliderSpan, sliderI, img, clicked = 0, w, h;
      /* Get the width and height of the img element */
      w = img.offsetWidth;
      h = img.offsetHeight;
      /* Set the width of the img element to 50%: */
      img.style.width = (w / 2) + "px";
      /* Create slider: */
      slider = document.createElement("DIV");
      sliderSpan = document.createElement('SPAN');
      sliderI = document.createElement('I');
      slider.setAttribute("class", "img-comp-slider");
      slider.appendChild(sliderSpan);
      sliderSpan.appendChild(sliderI);
      /* Insert slider */
      img.parentElement.insertBefore(slider, img);
      /* Position the slider in the middle: */
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      /* Execute a function when the mouse button is pressed: */
      slider.addEventListener("mousedown", slideReady);
      /* And another function when the mouse button is released: */
      window.addEventListener("mouseup", slideFinish);
      /* Or touched (for touch screens: */
      slider.addEventListener("touchstart", slideReady);
      /* And released (for touch screens: */
      window.addEventListener("touchstop", slideFinish);
      function slideReady(e) {
        /* Prevent any other actions that may occur when moving over the image: */
        e.preventDefault();
        /* The slider is now clicked and ready to move: */
        clicked = 1;
        /* Execute a function when the slider is moved: */
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        /* The slider is no longer clicked: */
        clicked = 0;
      }
      function slideMove(e) {
        var pos;
        /* If the slider is no longer clicked, exit this function: */
        if (clicked == 0) return false;
        /* Get the cursor's x position: */
        pos = getCursorPos(e)
        /* Prevent the slider from being positioned outside the image: */
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /* Execute a function that will resize the overlay image according to the cursor: */
        slide(pos);
      }
      function getCursorPos(e) {
        var a, x = 0;
        e = e || window.event;
        /* Get the x positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x coordinate, relative to the image: */
        x = e.pageX - a.left;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        /* Resize the image: */
        img.style.width = x + "px";
        /* Position the slider: */
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
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
    initImageCompare();
    initGraph();
    initFilterRadioBtn();
    initListFilterSelect();

    $('body').on('click', function (e) {
      const className = ".header__search";

      if (!$(e.target).closest(className).length) {
        $('.header__search').removeClass('is-active');
      }
    });
  };
  initJquery();
});

