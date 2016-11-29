// $(document).
$(document).ready(function(){
  window.onload = function(){
    var walk,
      walkImage,
      cityWalkImage,
      classWalkImage,
      lessonWalkImage,
      galleryWalkImage,
      durakImage,
      vegiImage,
      canvas;

    function gameLoop(){
      window.requestAnimationFrame(gameLoop);
      moveClouds();
      moveLessons();
      walk.update();
      walk.render();
      cityWalk.update();
      cityWalk.render();
      classWalk.update();
      classWalk.render();
      lessonWalk.update();
      lessonWalk.render();
      galleryWalk.update();
      galleryWalk.render();
      vegimon.update();
      vegimon.render();
      durak.update();
      durak.render();
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
            if (frameIndex < numberOfFrames - 1) { frameIndex += 1; }
            else { frameIndex = 0; }
          }
        };

      that.render = function () {
        that.context.clearRect(0, 0, that.width, that.height);

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

    // Office walk
    canvas = document.getElementById("walkAnimation");
    canvas.width = 212;
    canvas.height = 328;
    walkImage = new Image();
    walk = sprite({
      context: canvas.getContext("2d"),
      width: 1272,
      height: 328,
      image: walkImage,
      numberOfFrames: 6,
      ticksPerFrame: 4
    });
    // City walk
    canvas = document.getElementById("cityWalk");
    canvas.width = 424;
    canvas.height = 656;
    cityWalkImage = new Image();
    cityWalk = sprite({
      context: canvas.getContext("2d"),
      width: 2544,
      height: 656,
      image: cityWalkImage,
      numberOfFrames: 6,
      ticksPerFrame: 4
    });
    // Class walk
    canvas = document.getElementById("classWalk");
    canvas.width = 212;
    canvas.height = 328;
    classWalkImage = new Image();
    classWalk = sprite({
      context: canvas.getContext("2d"),
      width: 1272,
      height: 328,
      image: classWalkImage,
      numberOfFrames: 6,
      ticksPerFrame: 4
    });
    // Lesson walk
    canvas = document.getElementById("lessonWalk");
    canvas.width = 212;
    canvas.height = 328;
    lessonWalkImage = new Image();
    lessonWalk = sprite({
      context: canvas.getContext("2d"),
      width: 1272,
      height: 328,
      image: lessonWalkImage,
      numberOfFrames: 6,
      ticksPerFrame: 4
    });
    // Gallery walk
    canvas = document.getElementById("galleryWalk");
    canvas.width = 212;
    canvas.height = 328;
    galleryWalkImage = new Image();
    galleryWalk = sprite({
      context: canvas.getContext("2d"),
      width: 1272,
      height: 328,
      image: galleryWalkImage,
      numberOfFrames: 6,
      ticksPerFrame: 4
    });

    canvas = document.getElementById("durak");
    canvas.width = 550;
    canvas.height = 400;
    durakImage = new Image();
    durak = sprite({
      context: canvas.getContext("2d"),
      width: 2750,
      height: 400,
      image: durakImage,
      numberOfFrames: 5,
      ticksPerFrame: 20
    });

    canvas = document.getElementById("vegimon");
    canvas.width = 500;
    canvas.height = 400;
    vegiImage = new Image();
    vegimon = sprite({
      context: canvas.getContext("2d"),
      width: 2500,
      height: 400,
      image: vegiImage,
      numberOfFrames: 5,
      ticksPerFrame: 20
    });
    // Load sprite sheets
    walkImage.addEventListener("load", gameLoop);
    durakImage.addEventListener("click", gameLoop);
    vegiImage.addEventListener("click", gameLoop);
    walkImage.src = "./images/walk_spritesheet.png";
    cityWalkImage.src = "./images/city_walk.png";
    classWalkImage.src = "./images/walk_spritesheet.png";
    lessonWalkImage.src = "./images/lessonWalk.png";
    galleryWalkImage.src = "./images/walk_spritesheet.png";
    durakImage.src = "./images/gallery/durak.png";
    vegiImage.src = "./images/gallery/vegimongrow.png";
  }

})
$(document).keydown(function(e){
  //person
  var pos = {left: $('#walkAnimation').offset().left, top: $('#walkAnimation').offset().top };
  if(pos.left >= 4000 && Math.round(pos.top) === 550 ){ pos.left = 200; pos.top = 1450 }
  else if (pos.left >= 4000 && Math.round(pos.top) === 1000 ){ pos.left = 200; pos.top = 2000 }
  //office
  var oBGpos = {left: $('#officeBackground').offset().left, top: $('#officeBackground').offset().top };
  var oFGpos = {left: $('#officeForeground').offset().left, top: $('#officeForeground').offset().top };
  var cMGpos = {left: $('#cityMidground').offset().left, top: $('#cityMidground').offset().top };
  var cBpos = {left: $('#buildings').offset().left, top: $('#buildings').offset().top };
  var gBpos = {left: $('#galleryBackground').offset().left, top: $('#galleryBackground').offset().top };
  var gSpos = {left: $('#statue').offset().left, top: $('#statue').offset().top };

  switch(e.which){
    case 37: //left
    //person
    pos.left -= 20;
    $('#walkAnimation').offset(pos);
    $('#cityWalk').offset(pos);
    $('#classWalk').offset(pos);
    $('#lessonWalk').offset(pos);
    $('#galleryWalk').offset(pos);

    //office
    if (oBGpos.left <100){ oBGpos.left += 10;}
    if (oFGpos.left <100){ oFGpos.left += 30;}
    if (cMGpos.left <1200){ cMGpos.left += 8;}
    if (cBpos.left <= 4000){ cBpos.left += 20;}
    if (gBpos.left <= 4000){ gBpos.left += 10;}
    if (gSpos.left <= 4000){ gSpos.left += 15;}

    if(pos.left< 1610 && Math.round(pos.top) === 550){
      $('#officeBackground').offset(oBGpos);
      $('#officeForeground').offset(oFGpos);
    } else if(pos.left >= 1610 && Math.round(pos.top) === 550){
      $('#cityMidground').offset(cMGpos);
      $('#buildings').offset(cBpos);
    } else if(pos.left >= 1280 && Math.round(pos.top) === 1450){
      console.log("bgd = " + gBpos.left);
      console.log("statue = " + gSpos.left);
      $('#galleryBackground').offset(gBpos);
      $('#statue').offset(gSpos);
    }
    break;

    case 39:  //right
    //person
    pos.left += 20;
    if (pos.top === 550 && pos.left >= 3750) {
      pos.top = 1450;
      pos.left = 320;
    }

    $('#walkAnimation').offset(pos);
    $('#cityWalk').offset(pos);
    $('#classWalk').offset(pos);
    $('#lessonWalk').offset(pos);
    $('#galleryWalk').offset(pos);

    //office
    if (oBGpos.left <=100 && oBGpos.left > -450) { oBGpos.left -= 10;}
    if (oFGpos.left <=100 && oFGpos.left > -1550){ oFGpos.left -= 30;}
    if (cMGpos.left > 350){ cMGpos.left -= 8;}
    if (cBpos.left >=1840){ cBpos.left -= 20;}
    if (gBpos.left >= 850){ gBpos.left -= 10;}
    // if (gSpos.left >= 1700){ gSpos.left -= 15;}

    if(pos.left< 1610 && Math.round(pos.top) === 550){
      $('#officeBackground').offset(oBGpos);
      $('#officeForeground').offset(oFGpos);
    } else if(pos.left >= 1610 && Math.round(pos.top) === 550){
      console.log("buildings = " + cBpos.left);
      $('#cityMidground').offset(cMGpos);
      $('#buildings').offset(cBpos);
    } else if(pos.left >= 2540 && Math.round(pos.top) === 1450){
      console.log("bgd = " + gBpos.left);
      console.log("statue = " + gSpos.left);
      $('#galleryBackground').offset(gBpos);
      $('#statue').offset(gSpos);
    }
    break;
  }
});

function moveClouds(){
  if ($('#walkAnimation').offset().left >= 1610 && $('#walkAnimation').offset().left <= 4000 && Math.round($('#walkAnimation').offset().top) === 550) {
  var aCloudsPos = {left: $('#cloud1').offset().left, top: $('#cloud1').offset().top};
  var bCloudsPos = {left: $('#cloud2').offset().left, top: $('#cloud2').offset().top};
  var cCloudsPos = {left: $('#cloud3').offset().left, top: $('#cloud3').offset().top};
  var dCloudsPos = {left: $('#cloud4').offset().left, top: $('#cloud4').offset().top};
  var eCloudsPos = {left: $('#cloud5').offset().left, top: $('#cloud5').offset().top};

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
  }
}

function moveLessons(){
  if ($('#walkAnimation').offset().left >= 1280 && $('#walkAnimation').offset().left <= 2620 && Math.round($('#walkAnimation').offset().top) === 1450) {
  var vertLesson1Pos = {left: $('#lessonv1').offset().left, top: $('#lessonv1').offset().top};
  var vertLesson2Pos = {left: $('#lessonv2').offset().left, top: $('#lessonv2').offset().top};
  var vertLesson3Pos = {left: $('#lessonv3').offset().left, top: $('#lessonv3').offset().top};
  var vertLesson4Pos = {left: $('#lessonv4').offset().left, top: $('#lessonv4').offset().top};
  var vertLesson5Pos = {left: $('#lessonv5').offset().left, top: $('#lessonv5').offset().top};
  var vertLesson6Pos = {left: $('#lessonv6').offset().left, top: $('#lessonv6').offset().top};
  var vertLesson7Pos = {left: $('#lessonv7').offset().left, top: $('#lessonv7').offset().top};
  var vertLesson8Pos = {left: $('#lessonv8').offset().left, top: $('#lessonv8').offset().top};

  var horzLesson1Pos = {left: $('#lessonh1').offset().left, top: $('#lessonh1').offset().top};
  var horzLesson2Pos = {left: $('#lessonh2').offset().left, top: $('#lessonh2').offset().top};
  var horzLesson3Pos = {left: $('#lessonh3').offset().left, top: $('#lessonh3').offset().top};
  var horzLesson4Pos = {left: $('#lessonh4').offset().left, top: $('#lessonh4').offset().top};

  vertLesson1Pos.top > 400 ? vertLesson1Pos.top-- : vertLesson1Pos.top = vertLesson6Pos.top+600;
  vertLesson2Pos.top > 400 ? vertLesson2Pos.top-- : vertLesson2Pos.top = vertLesson6Pos.top+600;
  vertLesson3Pos.top > 400 ? vertLesson3Pos.top-- : vertLesson3Pos.top = vertLesson1Pos.top+600;
  vertLesson4Pos.top > 400 ? vertLesson4Pos.top-- : vertLesson4Pos.top = vertLesson3Pos.top+425;
  vertLesson5Pos.top > 400 ? vertLesson5Pos.top-- : vertLesson5Pos.top = vertLesson3Pos.top+425;
  vertLesson6Pos.top > 400 ? vertLesson6Pos.top-- : vertLesson6Pos.top = vertLesson5Pos.top+600;
  vertLesson7Pos.top > 400 ? vertLesson7Pos.top-- : vertLesson7Pos.top = vertLesson5Pos.top+650;
  vertLesson8Pos.top > 400 ? vertLesson8Pos.top-- : vertLesson8Pos.top = vertLesson5Pos.top+600;

  horzLesson1Pos.top > 450 ? horzLesson1Pos.top-- : horzLesson1Pos.top = vertLesson6Pos.top+775;
  horzLesson2Pos.top > 450 ? horzLesson2Pos.top-- : horzLesson2Pos.top = horzLesson1Pos.top+425;
  horzLesson3Pos.top > 450 ? horzLesson3Pos.top-- : horzLesson3Pos.top = horzLesson1Pos.top+425;
  horzLesson4Pos.top > 450 ? horzLesson4Pos.top-- : horzLesson4Pos.top = vertLesson4Pos.top+175;

  $('#lessonv1').offset(vertLesson1Pos);
  $('#lessonv2').offset(vertLesson2Pos);
  $('#lessonv3').offset(vertLesson3Pos);
  $('#lessonv4').offset(vertLesson4Pos);
  $('#lessonv5').offset(vertLesson5Pos);
  $('#lessonv6').offset(vertLesson6Pos);
  $('#lessonv7').offset(vertLesson7Pos);
  $('#lessonv8').offset(vertLesson8Pos);
  $('#lessonh1').offset(horzLesson1Pos);
  $('#lessonh2').offset(horzLesson2Pos);
  $('#lessonh3').offset(horzLesson3Pos);
  $('#lessonh4').offset(horzLesson4Pos);
  }
}
