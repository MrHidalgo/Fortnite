/**
 * @name initSectionBGResize
 *
 * @param parentNodeName {String} add parent name for method, before call.
 *
 * @description
 */
const initSectionBGResize = (parentNodeName) => {
  if($('[section-resize-js]').length) {
    const sectionResize = $('[section-resize-js]');

    const sectionRight = $('[section-right-js]'),
      widthElem = sectionRight[0].getBoundingClientRect().left,
      leftOffset = sectionResize.closest(parentNodeName)[0].getBoundingClientRect().left;

    if($(window).width() > 991) {
      sectionResize.css({
        'left' : -(leftOffset),
        'width' : widthElem,
      });
    }
  }
};
