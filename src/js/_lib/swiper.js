

/**
 * @name initSwiper
 *
 * @description initialize Swiper slider
 */
const initSwiper = () => {

  const swiperOpt = (paginationBool = false) => {
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
      pagination: (paginationBool) ? { el: '.grants__square', clickable: true } : '',
      breakpoints: {
        1199: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
        991: {
          slidesPerView: 7,
          slidesPerGroup: 7,
        },
        767: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
        575: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        424: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      }
    }
  };

  let swiperGuestBlueLine = new Swiper('.swiper-container--grantsBlueLine', swiperOpt(true));
  let swiperGuestOrangeLine = new Swiper('.swiper-container--grantsOrangeLine', swiperOpt());

  swiperGuestBlueLine.controller.control = [swiperGuestOrangeLine];
  swiperGuestOrangeLine.controller.control = [swiperGuestBlueLine];
};
