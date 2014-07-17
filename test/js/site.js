function init() {

  galerie.init();
  console.log(galerie.state());
  $('#prev').click(galerie.prev);
  $('#next').click(galerie.next);

}

window.onLoad = init();