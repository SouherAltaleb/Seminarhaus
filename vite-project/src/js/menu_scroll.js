//QUELLE: https://codepen.io/Spoochy/pen/LYYdGgJ

$(document).ready(function() {
  $(window).on("scroll", function() {
    console.log($(this).scrollTop())
    if($(this).scrollTop() >= 30){
      $(".header-holder").addClass("scrolled");

    } else {
      $(".header-holder").removeClass("scrolled");
      $(".device-menu .active").removeClass("scrolled");

    }
  })
})


