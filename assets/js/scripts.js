$(function(){
  if (this.hash !== "") {
    event.preventDefault();

    var gato = this.hash;

    $("html, body").animate({
     scrollTop: $(gato).offset().scrollTop
   }, 800, function(){
     window.location.hash = gato;
   };

    });
  }
});
