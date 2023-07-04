
//Close mobile menu based on which navigation is active (slide nav/main nav)

function hamburger() {
  if($(`#js-hamburger`).hasClass(`active-hamburger`)) {
    $("#js-hamburger").removeClass("active-hamburger");
  
  } else {
    $("#js-hamburger").addClass("active-hamburger");
  }
}

function hamburgerSlide() {
  if($(`#js-slide-hamburger`).hasClass(`active-hamburger`)) {
    $("#js-slide-hamburger").removeClass("active-hamburger");
  
  } else {
    $("#js-slide-hamburger").addClass("active-hamburger");
  }
}


//Close mobile menu if screen width is more then 1000px

$(window).resize(function() {
  if ($(window).width() > 1000) {
    $("#js-slide-hamburger").removeClass("active-hamburger");
    $("#js-hamburger").removeClass("active-hamburger");
  } else {
    
  }
});

