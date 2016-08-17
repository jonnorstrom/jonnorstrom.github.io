var captionLength = 0;
var caption = '';

function cursorAnimation() {
  $('#cursor').animate({
      opacity: 0
  }, 400).animate({
      opacity: 1
  }, 400);
}

function type() {
    $caption.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 70);
    }
}

function erase() {
    $caption.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 50);
    }
}

function firstCaptionStart() {
  caption = "Oh, hello there.";
  type();
  setTimeout('erase()', 4000);
  setTimeout('secondCaptionType()', 6000);
}

function secondCaptionType() {
  caption = "Sorry my page is down.";
  type();
  setTimeout('erase()', 4000);
  setTimeout('lastCaptionEnd()', 6000);
}

function lastCaptionEnd() {
  caption = "Should be back up soon! :)"
  type();
  setTimeout(function(){
    $('#cursor').css('display', 'none')
  }, 1500)
}

$(document).ready(function(){
  setInterval('cursorAnimation()', 600);
  $caption = $('#caption');
  setTimeout('firstCaptionStart()', 1000);
})
