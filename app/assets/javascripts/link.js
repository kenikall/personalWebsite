$(document).ready(function(){
  $('.liButton').onclick = function(){
    console.log("clicked");
    window.open("https://www.linkedin.com/in/kenikall");
  }
  $('.fbButton').onclick = function(){
    window.open("https://www.facebook.com/mannahcodes/");
  }
  $('.resButton').onclick = function(){
    window.open("./images/mannah_resume.pdf");
  }
  $('.gitButton').onclick = function(){
    window.open("https://github.com/kenikall");
  }
  $('.twitButton').onclick = function(){
    window.open("https://twitter.com/mannahKallon");
  }

  $('#lesson1Button').onclick = function() { $('#lessonModal1').style.display = "block"; console.log($(this)) }
  $('#lesson2Button').onclick = function() { $('#lessonModal2').style.display = "block"; console.log($(this)) }
  $('#lesson3Button').onclick = function() { $('#lessonModal3').style.display = "block"; console.log($(this)) }
  $('#lesson4Button').onclick = function() { $('#lessonModal4').style.display = "block"; console.log($(this)) }
  $('#lesson5Button').onclick = function() { $('#lessonModal5').style.display = "block"; console.log($(this)) }
  $('#lesson6Button').onclick = function() { $('#lessonModal6').style.display = "block"; console.log($(this)) }
  $('#lesson7Button').onclick = function() { $('#lessonModal7').style.display = "block"; console.log($(this)) }
  $('#lesson8Button').onclick = function() { $('#lessonModal8').style.display = "block"; console.log($(this)) }
  $('#lesson9Button').onclick = function() { $('#lessonModal9').style.display = "block"; console.log($(this)) }
  $('#lesson10Button').onclick = function() { $('#lessonModal10').style.display = "block"; console.log($(this)) }
  $('#lesson11Button').onclick = function() { $('#lessonModal11').style.display = "block"; console.log($(this)) }
  $('#lesson12Button').onclick = function() { $('#lessonModal12').style.display = "block"; console.log($(this)) }


  $('.close').onclick = function() { $(this).parent().style.display = "none"; }

  // window.onclick = function(event) {
  //   console .log($(this))
  //     // if (!$(this).hasClass(".modal")) { $(".modal").style.display = "none"; }
  //     if (event.target == $(".modal")) { $(".modal").style.display = "none"; }
  // }
})
