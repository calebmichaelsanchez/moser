import $ from "properjs-hobo";

const dom = {
  document: $( document ),
  html: $( document.documentElement ),
  body: $( document.body ),
  header: $( "#header" ),
  nav: $( ".primary-nav" )
};

export default dom
