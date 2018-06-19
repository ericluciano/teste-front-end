/* global event */
/* eslint no-restricted-globals: 0 */
const conectus = {
  navActive: false,
  navTargetScroll: 150,
  navChangeStatus(e) {
    this.navTargetActive = e;
  },
  addClass(name, element) {
    document.getElementsByTagName(element)[0].classList.add(name);
  },
  removeClass(name, element) {
    document.getElementsByTagName(element)[0].classList.remove(name);
  },
  check() {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 1 && !this.navTargetActive) {
      this.navChangeStatus(true);
      this.addClass('nav-fixed-top', 'nav');
      this.removeClass('active', 'ul');
    }

    if (top < 1 && this.navTargetActive) {
      this.navChangeStatus(false);
      this.removeClass('nav-fixed-top', 'nav');
      this.removeClass('bg-white', 'nav');
      this.removeClass('active', 'ul');
    }
  },
  init() {
    this.check();
    window.onscroll = () => {
      this.check();
    };
    window.onresize = () => {
      if (window.innerWidth >= 992) {
        this.removeClass('active', 'ul');
        this.removeClass('bg-white', 'nav');
        document.getElementsByClassName('open-menu')[0]
          .classList.remove('active');
      }
    };
  },
};

conectus.init();

(($) => {
  // Smooth scrolling using jQuery easing
  $('a[href*="#"]:not([href="#"])').on('click', (event) => {
    const self = event.currentTarget;
    if (location.pathname.replace(/^\//, '') === self.pathname.replace(/^\//, '') && location.hostname === self.hostname) {
      let target = $(self.hash);
      target = target.length ? target : $(`[name=${self.hash.slice(1)}]`);
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 65),
        }, 1000, 'easeInOutExpo');
        return false;
      }
    }
    return true;
  });

  $('li a').click(() => {
    $('nav ul').removeClass('active');
    $('.open-menu').removeClass('active');
  });

  $('.open-menu').on('click', (ev) => {
    const self = ev.currentTarget;
    $('nav ul').toggleClass('active');
    $('nav').toggleClass('bg-white');
    $(self).toggleClass('active');
  });
})(jQuery);
