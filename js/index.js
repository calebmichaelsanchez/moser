require ('smoothscroll-polyfill').polyfill();
import './scroll';
import './navigation';
import './about';
import './work';


// Rework this some day
// // Slider Section
// var slider = function () {

//   // The 400% container holding the slides
//   var $sliderInner    = $("#ideals .slider-inner");
//   // the slides
//   var $controls       = $("#ideals .controls div");
//   var $activeControl  = $("#ideals .controls div.active");

//   // controls
//   var $firstControl   = $("#ideals .controls div:nth-of-type(1)");
//   var $secondControl  = $("#ideals .controls div:nth-of-type(2)");
//   var $thirdControl   = $("#ideals .controls div:nth-of-type(3)");
//   var $fourthControl  = $("#ideals .controls div:nth-of-type(4)");

//   $($controls).click(function(){
//     // If this isn't already active
//     if (!$(this).hasClass("active-control")) {
//       // Remove the class from anything that is active
//       $("div.square").removeClass("active-control");
//       // And make this active
//       $(this).addClass("active-control");
//     }
//   });

//   $($firstControl).click(function(){
//       $sliderInner.css({marginLeft: "0"});
//   });
//   $($secondControl).click(function(){
//       $sliderInner.css({marginLeft: "-100%"});
//   });
//   $($thirdControl).click(function(){
//       $sliderInner.css({marginLeft: "-200%"});
//   });
//   $($fourthControl).click(function(){
//       $sliderInner.css({marginLeft: "-300%"});
//   });
// };

// slider();
