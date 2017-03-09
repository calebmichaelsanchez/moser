import $ from "properjs-hobo";
import Toggle from "../Toggle";
import * as core from '../core';
let { scrollToElement } = core.util.default;

(function() {
  let about = new Toggle( $( ".about" ), "is-about-open");
  let aboutNavToggle = $( ".nav__link--about" );
  let helloButton = $( '.btn--about' );
  let aboutClose = $( '#about .toggle' );
  let work = $( '.btn--work' );

  aboutNavToggle[0].addEventListener("click", (event) => {
    event.preventDefault();
    about.toggle();
  }, false);
  helloButton[0].addEventListener("click", (event) => {
    event.preventDefault();
    about.toggle();
  }, false);
  aboutClose[0].addEventListener("click", (event) => {
    event.preventDefault();
    about.toggle();
  }, false);
  work[0].addEventListener("click", (event) => {
    event.preventDefault();
    about.toggle();
    scrollToElement('#work');
  }, false);

})();
