$(document).on("ready", init);
function init() {
  var primeraVez = true;
  var fix = 180;
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50){
      $('.topbar').addClass("sticky");
      primeraVez = false;
    } else {
      $('.topbar').removeClass("sticky");
      primeraVez = true;
    }
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        if(primeraVez==false) {
          fix = 80;
          primeraVez = false;
        }else{
          fix = 180;
          primeraVez = true;
        }
        $('html, body').animate({
          scrollTop: target.offset().top - fix
        }, 1000);
        return false;
      }
    }
  });
}
