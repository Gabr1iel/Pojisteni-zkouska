window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("js-slide-nav").style.top = "0";
  } else {
    document.getElementById("js-slide-nav").style.top = "-100px";
  }
}