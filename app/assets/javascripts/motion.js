// $(document).
$(document).ready(function(){
  window.onload = function(){
    var walk,
      walkImage,
      canvas;

    function gameLoop(){

      window.requestAnimationFrame(gameLoop);

      walk.update();
      walk.render();
    }

    function sprite(options){

      var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0,
        numberOfFrames = options.numberOfFrames || 1;

      that.context = options.context;
      that.width = options.width;
      that.height = options.height;
      that.image = options.image;

      that.update = function () {

              tickCount += 1;

              if (tickCount > ticksPerFrame) {

          tickCount = 0;

                  // If the current frame index is in range
                  if (frameIndex < numberOfFrames - 1) {
                      // Go to the next frame
                      frameIndex += 1;
                  } else {
                      frameIndex = 0;
                  }
              }
          };

      that.render = function () {

        // Clear the canvas
        that.context.clearRect(0, 0, that.width, that.height);

        // Draw the animation
        that.context.drawImage(
          that.image,
          frameIndex * that.width / numberOfFrames,
          0,
          that.width / numberOfFrames,
          that.height,
          0,
          0,
          that.width / numberOfFrames,
          that.height);
      };

      return that;
    }

    // Get canvas
    canvas = document.getElementById("walkAnimation1");
    canvas.width = 212;
    canvas.height = 328;

    // Create sprite sheet
    walkImage = new Image();

    // Create sprite
    walk = sprite({
      context: canvas.getContext("2d"),
      width: 1272,
      height: 328,
      image: walkImage,
      numberOfFrames: 6,
      ticksPerFrame: 4
    });

    // Load sprite sheet
    walkImage.addEventListener("load", gameLoop);
    walkImage.src = "./images/walk_spritesheet.png";
  }
})
$(document).keydown(function(e){
  //person
  var pos = {left: $('#walkAnimation1').offset().left, top: $('#walkAnimation1').offset().top };
  //office
  var oBGpos = {left: $('#officeBackground').offset().left, top: $('#officeBackground').offset().top };
  var oFGpos = {left: $('#officeForeground').offset().left, top: $('#officeForeground').offset().top };
  var cMGpos = {left: $('#cityMidground').offset().left, top: $('#cityMidground').offset().top };
  var cBpos = {left: $('#buildings').offset().left, top: $('#buildings').offset().top };

  switch(e.which){
    // left
    case 37:
    //person
    pos.left -= 20;
    //office
    if (oBGpos.left <100){ oBGpos.left += 10;}
    if (oFGpos.left <100){ oFGpos.left += 30;}
    if (cMGpos.left <1200){ cMGpos.left += 10;}
    if (cBpos.left <2800){ cBpos.left += 20;}
    //person
    $('#walkAnimation1').offset(pos);

    if(pos.left< 1600){
      $('#officeBackground').offset(oBGpos);
      $('#officeForeground').offset(oFGpos);
      clearInterval(moving);
    } else if(pos.left >= 1600){
      $('#cityMidground').offset(cMGpos);
      $('#buildings').offset(cBpos);
      moveClouds(true);
    }
    //office
    break;

    case 39:
    //person
    pos.left += 20;
    //office
    if (oBGpos.left <=100 && oBGpos.left > -450) { oBGpos.left -= 10;}
    if (oFGpos.left <=100 && oFGpos.left > -1550){ oFGpos.left -= 30;}
    if (cMGpos.left <=1200){ cMGpos.left -= 10;}
    if (cBpos.left >=2800){ cBpos.left -= 20;}
    //person
    $('#walkAnimation1').offset(pos);
    //office
    if(pos.left< 1600){
      $('#officeBackground').offset(oBGpos);
      $('#officeForeground').offset(oFGpos);
      clearInterval(moving);
    } else if(pos.left >= 1600){
      $('#cityMidground').offset(cMGpos);
      $('#buildings').offset(cBpos);
      moveClouds();
    }
    break;
  }

  function moveClouds(loop){
    var aCloudsPos = {left: $('#cloud1').offset().left, top: $('#cloud1').offset().top};
    var bCloudsPos = {left: $('#cloud2').offset().left, top: $('#cloud2').offset().top};
    var cCloudsPos = {left: $('#cloud3').offset().left, top: $('#cloud3').offset().top};
    var dCloudsPos = {left: $('#cloud4').offset().left, top: $('#cloud4').offset().top};
    var eCloudsPos = {left: $('#cloud5').offset().left, top: $('#cloud5').offset().top};
    var moving = setInterval(function(){
        aCloudsPos.left > 871 ? aCloudsPos.left-- : aCloudsPos.left = 4000;
        bCloudsPos.left > 871 ? bCloudsPos.left-- : bCloudsPos.left = 4000;
        cCloudsPos.left > 871 ? cCloudsPos.left-- : cCloudsPos.left = 4000;
        dCloudsPos.left > 871 ? dCloudsPos.left-- : dCloudsPos.left = 4000;
        eCloudsPos.left > 871 ? eCloudsPos.left-- : eCloudsPos.left = 4000;

        $('#cloud1').offset(aCloudsPos);
        $('#cloud2').offset(bCloudsPos);
        $('#cloud3').offset(cCloudsPos);
        $('#cloud4').offset(dCloudsPos);
        $('#cloud5').offset(eCloudsPos);
    }, 50);
    // if (!loop){clearInterval(moving)}
  }
});
