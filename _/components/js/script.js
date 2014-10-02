$(document).ready(function() {


// Opening and closing the about section
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


// Opening and Closing the Mobile Nav

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

// var $bodyContent = $(".wrapper");
// var $addOverlayDiv = '<div class="overlay"></div>';
// var $overlayDiv = (".wrapper > .overlay")

// $($bodyContent).append($addOverlayDiv);

// $($navToggle).click(function(event){
//   event.preventDefault();
//   $($bodyContent).addClass("open");
//   $("body").css({position: "fixed"});
//   $($overlayDiv).fadeIn();
// });

// // Close it
// var $navLinks = $("nav.mobile ul li a");

// $($navLinks).click(function(){
//   $($bodyContent).removeClass("open");
//   $("body").css({position: "relative"});
//   $($overlayDiv).fadeOut();
// });
// $($overlayDiv).click(function(){
//   $($bodyContent).removeClass("open");
//   $("body").css({position: "relative"});
//   $(this).fadeOut();
// });





// Slider Section 

// The 400% container holding the slides
var $sliderInner    = $("#ideals .slider-inner");
// the slides 
var $controls       = $("#ideals .controls div"); 
var $activeControl  = $("#ideals .controls div.active");

var $firstControl   = $("#ideals .controls div:nth-of-type(1)");
var $secondControl  = $("#ideals .controls div:nth-of-type(2)");
var $thirdControl   = $("#ideals .controls div:nth-of-type(3)");
var $fourthControl  = $("#ideals .controls div:nth-of-type(4)");

var slider = function () {

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
var nope = $("a.nope");
var $overlay = $("<div class='nda'></div>");

var $exit = $("<div class='toggle'><div class='burger'></div</div>");
$overlay.append($exit);

var $caption = $("<p></p>");
$caption.append("This work is currently still in progress and protected
  by an NDA. If you would like to see samples of this project do not
  hesitate to get in contact with me.");
$overlay.append($caption);

$(".wrapper").append($overlay);

$(nope).click(function (e) {
  e.preventDefault();
  $overlay.show();
});

var exit = $(".toggle");

$(exit).click(function () {
  $overlay.hide();
});

});
