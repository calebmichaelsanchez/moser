$(document).ready(function() {

// Smooth Scroll 
var smoooth = function () {
  var navHeight = $('nav').height();
  var navTop = parseInt($('nav.primary-nav').css("top"), 10);

  if ( navTop == 0) {
    $('nav a').smoothScroll({
      offset: -navHeight
    });
    $('a.btn').smoothScroll({
      offset: -navHeight
    });
  } else {
    $('nav a').smoothScroll();
    $('a.btn').smoothScroll();
  }
  $('.other-projects a').smoothScroll();

};

smoooth();
$(window).resize(function(){
  smoooth();
});

// Add dark class to navigation
var darkNav = function () {
  var scroll = $(window).scrollTop();
  var nav = $("nav.primary-nav");
  var navHeight = nav.height();
  if (scroll >= 550 - (navHeight / 2)) {
      $(nav).addClass("dark");
  } else {
    $(nav).removeClass("dark")
  }
};
darkNav();
$(window).scroll(function() {    
  darkNav();
});

// Opening and closing the about section
var about = function () {
  var openAbout = $("nav ul li:nth-of-type(3) a");
  var openAboutBtn = $(".title a.btn");
  var aboutSection = $("header .about");
  var closeAbout = $(".about .toggle");
  var viewWork = $(".about .group .btn ");

  $('nav ul li:nth-of-type(3) a, .title a.btn').click(function(){
      $(aboutSection).addClass("open");
  });
  $(closeAbout).click(function() {
    $(aboutSection).removeClass("open");
  });
  $(viewWork).click(function() {
    $(aboutSection).removeClass("open");
  });
};
about();

// Opening and Closing the Mobile Nav
var navigation = function () {
var navToggle = $("header .toggle-nav");
var navigation = $("nav.primary-nav");
var navLinks = $("nav a");
var navArrow = $("li.nav--arrow a");
$(navToggle).click(function (e) {
  e.preventDefault();
  $(navigation).addClass("open");
});
$(navLinks).click(function () {
  //e.preventDefault();
  $(navigation).removeClass("open");
});
};
navigation();






// Slider Section 
var slider = function () {

  // The 400% container holding the slides
  var $sliderInner    = $("#ideals .slider-inner");
  // the slides 
  var $controls       = $("#ideals .controls div"); 
  var $activeControl  = $("#ideals .controls div.active");

  // controls
  var $firstControl   = $("#ideals .controls div:nth-of-type(1)");
  var $secondControl  = $("#ideals .controls div:nth-of-type(2)");
  var $thirdControl   = $("#ideals .controls div:nth-of-type(3)");
  var $fourthControl  = $("#ideals .controls div:nth-of-type(4)");

  $($controls).click(function(){
    // If this isn't already active
    if (!$(this).hasClass("active-control")) {
      // Remove the class from anything that is active
      $("div.square").removeClass("active-control");
      // And make this active
      $(this).addClass("active-control");
    }
  });

  $($firstControl).click(function(){
      $sliderInner.css({marginLeft: "0"});
  });
  $($secondControl).click(function(){
      $sliderInner.css({marginLeft: "-100%"});
  });
  $($thirdControl).click(function(){
      $sliderInner.css({marginLeft: "-200%"});
  });
  $($fourthControl).click(function(){
      $sliderInner.css({marginLeft: "-300%"});
  });
};

slider();


// Clients Under NDA
// var nonDisclosure = function () {
//   var nope = $("a.nope");
//   var $overlay = $("<div class='nda'></div>");
//   var $exit = $("<div class='toggle'><div class='burger'></div</div>");

//   $overlay.append($exit);

//   var $caption = $("<p class='ghosted'></p>");

//   $caption.append("This work is currently still in progress and protected
//     by an NDA. If you would like to see samples of this project do not
//     hesitate to get in contact with me.");

//   $overlay.append($caption);

//   $("body").append($overlay);

//   $(nope).click(function (e) {
//     e.preventDefault();
//     $overlay.show();
//   });

//   var exit = $(".toggle");
//   $(exit).click(function () {
//     $overlay.hide();
//   });
// };

//nonDisclosure();

});
