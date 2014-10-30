var kino = (function(){

  var k; // #kino
  var len; // number of videos in 'videos' parameter
  var iframe; // sets iframe globally so we can change parameters on click interaction
  var ids = []; // preparing list if IDs for usage across library

  function init(config) {

    // set global variable from #kino element
    k = document.getElementById("kino");

    // get video ids & length
    len = config.videos.length;

    // get ids
    ids = getIDs(config.videos);

    // create main player
    buildKinoPlayer();

    // create thumbnails
    thumbsCreate(ids);

  }

  /////////////////////////////////
  // GET VIDEO IDS
  /////////////////////////////////
  function getIDs(videos) {
    for (var v = 0; v<len; v++) {
      // get ids
      var id,
          url = videos[v],
          index = url.indexOf("?v=");
      if(index!==-1) {
        id = url.substring(index+3);
        ids.push(id);
      }
    }
    return ids;
  }

  /////////////////////////////////
  // BUILD MAIN PLAYER
  /////////////////////////////////
  function buildKinoPlayer() {
    // kino-player container (used for sizing the iframe)
    var kinoPlayer = document.createElement("div");
    kinoPlayer.className = "kino-player";

    // kino embed from youtube
    iframe = document.createElement('iframe');
    iframe.setAttribute("src", "http://youtube.com/embed/"+ids[0]);
    iframe.setAttribute("frameborder", 0);

    // append objects to #kino
    kinoPlayer.appendChild(iframe);
    k.appendChild(kinoPlayer);
  }

  /////////////////////////////////
  // THUMBNAILS / KINO VIDEO LIST
  /////////////////////////////////
  function thumbsCreate(ids) {
    // create thumbsList
    var thumbList = document.createElement("ol");
    thumbList.className = "kino-video-list";

    // create thumbnail for each id, append to thumblist
    for (var i = 0; i<len; i++) {
      thumbList.appendChild(thumb(ids[i]));
    }

    // set active class to first element
    var first = thumbList.getElementsByTagName("li")[0];
    first.className+=" active";

    // append thumbs to kino element
    k.appendChild(thumbList);
  }

  /////////////////////////////////
  // CREATE THUMBNAIL
  /////////////////////////////////
  function thumb(id) {
    // create kino-video-thumb element
    var kinoThumb = document.createElement("li");
    kinoThumb.className = "kino-video-thumb";

    // create custom data-videoID attribute
    var videoIdAttr = document.createAttribute("data-videoID");
    videoIdAttr.value = id;
    kinoThumb.setAttributeNode(videoIdAttr);

    // set width of thumb based on number of videos
    kinoThumb.style.width = 100/len + "%";

    // add click event handler thumbClick()
    kinoThumb.addEventListener("click", thumbClick);

    // thumbnail image
    var img = document.createElement("img");
    img.src = "http://img.youtube.com/vi/"+id+"/mqdefault.jpg";
    kinoThumb.appendChild(img);

    return kinoThumb;
  }

  /////////////////////////////////
  // THUMBNAIL CLICK HANDLER
  /////////////////////////////////
  function thumbClick() {
    var classString = this.className;
    var isActive = (classString.indexOf("active") !== -1 ? true : false);
    if(!isActive) {

      // set main frame
      var vID = this.getAttribute("data-videoID");
      iframe.setAttribute("src", "http://youtube.com/embed/"+vID);

      // update className
      activeReset(this);

    }

    // updates active .kino-video-thumb
    function activeReset(t) {
      var thumbs = document.getElementsByClassName("kino-video-thumb");
      for(var a=0; a<len; a++) {
        thumbs[a].className = "kino-video-thumb";
      }
      t.className = "kino-video-thumb active";
    }    
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