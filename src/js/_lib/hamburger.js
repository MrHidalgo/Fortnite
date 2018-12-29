

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
const initHamburger = () => {

  const btn = document.querySelector("[hamburger-js]"),
    hideScrollContainer = document.querySelectorAll("html, body"),
    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
	 */
	if(btn) {
    btn.addEventListener("click", (ev) => {
      const elem = ev.currentTarget;

      elem.classList.toggle("is-active");
      mobileContainer.classList.toggle("is-open");

      if(elem.classList.contains('is-active')) {
        $(elem).attr('style', 'transform:translateX(-' + ($(mobileContainer).outerWidth(true) - 15) + 'px)');
      } else {
        $(elem).attr('style', '');
      }

      hideScrollContainer.forEach((val, idx) => {
        val.classList.toggle("is-hideScroll");
      });

    });

    $(window).on('resize', () => {
      if($(window).width() < 1200) {
        if(btn.classList.contains('is-active')) {
          $(btn).attr('style', 'transform:translateX(-' + ($(mobileContainer).outerWidth(true) - 15) + 'px)');
        } else {
          $(btn).attr('style', '');
        }
      }
    });
  }
};