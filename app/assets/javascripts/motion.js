// $(document).
$(document).ready(function(){
  window.onload = function(){
    var walk,
      walkImage,
      cityWalkImage,
      classWalkImage,
      lessonWalkImage,
      galleryWalkImage,
      canvas;

  function gameLoop(){
    window.requestAnimationFrame(gameLoop);
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

    // Load sprite sheets
    walkImage.addEventListener("load", gameLoop);
    walkImage.src = "./images/walk_spritesheet.png";
    cityWalkImage.src = "./images/city_walk.png";
    classWalkImage.src = "./images/walk_spritesheet.png";
    lessonWalkImage.src = "./images/lessonWalk.png";
    galleryWalkImage.src = "./images/walk_spritesheet.png";
  }
})
$(document).keydown(function(e){

  //person
  var pos = {left: $('#walkAnimation').offset().left, top: $('#walkAnimation').offset().top };

  //office
  var oBGpos = {left: $('#officeBackground').offset().left, top: $('#officeBackground').offset().top };
  var oFGpos = {left: $('#officeForeground').offset().left, top: $('#officeForeground').offset().top };
  var cMGpos = {left: $('#cityMidground').offset().left, top: $('#cityMidground').offset().top };
  var cBpos = {left: $('#buildings').offset().left, top: $('#buildings').offset().top };

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
    if (cMGpos.left <1200){ cMGpos.left += 10;}
    if (cBpos.left <= 4000){ cBpos.left += 20;}

    if(pos.left< 1610 && pos.top === 550){
      $('#officeBackground').offset(oBGpos);
      $('#officeForeground').offset(oFGpos);
    } else if(pos.left >= 1610 && pos.top === 550){
      $('#cityMidground').offset(cMGpos);
      $('#buildings').offset(cBpos);
      moveClouds(true);
    }
    break;

    case 39:  //right
    //person
    pos.left += 20;
    // console.log(pos);
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
    if (cMGpos.left > 130){ cMGpos.left -= 10;}
    if (cBpos.left >=1840){ cBpos.left -= 20;}

    if(pos.left< 1610 && pos.top === 550){
      $('#officeBackground').offset(oBGpos);
      $('#officeForeground').offset(oFGpos);
    } else if(pos.left >= 1610 && pos.top === 550){
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

  function moveLessons(loop){
    var vertLesson1Pos = {left: $('#lessonv1').offset().left, top: $('#lessonv1').offset().top};
    var vertLesson2Pos = {left: $('#lessonv2').offset().left, top: $('#lessonv2').offset().top};
    var vertLesson3Pos = {left: $('#lessonv3').offset().left, top: $('#lessonv3').offset().top};
    var vertLesson4Pos = {left: $('#lessonv4').offset().left, top: $('#lessonv4').offset().top};
    var vertLesson5Pos = {left: $('#lessonv5').offset().left, top: $('#lessonv5').offset().top};
    var vertLesson6Pos = {left: $('#lessonv6').offset().left, top: $('#lessonv6').offset().top};
    var vertLesson7Pos = {left: $('#lessonv7').offset().left, top: $('#lessonv7').offset().top};

    var horzLesson1Pos = {left: $('#lessonh1').offset().left, top: $('#lessonh1').offset().top};
    var horzLesson2Pos = {left: $('#lessonh2').offset().left, top: $('#lessonh2').offset().top};
    var horzLesson3Pos = {left: $('#lessonh3').offset().left, top: $('#lessonh3').offset().top};
    var horzLesson4Pos = {left: $('#lessonh4').offset().left, top: $('#lessonh4').offset().top};
    var horzLesson5Pos = {left: $('#lessonh5').offset().left, top: $('#lessonh5').offset().top};

    var moving = setInterval(function(){
        // vertLesson1Pos.top > -
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
