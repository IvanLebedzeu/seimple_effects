$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".click").click(function() {
    $("#test").toggle();
  });

  $(".btn1").click(function(){
    $(".fade-demo").fadeToggle();
  });
  
  $(".btn2").click(function(){
    $(".fade-demo").fadeToggle();
  });

  

});