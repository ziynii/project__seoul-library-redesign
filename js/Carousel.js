const mainSlider = tns({
  container: '.main-slider-list',
  navContainer: '.slider-control',
  controls: false,
  autoplay: true,
  autoplayButtonOutput: false,
  preventScrollOnTouch: true,
  mouseDrag: true,
})

const newBookSlider = tns({
  container: '#new-book',
  items: 2,
  loop: false,
  swipeAngle: false,
  gutter: 8,
  speed: 400,
  controlsText: ['<i class="ic-chevron"></i>', '<i class="ic-chevron"></i>'],
  preventScrollOnTouch: true,
  responsive: {
    768: {
      items: 4,
    },
    1200: {
      items: 5,
      gutter: 16,
      edgePadding: 24,
    },
  },
})

const bestBookSlider = tns({
  container: '#best-book',
  items: 2,
  loop: false,
  swipeAngle: false,
  // edgePadding: 0,
  gutter: 8,
  speed: 400,
  controlsText: ['<i class="ic-chevron"></i>', '<i class="ic-chevron"></i>'],
  preventScrollOnTouch: true,
  responsive: {
    768: {
      items: 4,
    },
    1200: {
      items: 5,
      gutter: 16,
      edgePadding: 24,
    },
  },
})

const eventSlider = tns({
  container: '.event-list',
  items: 1,
  loop: false,
  controls: true,
  controlsContainer: '.event .event-slider-controls',
  preventScrollOnTouch: true,
  responsive: {
    1200: {
      items: 2,
      edgePadding: 24,
    },
  },
})
