$(document).on("ready", init);
function init() {
  window.addEventListener('focus', function() {
    document.title = 'GDG Rio de la Plata';
    console.log("test git");
  });

  window.addEventListener('blur', function() {
    document.title = '¡Hey! Volvé, te extrañamos';
  });

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

  $('.eventop').on('click', function() {
    evento_tmp = $(this);
    eid = evento_tmp.data('evento');
    text_mas = "(<em>ver +</em>)";
    text_menos = "(<em>ver -</em>)";
    evento = $('#'+eid);
    if(evento.is(':visible')){
      evento_tmp.html(text_mas);
      evento.slideUp();
    } else {
      evento_tmp.html(text_menos);
      evento.slideDown();
    }
    evento_tmp.blur();
    return false;
  })
}
