function loadApp() {
  // Create the flipbook

  $('.flipbook').turn({
      width:673,
      height:491,
      elevation: 50,
      gradients: true,
      autoCenter: true
  });
}

  // $(document).keydown(function(e){

  //     var key = e.which || e.keyCode;

  //     if (key == 39) {
  //         flipbook.turn("next");
  //     } elseif (key == 37){
  //         flipbook.turn("previous");
  //     }
  // });


// Load the HTML4 version if there's not CSS transform

// yepnope({
//   test : Modernizr.csstransforms,
//   yep: ['../../lib/turn.js'],
//   nope: ['../../lib/turn.html4.min.js'],
//   both: ['../../stylesheets/basic.css'],
//   complete: loadApp
// });
