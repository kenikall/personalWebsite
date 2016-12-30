$(document).ready(function(){
  $('.speechBubble').hide();
  $('.kidTalk').hide();
  // $('#nyCover').opacity = 1;
  // $('#sfCover').style.opacity = 0;
  // $('#newyork').style.width('10px');
  // $('#newyork').style.height('10px');

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

    that.render = function (frame) {
      that.context.clearRect(0, 0, that.width, that.height);
      if (frame === 0) {frameIndex = 0}
      if (frame === 1) {frameIndex = 1}
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
  canvas.width = 250;
  canvas.height = 400;
  walkImage = new Image();
  walk = sprite({
    context: canvas.getContext("2d"),
    width: 1600,
    height: 400,
    image: walkImage,
    numberOfFrames: 6,
    ticksPerFrame: 1
  });
  // Contact walk 1
  canvas = document.getElementById("contactWalk1");
  canvas.width = 250;
  canvas.height = 400;
  contactWalk1Image = new Image();
  contactWalk1 = sprite({
    context: canvas.getContext("2d"),
    width: 1600,
    height: 400,
    image: walkImage,
    numberOfFrames: 6,
    ticksPerFrame: 1
  });
  // City walk
  canvas = document.getElementById("cityWalk");
  canvas.width = 373;
  canvas.height = 541;
  cityWalkImage = new Image();
  cityWalk = sprite({
    context: canvas.getContext("2d"),
    width: 560,
    height: 541,
    image: cityWalkImage,
    numberOfFrames: 2,
    ticksPerFrame: 2
  });
  // Class walk
  canvas = document.getElementById("classWalk");
  canvas.width = 250;
  canvas.height = 400;
  classWalkImage = new Image();
  classWalk = sprite({
    context: canvas.getContext("2d"),
    width: 1600,
    height: 400,
    image: classWalkImage,
    numberOfFrames: 6,
    ticksPerFrame: 1
  });
  // Sitting Animation
  canvas = document.getElementById("sitting");
  canvas.width = 292;
  canvas.height = 400;
  sittingImage = new Image();
  sitting = sprite({
    context: canvas.getContext("2d"),
    width: 2049,
    height: 400,
    image: sittingImage,
    numberOfFrames: 7,
    ticksPerFrame: 1
  });
  // Lesson walk
  canvas = document.getElementById("lessonWalk");
  canvas.width = 250;
  canvas.height = 400;
  lessonWalkImage = new Image();
  lessonWalk = sprite({
    context: canvas.getContext("2d"),
    width: 1600,
    height: 400,
    image: lessonWalkImage,
    numberOfFrames: 6,
    ticksPerFrame: 1
  });
  // Contact walk 2
  canvas = document.getElementById("contactWalk2");
  canvas.width = 250;
  canvas.height = 400;
  contactWalk2Image = new Image();
  contactWalk2 = sprite({
    context: canvas.getContext("2d"),
    width: 1600,
    height: 400,
    image: lessonWalkImage,
    numberOfFrames: 6,
    ticksPerFrame: 1
  });
  // Kids
  canvas = document.getElementById("seatA1");
  canvas.width = 166;
  canvas.height = 268;
  girlAImage = new Image();
  girlA = sprite({
    context: canvas.getContext("2d"),
    width: 300,
    height: 268,
    image: girlAImage,
    numberOfFrames: 2,
    ticksPerFrame: 1000
  });

  canvas = document.getElementById("seatA3");
  canvas.width = 166;
  canvas.height = 268;
  girlCImage = new Image();
  girlC = sprite({
    context: canvas.getContext("2d"),
    width: 300,
    height: 268,
    image: girlCImage,
    numberOfFrames: 2,
    ticksPerFrame: 1000
  });

  canvas = document.getElementById("seatB1");
  canvas.width = 166;
  canvas.height = 268;
  girlDImage = new Image();
  girlD = sprite({
    context: canvas.getContext("2d"),
    width: 300,
    height: 268,
    image: girlDImage,
    numberOfFrames: 2,
    ticksPerFrame: 1000
  });

  canvas = document.getElementById("seatB3");
  canvas.width = 166;
  canvas.height = 268;
  girlEImage = new Image();
  girlE = sprite({
    context: canvas.getContext("2d"),
    width: 300,
    height: 268,
    image: girlEImage,
    numberOfFrames: 2,
    ticksPerFrame: 1000
  });

  canvas = document.getElementById("seatA2");
  canvas.width = 166;
  canvas.height = 268;
  kidAImage = new Image();
  kidA = sprite({
    context: canvas.getContext("2d"),
    width: 332,
    height: 268,
    image: kidAImage,
    numberOfFrames: 2,
    ticksPerFrame: 1000
  });

  canvas = document.getElementById("seatA4");
  canvas.width = 166;
  canvas.height = 268;
  kidBImage = new Image();
  kidB = sprite({
    context: canvas.getContext("2d"),
    width: 332,
    height: 268,
    image: kidBImage,
    numberOfFrames: 2,
    ticksPerFrame: 1000
  });

  canvas = document.getElementById("seatB2");
  canvas.width = 166;
  canvas.height = 268;
  kidCImage = new Image();
  kidC = sprite({
    context: canvas.getContext("2d"),
    width: 332,
    height: 268,
    image: kidCImage,
    numberOfFrames: 2,
    ticksPerFrame: 1000
  });

  canvas = document.getElementById("seatB4");
  canvas.width = 166;
  canvas.height = 268;
  kidDImage = new Image();
  kidD = sprite({
    context: canvas.getContext("2d"),
    width: 332,
    height: 268,
    image: kidDImage,
    numberOfFrames: 2,
    ticksPerFrame: 1000
  });

  canvas = document.getElementById("computer1");
  canvas.width = 168;
  canvas.height = 256;
  computer1Image = new Image();
  computer1 = sprite({
    context: canvas.getContext("2d"),
    width: 336,
    height: 256,
    image: computer1Image,
    numberOfFrames: 2,
    ticksPerFrame: 1000
  });

  canvas = document.getElementById("computer2");
  canvas.width = 143;
  canvas.height = 219;
  computer2Image = new Image();
  computer2 = sprite({
    context: canvas.getContext("2d"),
    width: 286,
    height: 219,
    image: computer2Image,
    numberOfFrames: 2,
    ticksPerFrame: 1000
  });

  // Load sprite sheets
  sittingImage.src = "./images/animations/sittingSpriteSheet.png";
  walkImage.src = "./images/animations/walkSpriteSheet.png";
  cityWalkImage.src = "./images/animations/cityWalkSpriteSheetv2.png";
  classWalkImage.src = "./images/animations/teacherSpriteSheet.png";
  lessonWalkImage.src = "./images/animations/lessonWalk.png";

  kidAImage.src = "./images/classroom/kidASprites.png";
  kidBImage.src = "./images/classroom/kidBSprites.png";
  kidCImage.src = "./images/classroom/kidCSprites.png";
  kidDImage.src = "./images/classroom/kidDSprites.png";

  girlAImage.src = "./images/classroom/girlASprites.png";
  girlCImage.src = "./images/classroom/girlCSprites.png";
  girlDImage.src = "./images/classroom/girlDSprites.png";
  girlEImage.src = "./images/classroom/girlESprites.png";
  computer1Image.src = "./images/classroom/computerGirl.png";
  computer2Image.src = "./images/classroom/computerBoy.png";
  window.onload = function(){
    // standing.render();
    kidA.render();
    kidB.render();
    kidC.render();
    kidD.render();
    girlA.render();
    girlC.render();
    girlD.render();
    girlE.render();
    computer1.render();
    computer2.render();
    //centerAll();

    window.setInterval(function(){
      moveClouds();
      moveLessons();
    }, 1);
  }
})
$(document).keydown(function(e){
  //person
  var pos = {left: $('#walkAnimation').offset().left, top: $('#walkAnimation').offset().top };
  // DEBUG
  // var pos = {left: 0, top: 2000 };
  // console.log(pos.left);
  var bubble = {left: pos.left+175, top: pos.top-200}

  if(pos.left >= 3740 && Math.round(pos.top) === 500 ){ pos.left = -250; pos.top = 1300 }
  else if (pos.left >= 3740 && Math.round(pos.top) === 1300 ){ pos.left = 0; pos.top = 2300 }
  //office
  var oBGpos = { left: $('#officeBackground').offset().left, top: $('#officeBackground').offset().top };
  var oFGpos = { left: $('#officeForeground').offset().left, top: $('#officeForeground').offset().top };
  var oCpos = { left: $('#chair').offset().left, top: $('#chair').offset().top };
  //city
  var cMGpos = { left: $('#cityMidground').offset().left, top: $('#cityMidground').offset().top };
  var cBpos = { left: $('#buildings').offset().left, top: $('#buildings').offset().top };
  //classroom
  var cRBG  = { left: $('#classroomBackground').offset().left, top: $('#classroomBackground').offset().top };
  var cRFG  = { left: $('#classroomForeground').offset().left, top: $('#classroomForeground').offset().top };
  //gallery
  var gBpos = { left: $('#galleryBackground').offset().left, top: $('#galleryBackground').offset().top };
  var gSpos = { left: $('#statue').offset().left, top: $('#statue').offset().top };
  var gP1pos = { left: $('#patron1').offset().left, top: $('#patron1').offset().top };
  var gP3pos = { left: $('#patron3').offset().left, top: $('#patron3').offset().top };
  //map
  var mappos = { left: $('#map').offset().left, top: $('#map').offset().top };
  var sfScale = document.getElementById('sfCircle').offsetWidth;
  var sfTop = $('#sfCircle').offset().top;
  var sfLeft = $('#sfCircle').offset().left;
  var nyScale = document.getElementById('nyCircle').offsetWidth;
  var nyTop = $('#nyCircle').offset().top;
  var nyLeft = $('#nyCircle').offset().left;
  //bedroom
  var brPos = { left: $('#bedroomBackground').offset().left, top: $('#bedroomBackground').offset().top };

  switch(e.which){
    case 37: //left
    center1();
    //person
    pos.left -= 20;
    $('#standAnimation').offset(pos);
    $('#cityWalk').offset(pos);
    $('#classWalk').offset(pos);
    $('#lessonWalk').offset(pos);
    $('#contactWalk1').offset(pos);
    $('#contactWalk2').offset(pos);
    $('#sitting').offset(pos);
    $('.speechBubble').offset(bubble);

    //office
    if (oBGpos.left < 100){ oBGpos.left += 10; }
    if (oFGpos.left < 100){ oFGpos.left += 30; }
    if (oCpos.left < 100){ oCpos.left += 30; }
    //city
    if (cMGpos.left < 1200){ cMGpos.left += 8; }
    if (cBpos.left <= 4000){ cBpos.left += 20; }
    //classroom
    if (cRBG.left < 100){ cRBG.left += 5; }
    if (cRFG.left < 0){ cRFG.left += 8; }
    //gallery
    if (gBpos.left <= 4000){ gBpos.left += 10; }
    if (gSpos.left <= 4000){ gSpos.left += 15; }
    if (gP1pos.left <= 4000){ gP1pos.left += 15; }
    if (gP3pos.left <= 4000){ gP3pos.left += 15; }
    //bedroom
    //if (brPos.left) <= 21

    //map
    if (mappos.left > 100){ mappos.left -= 10; }

    if(pos.left< 1610 && Math.round(pos.top) === 500){
      walk.update();
      walk.render();
      $('#officeBackground').offset(oBGpos);
      $('#officeForeground').offset(oFGpos);
      $('#chair').offset(oCpos);
    } else if(pos.left >= 1610 && Math.round(pos.top) === 500){
      cityWalk.update();
      cityWalk.render();
      $('#cityMidground').offset(cMGpos);
      $('#buildings').offset(cBpos);
    } else if(pos.left <= 1250 && Math.round(pos.top) === 1300){
      classWalk.update();
      classWalk.render();
      turnKids(pos.left);
      $('#classroomBackground').offset(cRBG);
      $('#classroomForeground').offset(cRFG);
    } else if(pos.left > 1240 && pos.left < 1250 &&Math.round(pos.top) === 1300){
      lessonWalk.update();
      lessonWalk.render();
    } else if(pos.left >= 2660 && Math.round(pos.top) === 1300){
      $('#galleryBackground').offset(gBpos);
      $('#statue').offset(gSpos);
      $('#patron1').offset(gP1pos);
      $('#patron3').offset(gP3pos);
    }else if(pos.left >= 100 && Math.round(pos.top) === 2300){
      $('#map').offset(mappos);
    }else if(pos.left >= 100 && Math.round(pos.top) === 2300){
      $('#bedroomBackground').offset(brPos);
    }
    break;

    case 39:  //right
    // //person
    pos.left += 20;

    if(pos.left > 420  && pos.left < 720 && Math.round(pos.top) === 500){ $('#panel1speechBubble').show(); }
    else if (pos.left >= 720 && Math.round(pos.top) === 500){ $('#panel1speechBubble').hide(); }
    if (pos.left > 2400 && pos.left < 2700 && Math.round(pos.top) === 500) { $('#panel2speechBubble').show(); }
    else if (pos.left >= 2700 && Math.round(pos.top) === 500){ $('#panel2speechBubble').hide(); }
    if (pos.left > 420 && pos.left > 720 && Math.round(pos.top) === 1300) { $('#panel3speechBubble').show(); }
    else if (pos.left >= 820 && Math.round(pos.top) === 1300){ $('#panel3speechBubble').hide(); }
    if (pos.left > 1380 && pos.left > 1880 && Math.round(pos.top) === 1300) { $('#panel4speechBubble').show(); }
    else if (pos.left >= 1880 && Math.round(pos.top) === 1300) { $('#panel4speechBubble').hide() }

    $('#walkAnimation').offset(pos);
    $('#cityWalk').offset(pos);
    $('#classWalk').offset(pos);
    $('#lessonWalk').offset(pos);
    $('#contactWalk1').offset(pos);
    $('#contactWalk2').offset(pos);
    $('#sitting').offset(pos);
    $('.speechBubble').offset(bubble);

    //office
    if (oBGpos.left <=100 && oBGpos.left > -450) { oBGpos.left -= 10; }
    if (oFGpos.left <=100 && oFGpos.left > -1550){ oFGpos.left -= 30; }
    if (oFGpos.left > -1550){ oCpos.left -= 30; }
    //city
    if (cMGpos.left > 350){ cMGpos.left -= 8; }
    if (cBpos.left >=1840){ cBpos.left -= 20; }
    //classroom
    if (cRBG.left > -100){ cRBG.left -= 5; }
    if (cRFG.left > -600){ cRFG.left -= 15; }
    //gallery
    if (gBpos.left >= 850){ gBpos.left -= 20; }
    if (gSpos.left >= 1700){ gSpos.left -= 15; }
    if (gP1pos.left >= 1700){ gP1pos.left -= 15; }
    if (gP3pos.left >= 1700){ gP3pos.left -= 15; }
    //map
    if (mappos.left < 1628){ mappos.left -= 10; }
    if (sfTop < 45){ sfTop += 1; }
    if (sfLeft < 26){ sfLeft += 1; }
    if (sfScale > 100){ sfScale -= 20; }

    if (nyTop > 0){ nyTop -= 1; }
    if (nyLeft > -10){ nyLeft -= 1; }
    if (nyScale < 1000){ nyScale += 20; }
    //bedroom
    //if (brPos.left >= 2000){
      brPos.left -=15; //}

    if(pos.left< 1610 && Math.round(pos.top) === 500){
      walk.update();
      walk.render();
      $('#officeBackground').offset(oBGpos);
      $('#officeForeground').offset(oFGpos);
      $('#chair').offset(oCpos);
    } else if(pos.left >= 1610 && Math.round(pos.top) === 500){
      cityWalk.update();
      cityWalk.render();
      $('#cityMidground').offset(cMGpos);
      $('#buildings').offset(cBpos);
    } else if(pos.left <= 1240 && Math.round(pos.top) === 1300){
      classWalk.update();
      classWalk.render();
      turnKids(pos.left);
      if (pos.left > 0){
        $('#classroomBackground').offset(cRBG);
        $('#classroomForeground').offset(cRFG);
      }
    } else if(pos.left > 1240 && pos.left < 2660 &&Math.round(pos.top) === 1300){
      $('#awesome').hide();
      lessonWalk.update();
      lessonWalk.render();
    } else if(pos.left >= 2660 && Math.round(pos.top) === 1300){
      $('#galleryBackground').offset(gBpos);
      $('#statue').offset(gSpos);
      $('#patron1').offset(gP1pos);
      $('#patron3').offset(gP3pos);
    }else if(pos.left < 1000 && Math.round(pos.top) === 2300){
      $('#map').offset(mappos);
      $('#sfCircle').css({width:sfScale+'px', height:sfScale+'px'});
      $('#nyCircle').css({width:nyScale+'px', height:nyScale+'px'});
    }else if(pos.left >= 1000 && pos.left < 3000 && Math.round(pos.top) === 2300){
      contactWalk1.update();
      contactWalk1.render();
      contactWalk2.update();
      contactWalk2.render();
    }else if(pos.left >= 3000 && Math.round(pos.top) === 2300){
      // console.log("called");
      $('#bedroomBackground').offset(brPos);
      sitting.update();
      sitting.render();
    }
    break;
  }
  function turnKids(teacher){
    (teacher > -250 && teacher < $('#seatB1').offset().left)? $('#pictures').show() : $('#pictures').hide();
    (teacher > $('#seatB1').offset().left && teacher < $('#seatB2').offset().left)? $('#easy').show() : $('#easy').hide();
    (teacher > $('#seatB2').offset().left && teacher < $('#seatB3').offset().left)? $('#groups').show() : $('#groups').hide();
    (teacher > $('#seatB3').offset().left && teacher < $('#seatB4').offset().left)? $('#time').show() : $('#time').hide();
    (teacher > $('#seatB4').offset().left && teacher < $('#seatA4').offset().left)? $('#recess').show() : $('#recess').hide();
    (teacher > $('#computer1').offset().left)? $('#awesome').show() : $('#awesome').hide();

    ($('#seatA1').offset().left > teacher)? girlA.render(0) : girlA.render(1);
    ($('#seatA2').offset().left > teacher)? kidA.render(0) : kidA.render(1);
    ($('#seatA3').offset().left > teacher)? girlC.render(0) : girlC.render(1);
    ($('#seatA4').offset().left > teacher)? kidB.render(0) : kidB.render(1);
    ($('#seatB1').offset().left > teacher)? girlD.render(0) : girlD.render(1);
    ($('#seatB2').offset().left > teacher)? kidC.render(0) : kidC.render(1);
    ($('#seatB3').offset().left > teacher)? girlE.render(0) : girlE.render(1);
    ($('#seatB4').offset().left > teacher)? kidD.render(0) : kidD.render(1);
    ($('#computer1').offset().left > teacher)? computer1.render(0) : computer1.render(1);
    ($('#computer2').offset().left > teacher)? computer2.render(0) : computer2.render(1);
  }
});

function centerAll(){
  $(window).resize(function() {
    var win = $(window);
    $('#panelFrame *').css({width: (win.width()*.9)+'px',});
    var frame = $('#panelFrame');
    $('#comicPanel').css({width: (frame.width())+'px',});
    // $('#comicPanel').width(win.width()*.9)
    var area = $('#panelFrame');
    $('#panelFrame').css({
      position: 'absolute',
      // width: (win.width()*.9)+'px',
      left: (win.width() - area.outerWidth()) / 2
    });
    console.log('after='+$('#comicPanel').width());
  });
}

function center1(){
    $('#comicPanel').animate({ 'zoom': $('#panel1'),'top': $('#panel1').top, 'left': $('panel1').left }, 400);
}
function moveClouds(){
  if ($('#walkAnimation').offset().left >= 1610 && $('#walkAnimation').offset().left <= 4000 && Math.round($('#walkAnimation').offset().top) === 500) {
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
  if ($('#walkAnimation').offset().left >= 1280 && $('#walkAnimation').offset().left <= 2620 && Math.round($('#walkAnimation').offset().top) === 1300) {
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
