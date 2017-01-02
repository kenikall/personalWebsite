$(document).ready(function() {
    $('#lesson5Button').click(function(e) {
        boxh = $('#lessonModal1').height();
        windowh = $(window).height();
        $('#lessonModal1').css('margin-top', windowh/2 - boxh/2);
        $('#lessonModal1').fadeIn();
        // .dialog();
    });
    $('#lesson6Button').click(function(e) {
        boxh = $('#lessonModal2').height();
        windowh = $(window).height();
        $('#lessonModal2').css('margin-top', windowh/2 - boxh/2);
        $('#lessonModal2').fadeIn();
        // .dialog();
    });
    $('#lesson2Button').click(function(e) {
        boxh = $('#lessonModal3').height();
        windowh = $(window).height();
        $('#lessonModal3').css('margin-top', windowh/2 - boxh/2);
        $('#lessonModal3').fadeIn();
        // .dialog();
    });
    $('#lesson3Button').click(function(e) {
        boxh = $('#lessonModal4').height();
        windowh = $(window).height();
        $('#lessonModal4').css('margin-top', windowh/2 - boxh/2);
        $('#lessonModal4').fadeIn();
        // .dialog();
    });
    $('#lesson7Button').click(function(e) {
        boxh = $('#lessonModal5').height();
        windowh = $(window).height();
        $('#lessonModal5').css('margin-top', windowh/2 - boxh/2);
        $('#lessonModal5').fadeIn();
        // .dialog();
    });
    $('#lesson9Button').click(function(e) {
        boxh = $('#lessonModal6').height();
        windowh = $(window).height();
        $('#lessonModal6').css('margin-top', windowh/2 - boxh/2);
        $('#lessonModal6').fadeIn();
        // .dialog();
    });
    $('#lesson4Button').click(function(e) {
        boxh = $('#lessonModal7').height();
        windowh = $(window).height();
        $('#lessonModal7').css('margin-top', windowh/2 - boxh/2);
        $('#lessonModal7').fadeIn();
        // .dialog();
    });
    $('#lesson10Button').click(function(e) {
        boxh = $('#lessonModal8').height();
        windowh = $(window).height();
        $('#lessonModal8').css('margin-top', windowh/2 - boxh/2);
        $('#lessonModal8').fadeIn();
        // .dialog();
    });
    $('#lesson11Button').click(function(e) {
        boxh = $('#lessonModal9').height();
        windowh = $(window).height();
        $('#lessonModal9').css('margin-top', windowh/2 - boxh/2);
        $('#lessonModal9').fadeIn();
        // .dialog();
    });
    $('#lesson1Button').click(function(e) {
        boxh = $('#lessonModal10').height();
        windowh = $(window).height();
        $('#lessonModal10').css('margin-top', windowh/2 - boxh/2);
        $('#lessonModal10').fadeIn();
    });
    $('.close').click(function() {
        $('.modal').fadeOut();
    });
});
