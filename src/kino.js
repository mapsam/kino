var kino = (function(){
  // globals
  var ids = [];
  var videoElements = document.getElementsByClassName('kvideo');

  function init(config) {
    // get video ids & length
    var videos = getIDs();

    // set active class to first element
    videoElements[0].className+=' active';

    // build main player
    var container = document.getElementById('kino-container');
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'http://youtube.com/embed/'+videos[0]);
    iframe.setAttribute('frameborder', 0);
    container.appendChild(iframe);

  }

  /////////////////////////////////
  // GET VIDEO IDS
  /////////////////////////////////
  function getIDs() {
    for (var v = 0; v<videoElements.length; v++) {
      // get ids
      var id;
      var url = videoElements[v].getAttribute('data-url');
      var index = url.indexOf('?v=');
      if(index!==-1) {
        id = url.substring(index+3);
        ids.push(id);
      }

      // then set list item widths
      setThumbs(videoElements[v], videoElements.length, id);

    }
    return ids;
  }

  /////////////////////////////////
  // SET LIST ITEM THUMBS
  /////////////////////////////////
  function setThumbs(elem, len, id) {
    // update length
    elem.style['width'] = 100/len + '%';

    // update 
    elem.style['float'] = 'left';

    // add image
    var img = document.createElement('img');
    img.src = 'http://img.youtube.com/vi/'+id+'/0.jpg';
    img.style['width'] = '100%';
    img.style['height'] = 'auto';
    elem.appendChild(img);
  }


  
  /////////////////////////////////
  // ERROR HANDLER
  /////////////////////////////////
  function err(error) {
    console.log(error);
  }

  /////////////////////////////////
  // RETURN STATES for PUBLIC API
  /////////////////////////////////
  return {
    init: init,
    err: err
  };

})();