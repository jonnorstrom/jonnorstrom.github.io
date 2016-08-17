var captionLength = 0;
var captionOptions = ["Oh, hello there.", "Sorry my page is down.", "Should be back up soon! :)"]
var index = 0

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

function showCaptions() {
  caption = captionOptions[index];
  type();
  if (index < (captionOptions.length - 1)) {
    index++
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
  if ($('.message a').html() == "Trying to get in touch?") {
    $('.contact').animate({"margin-left": 200}, 400);
    $('.message a').html("Reach out!");
  } else {
    $('.message a').html("Trying to get in touch?");
    $('.contact').animate({'margin-left': 400}, 400);
  }
}

$(document).ready(function(){
  setInterval('cursorAnimation()', 600);
  $caption = $('#caption');
  setTimeout('showCaptions()', 1000);

  $('.message a').on('click', function(e){
    e.preventDefault()
    toggleMethods();
  })
});
