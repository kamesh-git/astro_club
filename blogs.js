// Get the header

var main_elem = document.getElementById("ui-wrapper");
main_elem.onscroll = function(){myFunction()};
var fixed_content_header = document.getElementById("fixed-content-header");
var new_blog = document.getElementById("new_blog")

// Get the offset position of the navbar
var sticky = main_elem.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if ($("#new_blog").offset().top < 200) {
    fixed_content_header.classList.add("fix_cont_sticky");
  } else {
    fixed_content_header.classList.remove("fix_cont_sticky");
  }
}


