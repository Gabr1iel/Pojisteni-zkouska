
$(".box").click(function(){

  if($(`.dropdown2`).hasClass(`active`)) {
    $(".dropdown2").toggleClass("active");
    $(".box2").height(64);
  }

  if($(`.dropdown3`).hasClass(`active`)) {
    $(".dropdown3").toggleClass("active");
    $(".box3").height(64);
  }

    $(".dropdown").toggleClass("active");
});


$(".box2").click(function(){

  if($(`.dropdown`).hasClass(`active`)) {
    $(".dropdown").toggleClass("active");
    $(".box").height(64);
  }

  if($(`.dropdown3`).hasClass(`active`)) {
    $(".dropdown3").toggleClass("active");
    $(".box3").height(64);
  }

    $(".dropdown2").toggleClass("active");
});


$(".box3").click(function(){

  if($(`.dropdown2`).hasClass(`active`)) {
    $(".dropdown2").toggleClass("active");
    $(".box2").height(64);
  }

  if($(`.dropdown`).hasClass(`active`)) {
    $(".dropdown").toggleClass("active");
    $(".box").height(64);
  }

    $(".dropdown3").toggleClass("active");
});

function dropdownFunction(img) {

  if (img.style.height == "137px") {
    img.style.height = "64px";
  } else {
    img.style.height = "137px";
  }
}









  
  


