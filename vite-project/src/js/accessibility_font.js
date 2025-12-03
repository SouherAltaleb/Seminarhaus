// FONT SMALL & BIG //

  $( document ).ready(function() {
    $('.plus').on('click', function() {
      var fontSize = parseFloat($('body').css('font-size'));
       if(fontSize >= 22) {
        return;
    }

      fontSize = fontSize + 1;
      $('body').css('font-size', fontSize + 'px');
    });

    $('.minus').on('click', function(){
      var fontSize = parseFloat($('body').css('font-size'));
      console.log(fontSize);

      if(fontSize <= 12){
        return;
      }

      fontSize = fontSize - 1;
      $('body').css('font-size', fontSize + 'px');
    });
/* Damit die Elemente im Headerbild nicht überladen laufen, habe ich die h1 Schriftgröße festgelegt, 
dass nicht vergrößert oder verkleinert werden soll */
  

// GRAU MODUS //
// QUELLE: https://stackoverflow.com/questions/4482351/is-there-a-togglesrc-method-in-jquery

  $.fn.toggleSrc = function(onSuffix, offSuffix) {
    return this.attr("src", function(i, src) {
      return src.indexOf(onSuffix) != -1 ? src.replace(onSuffix, offSuffix)
                                         : src.replace(offSuffix, onSuffix);
    });
  };
  $('.accessibility_link').on('click', function(){
    $('html').toggleClass('content-bright');
    $('#imgClickAndChange').toggleSrc('images/color.svg' ,'images/color_on.svg' )
  });
});

// GRAU MODUS ICON COLOR CHANGE //
/*
function changeImage() {
  if (document.getElementById("imgClickAndChange").src == "/images/color.svg")
  {

  }
  else 
  {
      document.getElementById("imgClickAndChange").src = "/images/color_on.svg";
    
  }
}*/

