$(document).ready(function() {
  $('.slider__content').slick({
    slidesToShow: 1,
    centerMode: true,
    infinite: true,
    variableWidth: true,
  });
  $('.products__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1
  });
})
