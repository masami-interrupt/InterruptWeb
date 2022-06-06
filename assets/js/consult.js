$(window).scroll(function () {
  if($(window).scrollTop() < 420) {
    $('#withdoButton1').addClass('withdoButton-selected');
    $('#withdoButton2').removeClass('withdoButton-selected');
    $('#withdoButton3').removeClass('withdoButton-selected');
    $('#withdoButton4').removeClass('withdoButton-selected');
  } else if($(window).scrollTop() < 1330 ){
    $('#withdoButton1').removeClass('withdoButton-selected');
    $('#withdoButton2').addClass('withdoButton-selected');
    $('#withdoButton3').removeClass('withdoButton-selected');
    $('#withdoButton4').removeClass('withdoButton-selected');
  } else if($(window).scrollTop() < 1500 ){
    $('#withdoButton1').removeClass('withdoButton-selected');
    $('#withdoButton2').removeClass('withdoButton-selected');
    $('#withdoButton3').addClass('withdoButton-selected');
    $('#withdoButton4').removeClass('withdoButton-selected');
  } else if($(window).scrollTop() < 2200 ){
    $('#withdoButton1').removeClass('withdoButton-selected');
    $('#withdoButton2').removeClass('withdoButton-selected');
    $('#withdoButton3').removeClass('withdoButton-selected');
    $('#withdoButton4').addClass('withdoButton-selected');
  }
});
$('#withdoButton1').on('click', function () {
  $('body,html').animate({scrollTop:0}, 400, 'swing');
      return false;
  });
$('#withdoButton2').on('click', function () {
  $('body,html').animate({scrollTop:420}, 400, 'swing');
      return false;
});
$('#withdoButton3').on('click', function () {
  $('body,html').animate({scrollTop:1330}, 400, 'swing');
      return false;
  });
$('#withdoButton4').on('click', function () {
  $('body,html').animate({scrollTop:2200}, 400, 'swing');
      return false;
  });
