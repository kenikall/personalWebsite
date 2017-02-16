$(document).ready(function(){
  var count = 0;
  //make width fit screen
  $(window).resize(function(){
    if ($(window).width() <= 4040){ $('#comicPanel').css({width: $(window).width()*0.9+'px'}) }
    else { $('#comicPanel').css({width: 4040}) }

    $('#comicPanel').css({zoom: $('#comicPanel').width()/4040});
  })
  if ($(window).width() <= 4040){ $('#comicPanel').css({width: $(window).width()*0.9+'px'}) }
  else { $('#comicPanel').css({width: 4040}) }

  $('#comicPanel').css({zoom: $('#comicPanel').width()/4040});

  //set up initial values
  var frame = 0
    var panels = [
      {left: $('#comicPanel').offset().left+100, top: $('#comicPanel').offset().top, width: $('#comicPanel').width(), current: false, zoom: 9696 },
      {left: $('#panel1').offset().left, top: $('#panel1').offset().top, width: $('#panel1').width(), current: false },
      {left: $('#panel2').offset().left, top: $('#panel2').offset().top, width: $('#panel2').width(), current: true },
      {left: $('#panel3').offset().left, top: $('#panel3').offset().top, width: $('#panel3').width(), current: false },
      {left: $('#panel4').offset().left, top: $('#panel4').offset().top, width: $('#panel4').width(), current: false },
      {left: $('#panel5').offset().left, top: $('#panel5').offset().top, width: $('#panel5').width(), current: false },
      {left: $('#panel6').offset().left, top: $('#panel6').offset().top, width: $('#panel6').width(), current: false },
      {left: $('#panel7').offset().left, top: $('#panel7').offset().top, width: $('#panel7').width(), current: false },
      {left: $('#panel8').offset().left, top: $('#panel8').offset().top, width: $('#panel8').width(), current: false }
    ];

  $('#instructions').show();
  $('.text').hide();
  $('.speechBubble').hide();
  $('.kidTalk').hide();


  // var pos = { left: 2000, top: row3 };
  // var pos = { left: $('#panel1').offset().left-$('#walkAnimation').width(), top: $('#panel1').height *0.6 };
  var pos = { left: $('#walkAnimation').width()*-1, top: $('#panel1').height *0.6 };

  var renderCount = 0;

  var cityMGOriginal = $('#cityMidground').offset().left;
  var cityBOriginal = $('#buildings').offset().left;
  var classBGOriginal = $('#classroomBackground').offset().left;
  var classFGOriginal = $('#classroomForeground').offset().left;
  var galleryBGOriginal = $('#galleryBackground').offset().left;
  var galerySOriginal = $('#statue').offset().left;
  var galeryP1Original = $('#patron1').offset().left;
  var galeryP2Original = $('#patron3').offset().left;
  var galeryHOriginal = $('#homeBackground').offset().left;

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
  canvas.width = 266;
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
  canvas.width = 375;
  canvas.height = 600;
  contactWalk1Image = new Image();
  contactWalk1 = sprite({
    context: canvas.getContext("2d"),
    width: 2400,
    height: 600,
    image: contactWalk1Image,
    numberOfFrames: 6,
    ticksPerFrame: 1
  });

  canvas = document.getElementById("contactWalk2");
  canvas.width = 375;
  canvas.height = 600;
  contactWalk2Image = new Image();
  contactWalk2 = sprite({
    context: canvas.getContext("2d"),
    width: 2400,
    height: 600,
    image: contactWalk2Image,
    numberOfFrames: 6,
    ticksPerFrame: 1
  });
  // City walk
  canvas = document.getElementById("cityWalk");
  canvas.width = 372;
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
  canvas.width = 400;
  canvas.height = 600;
  sittingImage = new Image();
  sitting = sprite({
    context: canvas.getContext("2d"),
    width: 10000,
    height: 600,
    image: sittingImage,
    numberOfFrames: 25,
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
  // Sally
  canvas = document.getElementById("sally");
  canvas.width = 232;
  canvas.height = 224;
  sallyImage = new Image();
  sally = sprite({
    context: canvas.getContext("2d"),
    width: 1856,
    height: 224,
    image: sallyImage,
    numberOfFrames: 8,
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

  canvas = document.getElementById("leftButton");
  canvas.width = 61;
  canvas.height = 60;
  leftButtonImage = new Image();
  leftButton = sprite({
    context: canvas.getContext("2d"),
    width: 122,
    height: 60,
    image: leftButtonImage,
    numberOfFrames: 2,
    ticksPerFrame: 1000
  });

  canvas = document.getElementById("rightButton");
  canvas.width = 61;
  canvas.height = 60;
  rightButtonImage = new Image();
  rightButton = sprite({
    context: canvas.getContext("2d"),
    width: 122,
    height: 60,
    image: rightButtonImage,
    numberOfFrames: 2,
    ticksPerFrame: 1000
  });

  // Load sprite sheets
  leftButtonImage.src = "./images/buttons/leftButtons.png";
  rightButtonImage.src = "./images/buttons/rightButtons.png";

  sallyImage.src = "./images/animations/sally.png";
  contactWalk1Image.src = "./images/animations/finalWalkSpriteSheet.png";
  contactWalk2Image.src = "./images/animations/finalLessonWalk.png";
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
    sally.render();
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
    // centerAll();
    window.setInterval(function(){
      moveClouds();
      moveLessons(panels[4].current);
    }, 1);
  }

  $(document).keydown(function(e){
    $('.preloader').hide();

    switch(e.which){
      case 37: //left
      break;

      case 39:  //right
        // //person

        if( panels[0].current || panels[1].current || panels[2].current || panels[3].current || panels[4].current || panels[5].current || panels[6].current || panels[7].current || panels[8].current ){ pos.left += 20; }

        if (panels[1].current){ panel1Focus(pos); }
        else if(panels[2].current){ panel2Focus(pos); }
        else if(panels[3].current){ panel3Focus(pos); } //turnKids(pos.left);}
        else if(panels[4].current){ panel4Focus(pos); }
        else if(panels[5].current){ panel5Focus(pos); }
        else if(panels[6].current){ panel6Focus(pos); }
        else if(panels[7].current){ panel7Focus(pos); }
        else if(panels[8].current){ panel8Focus(pos); }

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

  function moveClouds(){
    if (panels[2].current) {
    var aCloudsPos = {left: $('#cloud1').offset().left, top: $('#cloud1').offset().top};
    var bCloudsPos = {left: $('#cloud2').offset().left, top: $('#cloud2').offset().top};
    var cCloudsPos = {left: $('#cloud3').offset().left, top: $('#cloud3').offset().top};
    var dCloudsPos = {left: $('#cloud4').offset().left, top: $('#cloud4').offset().top};
    var eCloudsPos = {left: $('#cloud5').offset().left, top: $('#cloud5').offset().top};

      aCloudsPos.left > 0 ? aCloudsPos.left-- : aCloudsPos.left = 4000;
      bCloudsPos.left > 0 ? bCloudsPos.left-- : bCloudsPos.left = 4000;
      cCloudsPos.left > 0 ? cCloudsPos.left-- : cCloudsPos.left = 4000;
      dCloudsPos.left > 0 ? dCloudsPos.left-- : dCloudsPos.left = 4000;
      eCloudsPos.left > 0 ? eCloudsPos.left-- : eCloudsPos.left = 4000;

      $('#cloud1').offset(aCloudsPos);
      $('#cloud2').offset(bCloudsPos);
      $('#cloud3').offset(cCloudsPos);
      $('#cloud4').offset(dCloudsPos);
      $('#cloud5').offset(eCloudsPos);
    }
  }

  function moveLessons(activate){
    if (activate) {
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

      vertLesson1Pos.top > -500 ? vertLesson1Pos.top-- : vertLesson1Pos.top = vertLesson6Pos.top+600;
      vertLesson2Pos.top > -500 ? vertLesson2Pos.top-- : vertLesson2Pos.top = vertLesson6Pos.top+600;
      vertLesson3Pos.top > -500 ? vertLesson3Pos.top-- : vertLesson3Pos.top = vertLesson1Pos.top+600;
      vertLesson4Pos.top > -500 ? vertLesson4Pos.top-- : vertLesson4Pos.top = vertLesson3Pos.top+425;
      vertLesson5Pos.top > -500 ? vertLesson5Pos.top-- : vertLesson5Pos.top = vertLesson3Pos.top+425;
      vertLesson6Pos.top > -500 ? vertLesson6Pos.top-- : vertLesson6Pos.top = vertLesson5Pos.top+600;
      vertLesson7Pos.top > -500 ? vertLesson7Pos.top-- : vertLesson7Pos.top = vertLesson5Pos.top+650;
      vertLesson8Pos.top > -500 ? vertLesson8Pos.top-- : vertLesson8Pos.top = vertLesson5Pos.top+600;

      horzLesson1Pos.top > -550 ? horzLesson1Pos.top-- : horzLesson1Pos.top = vertLesson6Pos.top+775;
      horzLesson2Pos.top > -550 ? horzLesson2Pos.top-- : horzLesson2Pos.top = horzLesson1Pos.top+425;
      horzLesson3Pos.top > -550 ? horzLesson3Pos.top-- : horzLesson3Pos.top = horzLesson1Pos.top+425;
      horzLesson4Pos.top > -550 ? horzLesson4Pos.top-- : horzLesson4Pos.top = vertLesson4Pos.top+175;

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

  function panel1Focus(pos){
    //set character in the right place
    $('#walkAnimation').css({ top: pos.top+'0px', left: pos.left+'px' });
    // for(var i=1 ; i < 9 ; i++){ $('body').removeClass('currentPanel'+i) }
    $('body').addClass('currentPanel1');
    //parallax
    var oBGpos = { left: $('#officeBackground').offset().left, top: $('#officeBackground').offset().top };
    var oFGpos = { left: $('#officeForeground').offset().left, top: $('#officeForeground').offset().top };
    //speech bubble
    var bubble = { top: pos.top+150, left: pos.left+175 }
    $('#panel1speechBubble').css({ top: bubble.top+'px', left: bubble.left+'px' });
    (pos.left > -200 ) ? $('#text1').show() : $('#text1').hide();
    (pos.left > -40 ) ? $('#text2').show() : $('#text2').hide();
    (pos.left > 350 && pos.left <= 700) ? $('#panel1speechBubble').show() : $('#panel1speechBubble').hide();
    //animations
    if(pos.left<= 1500){
      walk.update();
      walk.render();
      if (pos.left>= -180){
        //scene logic
        oBGpos.left -= ($('#officeBackground').width()-$('#panel1').width())/85;
        oFGpos.left -= $('#officeForeground').width()/250;
        $('#officeBackground').offset(oBGpos);
        $('#officeForeground').offset(oFGpos);
      }
    } else{
      panels[1].current=false;
      pos.left = -300;
      //zoom to next panel
      $('body').removeClass('currentPanel1')
      $('body').addClass('currentPanel2');
      setTimeout(function(){ panels[2].current=true; }, 1000);
    }
  }
  function panel2Focus(pos){
    //set character in the right place
    var panel2Left = $('#panel2').offset().left;
    var cityPos = pos.left + panel2Left - 100;
    $('#cityWalk').css({ top: pos.top+'px', left: cityPos+'px' });
    //zoom to current panel

    //parallax
    var cityWidth = $('#panel2').width();
    var cMGpos = { left: $('#cityMidground').offset().left, top: $('#cityMidground').offset().top };
    var cBpos = { left: $('#buildings').offset().left, top: $('#buildings').offset().top };
    //speech bubble
    (pos.left > 200 ) ? $('#text3').show() : $('#text2').hide();
    var bubble = { top: pos.top-200, left: cityPos+175 }
    $('#panel2speechBubble').css({ top: bubble.top+'px', left: bubble.left+'px' });
    (cityPos > 930 && cityPos <= 1600) ? $('#panel2speechBubble').show() : $('#panel2speechBubble').hide();
    //animations
    if(cityPos < cityWidth) {
      cityWalk.update();
      cityWalk.render();
      //scene logic
      cMGpos.left -= cityWidth/500;
      cBpos.left -= $('#buildings').width()/100;
      $('#cityMidground').offset(cMGpos);
      if (cBpos.left > 1600){ $('#buildings').offset(cBpos); }
    } else{
      panels[2].current=false;
      pos.left = 0;
      //zoom to next panel
      $('body').removeClass('currentPanel2')
      $('body').addClass('currentPanel3');
      setTimeout(function(){ panels[3].current=true; }, 1000);
    }
  }
  function panel3Focus(pos){
    //set character in the right place
    pos.left-=5;
    $('#classWalk').css({ top: '340px', left: pos.left+'px' });
    var panel3Left = $('#panel3').offset().left;
    var panel3Width = $('#panel3').width() + $('#panel3').offset().left;
    //parallax
    var cRBG  = { left: $('#classroomBackground').offset().left - panel3Width/800, top: $('#classroomBackground').offset().top };
    var cRFG  = { left: $('#classroomForeground').offset().left - panel3Width/275, top: $('#classroomForeground').offset().top };
    //speech bubble
    var bubble = { top: 150, left: pos.left+145 }
    // (pos.left > 200 ) ? $('#text4').show() : $('#text4').hide();
    // $('#panel3speechBubble').css({ top: bubble.top+'px', left: bubble.left+'px' });
    // (pos.left > 420 && pos.left < 820) ? $('#panel3speechBubble').show() : $('#panel3speechBubble').hide();
    //animations
    // if(pos.left <= panel3Width) {
      classWalk.update();
      classWalk.render();
      if (pos.left > 0 && pos.left <= 1200){
        $('#classroomBackground').offset(cRBG);
        $('#classroomForeground').offset(cRFG);
      } else {
      panels[3].current=false;
      pos.left = -300;
      //zoom to next panel
      $('body').removeClass('currentPanel3')
      $('body').addClass('currentPanel4');
      setTimeout(function(){ panels[4].current=true; }, 1000);
    }
  }
  function panel4Focus(pos){
    //set character in the right place
    pos.left-=5;
    $('#lessonWalk').css({ top: '340px', left: pos.left+'px' });

    //speech bubble
    var bubble = { top: 150, left: pos.left+145 }

    if (pos.left <= 1200){
      lessonWalk.update();
      lessonWalk.render();
    } else {
      panels[4].current=false;
      pos.left = -300;
      //zoom to next panel
      $('body').removeClass('currentPanel4')
      $('body').addClass('currentPanel5');
      setTimeout(function(){ panels[5].current=true; }, 1000);
    }
  }
  function panel5Focus(pos){
    //set character in the right place
    pos.left-=5;

    //speech bubble
    var bubble = { top: 150, left: pos.left+145 }

    var gBpos = { left: $('#galleryBackground').offset().left, top: $('#galleryBackground').offset().top };
    var gSpos = { left: $('#statue').offset().left, top: $('#statue').offset().top };
    var gP1pos = { left: $('#patron1').offset().left, top: $('#patron1').offset().top };
    var gP3pos = { left: $('#patron3').offset().left, top: $('#patron3').offset().top };

    gBpos.left -= $('#panel5').width()/95;
    gSpos.left -= $('#panel5').width()/105;
    gP1pos.left -= $('#panel5').width()/105;
    gP3pos.left -= $('#panel5').width()/105;
    if (pos.left <= 1200){
      $('#galleryBackground').offset(gBpos);
      $('#statue').offset(gSpos);
      $('#patron1').offset(gP1pos);
      $('#patron3').offset(gP3pos);
      if(renderCount<15){
        sally.update();
        sally.render();
        renderCount+=1;
      }
    } else {
      panels[5].current=false;
      pos.left = -300;
      //zoom to next panel
      $('body').removeClass('currentPanel5')
      $('body').addClass('currentPanel6');
      setTimeout(function(){ panels[6].current=true; }, 1000);
    }
  }
  function panel6Focus(pos){
    //set character in the right place
    pos.left-=5;

    //speech bubble
    if (pos.left <= 200){
    } else {
      panels[6].current=false;
      pos.left = -300;
      //zoom to next panel
      $('body').removeClass('currentPanel6')
      $('body').addClass('currentPanel7');
      setTimeout(function(){ panels[7].current=true; }, 1000);
    }
  }

  function panel7Focus(pos){
    //set character in the right place
    pos.left-=5;

    $('#contactWalk1').css({ top: '340px', left: pos.left+'px' });
    $('#contactWalk2').css({ top: '10px', left: pos.left-340+'px' });
    contactWalk1.update();
    contactWalk1.render();
    contactWalk2.update();
    contactWalk2.render();
    //speech bubble
    if (pos.left <= 1800){
    } else {
      panels[7].current=false;
      pos.left = 200;
      //zoom to next panel
      $('body').removeClass('currentPanel7')
      $('body').addClass('currentPanel8');
      setTimeout(function(){ panels[8].current=true; }, 1000);
    }
  }

  function panel8Focus(pos){
    //set character in the right place
    pos.left-=5;
    $('#sitting').css({ top: (340+renderCount)+'px', left: pos.left+'px' });

    var brPos = { left: $('#homeBackground').offset().left, top: $('#homeBackground').offset().top };
    brPos.left -= $('#homeBackground').width()/150;
    var top = $('#sitting').offset().top += 1
    if (pos.left < 780){
      $('#homeBackground').offset(brPos);
      $('#homeForeground').offset(brPos);
    }else{
      $('#thanksSpeechBubble').hide()
      $('#sitting').css({ top: '385px', left: '780px' });
    }
    if(renderCount<=48){
      sitting.update();
      sitting.render();
      renderCount+=1;
    }
    else{
      $('#codingSpeechBubble').show()
    }
    // if (pos.left <= 1350){
    // } else {
    //   panels[7].current=false;
    //   pos.left = -300;
    //   //zoom to next panel
    //   $('body').removeClass('currentPanel7')
    //   $('body').addClass('currentPanel7');
    //   setTimeout(function(){ panels[7].current=true; }, 1000);
    // }
  }
})
