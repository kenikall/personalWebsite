$(document).keydown(function(e){
  var bgPos1 = {left: $('#background1').offset().left, top: $('#background1').offset().top };
  var bgPos2 = {left: $('#background2').offset().left, top: $('#background2').offset().top };
  var bgPos3 = {left: $('#background3').offset().left, top: $('#background3').offset().top };

  var mgPos1 = {left: $('#midground1').offset().left, top: $('#midground1').offset().top };
  var mgPos2 = {left: $('#midground2').offset().left, top: $('#midground2').offset().top };
  var mgPos3 = {left: $('#midground3').offset().left, top: $('#midground3').offset().top };

  var fgPos1 = {left: $('#foreground1').offset().left, top: $('#foreground1').offset().top };
  var fgPos2 = {left: $('#foreground2').offset().left, top: $('#foreground2').offset().top };
  var fgPos3 = {left: $('#foreground3').offset().left, top: $('#foreground3').offset().top };
  switch(e.which){
    // left
    case 37:
      //background
      bgPos1.left > -1000 ? bgPos1.left -= 5 : bgPos1.left = $('#background3').offset().left+995;
      bgPos2.left > -1000 ? bgPos2.left -= 5 : bgPos2.left = $('#background1').offset().left+995;
      bgPos3.left > -1000 ? bgPos3.left -= 5 : bgPos3.left = $('#background2').offset().left+995;
      $('#background1').offset(bgPos1);
      $('#background2').offset(bgPos2);
      $('#background3').offset(bgPos3);

      //midground
      mgPos1.left > -1000 ? mgPos1.left -= 10 : mgPos1.left = $('#midground3').offset().left+990;
      mgPos2.left > -1000 ? mgPos2.left -= 10 : mgPos2.left = $('#midground1').offset().left+990;
      mgPos3.left > -1000 ? mgPos3.left -= 10 : mgPos3.left = $('#midground2').offset().left+990;
      $('#midground1').offset(mgPos1);
      $('#midground2').offset(mgPos2);
      $('#midground3').offset(mgPos3);

      //foreground
      fgPos1.left > -1000 ? fgPos1.left -= 20 : fgPos1.left = $('#foreground3').offset().left+980;
      fgPos2.left > -1000 ? fgPos2.left -= 20 : fgPos2.left = $('#foreground1').offset().left+980;
      fgPos3.left > -1000 ? fgPos3.left -= 20 : fgPos3.left = $('#foreground2').offset().left+980;
      $('#foreground1').offset(fgPos1);
      $('#foreground2').offset(fgPos2);
      $('#foreground3').offset(fgPos3);
    break;

    // right
    case 39:
      //background
      bgPos1.left < 3000 ? bgPos1.left += 5 : bgPos1.left = $('#background3').offset().left+995;
      bgPos2.left < 3000 ? bgPos2.left += 5 : bgPos2.left = $('#background1').offset().left+995;
      bgPos3.left < 3000 ? bgPos3.left += 5 : bgPos3.left = $('#background2').offset().left+995;
      $('#background1').offset(bgPos1);
      $('#background2').offset(bgPos2);
      $('#background3').offset(bgPos3);

      //midground
      mgPos1.left < 3000 ? mgPos1.left += 10 : mgPos1.left = $('#midground3').offset().left+990;
      mgPos2.left < 3000 ? mgPos2.left += 10 : mgPos2.left = $('#midground1').offset().left+990;
      mgPos3.left < 3000 ? mgPos3.left += 10 : mgPos3.left = $('#midground2').offset().left+990;
      $('#midground1').offset(mgPos1);
      $('#midground2').offset(mgPos2);
      $('#midground3').offset(mgPos3);

      //foreground
      fgPos1.left < 3000 ? fgPos1.left += 20 : fgPos1.left = $('#foreground3').offset().left+980;
      fgPos2.left < 3000 ? fgPos2.left += 20 : fgPos2.left = $('#foreground1').offset().left+980;
      fgPos3.left < 3000 ? fgPos3.left += 20 : fgPos3.left = $('#foreground2').offset().left+980;
      $('#foreground1').offset(fgPos1);
      $('#foreground2').offset(fgPos2);
      $('#foreground3').offset(fgPos3);
    break;

    default: return;
  }
});

