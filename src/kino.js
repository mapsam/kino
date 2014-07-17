var kino = (function(){

  var swfCDN = 'http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js';


  function init(config) {
    // build parameters object and merge with defaults
    console.log(config);
  }

  /////////////////////////////////
  // LOAD SWF SCRIPT
  /////////////////////////////////
  function loadSWFScript() {
    $.getScript(swfCDN, buildPlayer(params))
  }

  /////////////////////////////////
  // BUILD PLAYER
  /////////////////////////////////
  function buildPlayer(p) {
    window.swfobject.embedSWF('http://www.youtube.com/v/PEX5EiRtnXo?enablejsapi=1&playerapiid=ytplayer&version=3', "kino-container", "625", "400", "8", null, null, {
        allowScriptAccess: "always"
      }, {
        id: 'kino-video-player'
      });
    // console.log(playerID);
  }

  /////////////////////////////////
  // VIDEO PLAYER HANDLER ONCE READY (requires web server)
  /////////////////////////////////
  function onYouTubePlayerReady(playerId) {
    kvp = document.getElementById(playerID);
    console.log(kvp);
  }

  /////////////////////////////////
  // strip the video ID from the URL provided by the user
  /////////////////////////////////
  function getVideoID(url) {
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