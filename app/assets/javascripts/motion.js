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
    canvas = document.getElementById("walkAnimation");
    console.log(canvas);
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
  var pos = {left: $('#walkAnimation').offset().left, top: $('#walkAnimation').offset().top };
  //office
  var oBGpos = {left: $('#officeBackground').offset().left, top: $('#officeBackground').offset().top };
  var oFGpos = {left: $('#officeForeground').offset().left, top: $('#officeForeground').offset().top };

  switch(e.which){
    // left
    case 37:
    //person
    pos.left -= 20;
    //office
    console.log("oBGpos = "+oBGpos.left);
    console.log("oFGpos = "+oFGpos.left);
    if (oBGpos.left <100){ oBGpos.left += 10;}
    if (oFGpos.left <100){ oFGpos.left += 30;}
    //person
    $('#walkAnimation').offset(pos);
    //office
    $('#officeBackground').offset(oBGpos);
    $('#officeForeground').offset(oFGpos);
    break;

    case 39:
    //person
    pos.left += 20;
    //office
    console.log("oBGpos = "+oBGpos.left);
    console.log("oFGpos = "+oFGpos.left);
    if (oBGpos.left <=100 && oBGpos.left > -450) { oBGpos.left -= 10;}
    if (oFGpos.left <=100 && oFGpos.left > -1550){ oFGpos.left -= 30;}
    //person
    $('#walkAnimation').offset(pos);
    //office
    $('#officeBackground').offset(oBGpos);
    $('#officeForeground').offset(oFGpos);
    break;
  }
});



// $(document).keydown(function(e){

//   var bgPos1 = {left: $('#background1').offset().left, top: $('#background1').offset().top };
//   var bgPos2 = {left: $('#background2').offset().left, top: $('#background2').offset().top };
//   var bgPos3 = {left: $('#background3').offset().left, top: $('#background3').offset().top };

//   var mgPos1 = {left: $('#midground1').offset().left, top: $('#midground1').offset().top };
//   var mgPos2 = {left: $('#midground2').offset().left, top: $('#midground2').offset().top };
//   var mgPos3 = {left: $('#midground3').offset().left, top: $('#midground3').offset().top };

//   var fgPos1 = {left: $('#foreground1').offset().left, top: $('#foreground1').offset().top };
//   var fgPos2 = {left: $('#foreground2').offset().left, top: $('#foreground2').offset().top };
//   var fgPos3 = {left: $('#foreground3').offset().left, top: $('#foreground3').offset().top };
//   switch(e.which){
//     // left
//     case 37:
//       //background
//       bgPos1.left > -1000 ? bgPos1.left -= 5 : bgPos1.left = $('#background3').offset().left+995;
//       bgPos2.left > -1000 ? bgPos2.left -= 5 : bgPos2.left = $('#background1').offset().left+995;
//       bgPos3.left > -1000 ? bgPos3.left -= 5 : bgPos3.left = $('#background2').offset().left+995;
//       $('#background1').offset(bgPos1);
//       $('#background2').offset(bgPos2);
//       $('#background3').offset(bgPos3);

//       //midground
//       mgPos1.left > -1000 ? mgPos1.left -= 10 : mgPos1.left = $('#midground3').offset().left+990;
//       mgPos2.left > -1000 ? mgPos2.left -= 10 : mgPos2.left = $('#midground1').offset().left+990;
//       mgPos3.left > -1000 ? mgPos3.left -= 10 : mgPos3.left = $('#midground2').offset().left+990;
//       $('#midground1').offset(mgPos1);
//       $('#midground2').offset(mgPos2);
//       $('#midground3').offset(mgPos3);

//       //foreground
//       fgPos1.left > -1000 ? fgPos1.left -= 20 : fgPos1.left = $('#foreground3').offset().left+980;
//       fgPos2.left > -1000 ? fgPos2.left -= 20 : fgPos2.left = $('#foreground1').offset().left+980;
//       fgPos3.left > -1000 ? fgPos3.left -= 20 : fgPos3.left = $('#foreground2').offset().left+980;
//       $('#foreground1').offset(fgPos1);
//       $('#foreground2').offset(fgPos2);
//       $('#foreground3').offset(fgPos3);
//     break;

//     // right
//     case 39:
//       //background
//       bgPos1.left < 3000 ? bgPos1.left += 5 : bgPos1.left = $('#background2').offset().left-995;
//       bgPos2.left < 3000 ? bgPos2.left += 5 : bgPos2.left = $('#background3').offset().left-995;
//       bgPos3.left < 3000 ? bgPos3.left += 5 : bgPos3.left = $('#background1').offset().left-995;
//       $('#background1').offset(bgPos1);
//       $('#background2').offset(bgPos2);
//       $('#background3').offset(bgPos3);

//       //midground
//       mgPos1.left < 3000 ? mgPos1.left += 10 : mgPos1.left = $('#midground2').offset().left-990;
//       mgPos2.left < 3000 ? mgPos2.left += 10 : mgPos2.left = $('#midground3').offset().left-990;
//       mgPos3.left < 3000 ? mgPos3.left += 10 : mgPos3.left = $('#midground1').offset().left-990;
//       $('#midground1').offset(mgPos1);
//       $('#midground2').offset(mgPos2);
//       $('#midground3').offset(mgPos3);

//       //foreground
//       fgPos1.left < 3000 ? fgPos1.left += 20 : fgPos1.left = $('#foreground2').offset().left-980;
//       fgPos2.left < 3000 ? fgPos2.left += 20 : fgPos2.left = $('#foreground3').offset().left-980;
//       console.log(fgPos3)
//       fgPos3.left < 3000 ? fgPos3.left += 20 : fgPos3.left = $('#foreground1').offset().left-980;
//       $('#foreground1').offset(fgPos1);
//       $('#foreground2').offset(fgPos2);
//       $('#foreground3').offset(fgPos3);
//     break;

//     default: return;
//   }
// });

