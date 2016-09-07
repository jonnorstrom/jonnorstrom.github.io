var captionLength = 0;
var captionOptions = ["Oh, hello there.", "So this is my page.", "Hope you get what you need :)"]
var captionIndex = 0;
var rgbOptions = ["rgb(61, 183, 88)", "rgb(230, 79, 59)", "rgb(222, 77, 99)", "rgb(211, 188, 180)", "rgb(255, 255, 255)", "rgb(255, 220, 90)", "rgb(77, 222, 171)"]
var colorIndex = 0;
var currentlyRaving = false;

function runCaptions() {
  cursorAnimation();
  $caption = $('#caption');
  setTimeout('showCaptions()', 1000);
}

function cursorAnimation() {
  $('#cursor').animate({
      opacity: 0
  }, 400).animate({
      opacity: 1
  }, 400);
  setTimeout('cursorAnimation()')
}

function type() {
    $caption.html(captionToType.substr(0, captionLength++));
    if(captionLength < captionToType.length+1) {
        setTimeout('type()', 70);
    }
}

function erase() {
    $caption.html(captionToType.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 50);
    }
}

function showCaptions() {
  captionToType = captionOptions[captionIndex];
  type();
  if (captionIndex < (captionOptions.length - 1)) {
    captionIndex++
    setTimeout('erase()', 4000);
    setTimeout('showCaptions()', 6000)
  } else {
    setTimeout(function(){
      $('#cursor').remove()
    }, 1500)
  }
}

function toggleMethods() {
  $('.methods').toggle('slide');
}

function switchDomText() {
  var $domText = $('.rave').html();
  if ($domText == "Boring Time") {
    $('.rave').html('Party Time')
  } else {
    $('.rave').html('Boring Time')
  }
}

function switchRaveState() {
  if (currentlyRaving) {
    currentlyRaving = false
  } else {
    currentlyRaving = true
  }
}

function checkRaveState() {
  if (currentlyRaving) {
    animateBackgroundColor(60);
    play();
    setTimeout('checkRaveState()', 100);
  } else {
    stopAndReset();
  }
}

function animateBackgroundColor(speed) {
  if (colorIndex == rgbOptions.length) {
    colorIndex = 0;
  }
  $('html').animate({"background-color": rgbOptions[colorIndex]}, speed);
  colorIndex++
}

function play() {
  var audio = $("#audio")
  // if (audio.paused) {
    $("#audio").play();
  // }
}

function stopAndReset() {
  var audio = $("#audio")
  audio.stop();
  audio.currentTime = 0
}

$(function(){
  runCaptions();

  $('.message a').on('click', function(e) {
    e.preventDefault()
    toggleMethods();
  })

  $('.color-change p.background').on('click', function(e) {
    e.preventDefault();
    animateBackgroundColor(350)
  })

  $('.rave').on('click', function(e){
    e.preventDefault();
    switchRaveState();
    switchDomText();
    checkRaveState();
  })
});
