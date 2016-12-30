$(document).ready(function() {
    $('#lesson1Button').click(function(e) {
        e.preventDefault();
        boxh = $('#lessonModal10').height();
        windowh = $(window).height();

        $('#lessonModal10').css('margin-top', windowh/2 - boxh/2);

        $('#lessonModal10').fadeIn();
    });
    $('.close').click(function() {
        console.log("clicked");
        $('#lessonModal10').fadeOut();
    });
});
