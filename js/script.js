$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

const button = document.getElementById ('assistirAgora');

const button2 = document.getElementById('maisInformacoes')

button.addEventListener('click', Assistir);
button2.addEventListener('click', Informacoes);

function Assistir () {
    window.open ("https://player.vimeo.com/video/406157990?title=0&portrait=0&byline=0&autoplay=1");
}

function Informacoes() {
    window.open ("http://github.com/elenbrodt")
}