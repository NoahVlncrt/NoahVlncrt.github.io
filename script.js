$(document).ready(function() {
  $("#icon").mouseenter(function(){
    $(this).animate({
      boxShadow: "1px 1px 3px #3576a7",
    }, 200);
  });
  $("#icon").mouseleave(function(){
    $(this).animate({
      boxShadow: "3px 3px 3px #3576a7",
    }, 200);
  });
});