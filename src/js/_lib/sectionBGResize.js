const initSectionBGResize = (parentNodeName) => {
  const sectionResize = $('[section-resize-js]');

  const sectionRight = $('[section-right-js]'),
    widthElem = sectionRight[0].getBoundingClientRect().left,
    leftOffset = sectionResize.closest(parentNodeName)[0].getBoundingClientRect().left;

  sectionResize.css({
    'left' : -(leftOffset),
    'width' : widthElem,
  });
};