'use strict';
(function(){

  var canvas = null;
   var context = null;
   var img = null;
   var setup;
   var onImageLoad;
   var frameRate = 1000/30;

   var assets = ["images/AK.png", "images/AQ.png"];
   var frame = 0;
   var frames = [];

  setup = function() {
    canvas = document.getElementById("my_canvas");
    context = canvas.getContext("2d");
    canvas.width = 1200;  //widow.innerwidth;
    canvas.height = 720;  //window.innerHeight;

    for (var i = 0; i < assets.length; i++) {
        frames.push(new Image());
        frames[i].src = assets[i];
        frames[i].onload = onImageLoad;
    }
    setInterval(animate, frameRate);

  /*  img = new Image();
    img.onload = onImageLoad;
    img.src = "bus.png"; */
  };

    onImageLoad = function(){
      console.log("IMAGE!!!");
      //context.drawImage(img, 192, 192);
    };

    var animate = function(){
      context.clearRect(0,0, canvas.width, canvas.height);
      context.drawImage(frames[frame], 192, 192);
      frame = (frame + 1) % frames.length;
    };

  setup();

})();
