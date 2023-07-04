
//activates slide navigatin if screen is scrolled down

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("js-slide-nav").style.top = "0";
    $("#js-hamburger").removeClass("active-hamburger");
  } else {
    document.getElementById("js-slide-nav").style.top = "-100px";
    $("#js-slide-hamburger").removeClass("active-hamburger");
  }
}