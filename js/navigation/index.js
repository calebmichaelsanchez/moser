import $ from "properjs-hobo";
import Toggle from "../Toggle";
import * as core from '../core';
let { scrollToElement } = core.util.default;

(function() {

  let nav = new Toggle( $( ".nav"), "is-menu-open" );
  let toggle = $( ".toggle-nav" );
  let arrow = $( ".nav__item--arrow" );
  let home = $( ".nav__link--home");
  let about = $( ".nav__link--about");
  let contact = $( ".nav__link--contact");
  let work = $( ".nav__link--work");

  let navItemClick = (scrollElement) => {
    return (event) => {
      event.preventDefault();
      nav.toggle();
      scrollToElement(scrollElement);
    }
  }

  toggle[0].addEventListener("click", (event) => {
    event.preventDefault();
    nav.toggle();
  }, false);
  arrow[0].addEventListener("click", (event) => {
    event.preventDefault();
    nav.toggle();
  }, false);
  home[0].addEventListener("click", navItemClick('#home'), false);
  about[0].addEventListener("click", navItemClick('#about'), false);
  contact[0].addEventListener("click", navItemClick('#contact'), false);
  work[0].addEventListener("click", navItemClick('#work'), false);

})();
