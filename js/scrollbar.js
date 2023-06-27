/*$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var doc = $(document).height();
        var win = $(`#services`).height();
        var value = (scroll / (doc - win)) * 50;
        $(`.scrollbarFill1`).css(`height`,value + `%`);
    })
})*/

function myFunction() {
    const winScroll = document.getElementById("services").scrollTop;
    const height = document.getElementById("services").scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementsByClassName("scrollbarFill1").style.height = scrolled + "%";
  }

 document.getElementById("info").onscroll = function() {myFunction()};