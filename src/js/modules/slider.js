(($) => {
  $('.slider').slick({
    autoplaySpeed: 5000,
    dots: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 500,
      settings: {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }],
  });

  // custom function showing current slide
  const $status = $('.pagingInfo');
  const $slickElement = $('.slider');
  $slickElement.on('init reInit afterChange', (event, slick, currentSlide) => {
    const i = (currentSlide ? currentSlide : 0) + 1; // eslint-disable-line
    $status.text(`${i} / ${slick.slideCount}`);
  });
})(jQuery);
