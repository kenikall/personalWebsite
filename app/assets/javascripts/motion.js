$(document).ready(function(){
  var start = true;
  var i = 1;
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
  var zoom = $('#comicPanel').css('zoom');
  var frame = 0
    var panels = [
      {left: $('#comicPanel').offset().left+100, top: $('#comicPanel').offset().top, width: $('#comicPanel').width(), current: false, zoom: 9696 },
      {left: $('#panel1').offset().left, top: $('#panel1').offset().top, width: $('#panel1').width(), current: true },
      {left: $('#panel2').offset().left, top: $('#panel2').offset().top, width: $('#panel2').width(), current: false },
      {left: $('#panel3').offset().left, top: $('#panel3').offset().top, width: $('#panel3').width(), current: false },
      {left: $('#panel4').offset().left, top: $('#panel4').offset().top, width: $('#panel4').width(), current: false },
      {left: $('#panel5').offset().left, top: $('#panel5').offset().top, width: $('#panel5').width(), current: false },
      {left: $('#panel6').offset().left, top: $('#panel6').offset().top, width: $('#panel6').width(), current: false },
      {left: $('#panel7').offset().left, top: $('#panel7').offset().top, width: $('#panel7').width(), current: false },
      {left: $('#panel8').offset().left, top: $('#panel8').offset().top, width: $('#panel8').width(), current: false }
    ];
  var row =[1, 0, 0];
  $('#instructions').show();
  $('.text').hide();
  $('.speechBubble').hide();
  $('.kidTalk').hide();
  var row1 = 500;
  var row2 = 1350;
  var row3 = 2300;
  var leftStart = $('#comicPanel').offset().left;

  // var pos = { left: 2000, top: row3 };
  var pos = { left: $('#panel1').offset().left-$('#walkAnimation').width(), top: $('#panel1').height *0.6 };

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
      moveLessons();
    }, 1);
  }

  $(document).keydown(function(e){
    $('.preloader').hide();
    //Positioning




    var panel3Width = $('#panel3').width() + $('#panel3').offset().left;
    // var panel4Transition = $('#panel3').width() + $('#panel4').width() + $('#lessonWalk').width();
    var panel4Width = $('#panel4').width() + $('#panel4').offset().left;
    var panel5Transition = $('#panel3').width() + $('#panel4').width() + $('#galleryBackground').width();
    var panel6Transition = $('#panel6').width();
    var panel7Transition = $('#panel6').width() + $('#panel7').width() + $('#contactWalk1').width();
    var panel7Width = $('#panel7').width()*0.67 + $('#panel7').offset().left;
    var panel8Width = $('#panel8').width() + $('#panel8').offset().left;
    var panel8Transition = $('#panel7').offset().left + $('#panel7').width()*0.67;

    var classWidth = $('#classroomBackground').width();
    var lessonWidth = $('#panel4').width();
    var mapWidth = $('#panel6').width();
    var contactWidth = $('#panel7').width();
    var homeWidth = $('#homeBackground').width();

    var bubble = {left: pos.left+175, top: pos.top-200}
    if(pos.left >= 3950 && row[0] ){ pos.left = -250; row = [0,1,0]; pos.top = row2 }
    else if (pos.left >= 3950 && row[1] ){ pos.left = 0; row = [0,0,1]; pos.top = row3 }
    //office

    //city

    //classroom
    var cRBG  = { left: $('#classroomBackground').offset().left, top: $('#classroomBackground').offset().top };
    var cRFG  = { left: $('#classroomForeground').offset().left, top: $('#classroomForeground').offset().top };
    //gallery
    var gBpos = { left: $('#galleryBackground').offset().left, top: $('#galleryBackground').offset().top };
    var gSpos = { left: $('#statue').offset().left, top: $('#statue').offset().top };
    var gP1pos = { left: $('#patron1').offset().left, top: $('#patron1').offset().top };
    var gP3pos = { left: $('#patron3').offset().left, top: $('#patron3').offset().top };
    //map
    var nyOpacity = parseFloat($('#newyork').css('opacity'));
    //bedroom
    var brPos = { left: $('#homeBackground').offset().left, top: $('#homeBackground').offset().top };

    switch(e.which){
      case 37: //left
        if (i===1){
          $('body').addClass('currentPanel1');
          i++;
        }else if(i===2){
          $('body').removeClass('currentPanel1');
          $('body').addClass('currentPanel2');
          i++;
        }else if(i===3){
          $('body').removeClass('currentPanel2');
          $('body').addClass('currentPanel3');
          i++;
        }else if(i===4){
          $('body').removeClass('currentPanel3');
          $('body').addClass('currentPanel4');
          i++;
        }else if(i===5){
          $('body').removeClass('currentPanel4');
          $('body').addClass('currentPanel5');
          i++;
        }else if(i===6){
          $('body').removeClass('currentPanel5');
          $('body').addClass('currentPanel6');
          i++;
        }else if(i===7){
          $('body').removeClass('currentPanel6');
          $('body').addClass('currentPanel7');
          i++;
        }else if(i===8){
          $('body').removeClass('currentPanel7');
          $('body').addClass('currentPanel8');
          i++;
        }else {
          $('body').removeClass('currentPanel8');
          i = 1;
        }

      console.log('i='+i);
      break;

      case 39:  //right
      // //person
      pos.left += 2;
      console.log('pos '+pos.left);

      // console.log(i);
      // currentPanel(i);
      // i++;


      if (pos.left > 420 && pos.left > 720 && row[1]) { $('#panel3speechBubble').show(); }
      else if (pos.left >= 820 && row[1]){ $('#panel3speechBubble').hide(); }
      if (pos.left > 1380 && pos.left > 1880 && row[1]) { $('#panel4speechBubble').show(); }
      else if (pos.left >= 1880 && row[1]){ $('#panel4speechBubble').hide() }
      if (pos.left > 1380 && pos.left > 1880 && row[1]) { $('#panel4speechBubble').show(); }



      $('#classWalk').offset(pos);
      $('#lessonWalk').offset(pos);
      $('#contactWalk2').offset(pos);
      $('#contactWalk1').offset(pos);
      $('#sitting').offset(pos);
      $('.speechBubble').offset(bubble);
      $('#thanksSpeechBubble').offset({left: bubble.left+50, top: bubble.top-50});

      //office

      //city

      //classroom
      if (pos.left < panel3Width){
        cRBG.left -= panel3Width/420;
        cRFG.left -= panel3Width/120;
      }
      //gallery
      if (pos.left > panel4Width){
        gBpos.left -= $('#panel5').width()/75;
        gSpos.left -= $('#panel5').width()/85;
        gP1pos.left -= $('#panel5').width()/85;
        gP3pos.left -= $('#panel5').width()/85;
      }
      //map
      if (nyOpacity < 1){ nyOpacity += 0.05; }
      //bedroom
      if (pos.left > 2700 && pos.left < 3500){
        brPos.left -= $('#homeBackground').width()/150;
      }

      //walking script
      if (panels[1].current){
        $('#walkAnimation').offset(pos);
        panel1Focus(pos);
      } else if(panels[2].current){
        $('#cityWalk').offset(pos);
        panel2Focus(pos);
      }
      // if(pos.left>= panel1Left-$('#walkAnimation').width() && pos.left<= panel1Width && row[0]){
      //   if(!panels[1].current){ currentPanel(1); }
      //   walk.update();
      //   walk.render();
      //   if (pos.left>= panel1Left){
      //     $('#officeBackground').offset(oBGpos);
      //     $('#officeForeground').offset(oFGpos);
      //   }
    //   } else if(pos.left> panel1Width && row[0]){
    //     if(!panels[2].current){
    //       currentPanel(2);
    //       pos.left = panel2Left;
    //     }
    //     cityWalk.update();
    //     cityWalk.render();
    //     $('#cityMidground').offset(cMGpos);
    //     $('#buildings').offset(cBpos);
    // }
      // } else if(pos.left < 1200 && row[1]){
      //   if(!panels[3].current){ currentPanel(3); }
      //   classWalk.update();
      //   classWalk.render();
      //   turnKids(pos.left);
      //   lessonWalk.update();
      //   lessonWalk.render();
      //   if (pos.left > 0){
      //     $('#classroomBackground').offset(cRBG);
      //     $('#classroomForeground').offset(cRFG);
      //   }
      // } else if(pos.left >= 1200 && pos.left < 2600 && row[1]){
      //   if(!panels[4].current){ currentPanel(4); }
      //   lessonWalk.update();
      //   lessonWalk.render();
      // }else if(pos.left >= 2600 && row[1]){
      //   if(!panels[5].current){ currentPanel(5); }
      //   $('#galleryBackground').offset(gBpos);
      //   $('#statue').offset(gSpos);
      //   $('#patron1').offset(gP1pos);
      //   $('#patron3').offset(gP3pos);
      //   if(renderCount<15){
      //     sally.update();
      //     sally.render();
      //     renderCount+=1;
      //   }
      // }else if(pos.left < 1000 && pos && row[2]){
      //   if(!panels[6].current){ currentPanel(6); }
      //   renderCount = 0;
      //   $('#newyork').css({opacity:nyOpacity});
      // }else if(pos.left >= 1000 && pos.left < 2700 && row[2]){
      //   if(!panels[7].current){ currentPanel(7); }
      //   contactWalk1.update();
      //   contactWalk1.render();
      //   contactWalk2.update();
      //   contactWalk2.render();
      // }
      // else if(pos.left >= 2700 && pos.left < 2580  && row[2]){
      //   if(!panels[8].current){ currentPanel(8); }
      //   contactWalk1.update();
      //   contactWalk1.render();
      //   $('#homeBackground').offset(brPos);
      //   $('#homeForeground').offset(brPos);
      // }else if(pos.left >= 2580 && pos.left < 3000 && row[2]){
      //   $('#thanksSpeechBubble').show()
      //   contactWalk1.update();
      //   contactWalk1.render();
      //   $('#homeBackground').offset(brPos);
      //   $('#homeForeground').offset(brPos);
      //   sitting.update();
      //   sitting.render();
      //   renderCount+=1;
      // }else if(pos.left >= 3000 && row[2]){
      //   contactWalk1.context.clearRect(0, 0, $('#contactWalk1').width(), $('#contactWalk1').height());
      //   if (leftPos < 3440){
      //     $('#homeBackground').offset(brPos);
      //     $('#homeForeground').offset(brPos);
      //   }else{
      //     $('#thanksSpeechBubble').hide()
      //     pos.left = 3440;
      //     $('#sitting').offset(pos);
      //   }
      //   if(renderCount<=48){
      //     sitting.update();
      //     sitting.render();
      //     renderCount+=1;
      //   }
      //   else{
      //     $('#codingSpeechBubble').show()
      //   }
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
    if ($('#walkAnimation').offset().left >= 1280 && $('#walkAnimation').offset().left <= 2620 && row[1]) {
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

  function centerAll(){
    var win = $(window);
    var winOffset = { left: $(window).width()/2 - $('#comicPanel').width()/2, top: $('#comicPanel').width()*0.01 };
    $('#comicPanel').offset(winOffset);
  }
  function currentPanel(panel){
    for(var i = 0; i < panels.length; i++){ panels[i].current = (i === panel ) ? true : false; }
    zoomTo(panel);
  }

  function zoomTo(panel){
    // console.log('panel= '+panel);
    // console.log(panels[panel].left*-1-($(window).width()-panels[panel].width)/2);
    // console.log('left'+panels[panel].left);
    console.log($('#comicPanel').width()/2);
    $('#comicPanel').stop();
    $('#comicPanel').animate({
      width: panels[panel].zoom,
      top: panels[panel].top + $('#comicPanel').width()*0.05,
      left: panels[panel].left
    },500, function(){});
    console.log($('#comicPanel').width()/2);
  }

  function panel1Focus(pos){
    //zoom to current panel
    $('body').addClass('currentPanel1');
    if (start){
      start = false;
      $('walkAnimation').offset({left: $('panel1').offset().left-$('walkAnimation').width()})
    }
    for(var i = 0; i < panels.length; i++){ panels[i].current = (i === 1 ) ? true : false; }
    // if ($('#comicPanel').css('zoom')!==panels[1].width/3000){ zoomTo(1); }
    //set positions
    var panel1Left = $('#panel1').offset().left;
    var panel1Width = $('#panel1').width() + $('#panel1').offset().left;
    var officeBGCurrent = $('#officeBackground').offset().left + $('#officeBackground').width();
    var officeWidth = $('#officeBackground').width();
    var officeBGOriginal = $('#officeBackground').offset().left;
    var oBGpos = { left: $('#officeBackground').offset().left, top: $('#officeBackground').offset().top };
    var oFGpos = { left: $('#officeForeground').offset().left, top: $('#officeForeground').offset().top };
    //scene logic
    if (oBGpos.left <= officeBGOriginal && officeBGCurrent > panel1Width) {
      oBGpos.left -= (officeWidth-$('#panel1').width())/90;
      oFGpos.left -= $('#officeForeground').width()/200;
    }
    //speech bubble
    $('#panel1speechBubble').offset({left: pos.left+175, top: pos.top-200});
    if(pos.left > 420  && pos.left < +720 && row[0]){ $('#panel1speechBubble').show(); }
    else if (pos.left >= 720 && row[0]){ $('#panel1speechBubble').hide(); }
    //animations
    if(pos.left<= panel1Width && row[0]){
      walk.update();
      walk.render();
      if (pos.left>= panel1Left){
        $('#officeBackground').offset(oBGpos);
        $('#officeForeground').offset(oFGpos);
      }
    } else{
      panels[1].current=false;
      panels[2].current=true;

      // zoomTo(2);
      pos.left = $('#panel2').offset().left;
      panel2Focus(pos);
    }
  }
  function panel2Focus(pos){
    //set positions
    var panel2Left = $('#panel2').offset().left;
    var panel2Width = $('#panel2').width() + $('#panel2').offset().left;
    var cityBCurrent = $('#buildings').offset().left + $('#buildings').width();
    var cityWidth = $('#cityMidground').width();
    var cMGpos = { left: $('#cityMidground').offset().left, top: $('#cityMidground').offset().top };
    var cBpos = { left: $('#buildings').offset().left, top: $('#buildings').offset().top };
    //scene logic
    if (cityBCurrent > panel2Width-$('#comicPanel').width()*0.025*3){
      cMGpos.left -= cityWidth/500;
      cBpos.left -= $('#buildings').width()/100;
    }
    //speech bubble
    $('#panel2speechBubble').offset({left: pos.left+175, top: pos.top-200});
    if (pos.left > 2400 && pos.left < +2700 && row[0]) { $('#panel2speechBubble').show(); }
    else if (pos.left >= 2700 && row[0]){ $('#panel2speechBubble').hide(); }
    //animations
    if(pos.left< panel2Width + $('cityWalk').width() && row[0]){
      if(!panels[2].current){
        currentPanel(2);
        pos.left = panel2Left;
      }
      cityWalk.update();
      cityWalk.render();
      $('#cityMidground').offset(cMGpos);
      $('#buildings').offset(cBpos);
    } else{
      panels[2].current=false;
      panels[3].current=true;
      pos.left = $('#panel3').offset().left;
      panel3Focus(pos);
    }
  }
  function panel3Focus(pos){}
})
