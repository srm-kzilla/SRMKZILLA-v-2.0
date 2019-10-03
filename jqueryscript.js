$(function myshuffle() {

    var container = $("#shuffled");
    container.shuffleLetters();
    setTimeout(function () {
        container.shuffleLetters({
            "text": "SRMKZILLA"
        });

    }, 6000);

});
$(document).ready(function () {
    $(window).scroll(function (e) {
        parallax();
    });

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.hero').css('top', (scrolled * 0.0315) + 'rem');
    };
});