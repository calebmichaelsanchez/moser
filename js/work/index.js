import $ from "properjs-hobo";
import * as core from '../core';

(function() {

  let $overlay = $('<div class="overlay"></div>');
  let $image = $('<img class="overlay__image" src="" />');

  $overlay[0].append($image[0]);
  core.dom.body[0].append($overlay[0]);

  $( ".work__item" )
    .on('click', function(e) {
      e.preventDefault();
      let src = $(this)[0].dataset.url;
      $image[0].src = src;
      core.dom.html.addClass("is-overlay-open");
    });

  $overlay.on('click', function(e) {
    core.dom.html.removeClass("is-overlay-open");
  });

})();
