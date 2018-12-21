

/**
 * @name initSwiper
 *
 * @description initialize Swiper slider
 */
const initSwiper = () => {

  /**
   * @description Rewards grants section slider
   *
   * @param paginationBool
   * @returns {{pagination: *, freeMode: boolean, loop: boolean, grabCursor: boolean, effect: string, slidesPerGroup: number, watchOverflow: boolean, normalizeSlideIndex: boolean, breakpoints: {"991": {slidesPerGroup: number, slidesPerView: number}, "575": {slidesPerGroup: number, slidesPerView: number}, "424": {slidesPerGroup: number, slidesPerView: number}, "1199": {slidesPerGroup: number, slidesPerView: number}, "767": {slidesPerGroup: number, slidesPerView: number}}, slidesPerView: number, spaceBetween: number}}
   */
  const swiperRewardsOpt = (paginationBool = false) => {
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

  let swiperGuestBlueLine = new Swiper('.swiper-container--grantsBlueLine', swiperRewardsOpt(true));
  let swiperGuestOrangeLine = new Swiper('.swiper-container--grantsOrangeLine', swiperRewardsOpt());

  if($('.swiper-container--grantsBlueLine').length > 0) {
    swiperGuestBlueLine.controller.control = [swiperGuestOrangeLine];
    swiperGuestOrangeLine.controller.control = [swiperGuestBlueLine];
  }


  /**
   * @description Features section slider
   *
   * @returns {{navigation: {nextEl: string, prevEl: string}, freeMode: boolean, loop: boolean, grabCursor: boolean, effect: string, watchOverflow: boolean, normalizeSlideIndex: boolean, slidesPerView: number, spaceBetween: number}}
   */
  const swiperFeaturesOpt = () => {
    return {
      loop: true,
      watchOverflow: true,
      normalizeSlideIndex: true,
      grabCursor: true,
      freeMode: false,
      effect: 'slide',
      // autoplay: {
      //   delay: 5000,
      // },
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    }
  };

  const swiperFeatures0 = new Swiper('.swiper-container--featured-0', swiperFeaturesOpt());
  const swiperFeatures1 = new Swiper('.swiper-container--featured-1', swiperFeaturesOpt());
  const swiperFeatures2 = new Swiper('.swiper-container--featured-2', swiperFeaturesOpt());
  const swiperDaily0 = new Swiper('.swiper-container--daily-0', swiperFeaturesOpt());
  const swiperDaily1 = new Swiper('.swiper-container--daily-1', swiperFeaturesOpt());
  const swiperDaily2 = new Swiper('.swiper-container--daily-2', swiperFeaturesOpt());
  const swiperDaily3 = new Swiper('.swiper-container--daily-3', swiperFeaturesOpt());
};
