import $ from 'properjs-hobo';
import * as core from "../core";

!(function() {

    let hero = $('#home');
    let heroHeight = hero[0].clientHeight;
    let latestKnownScroll = 0;
    let ticking = false;

    function onScroll() {
      latestKnownScroll = window.scrollY;
      requestTick();
    }

    function onResize() {
      heroHeight = hero[0].clientHeight;
    }

    function requestTick() {
      if (!ticking) {
        window.requestAnimationFrame(update);
      }
      ticking = true;
    }

    function update() {
      ticking = false;

      if (latestKnownScroll >= heroHeight) {
        core.dom.html.addClass('nav-scrolled');
      } else {
        core.dom.html.removeClass('nav-scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, false);
    window.addEventListener('resize', onResize, false);

})();
