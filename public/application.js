var captionLength = 0;
var captionOptions = ["Oh, hello there.", "So this is my page.", "Hope you get what you need :)"]
var index = 0;
var rgbOptions = ["rgb(77, 222, 171)", "rgb(61, 183, 88)", "rgb(230, 79, 59)", "rgb(222, 77, 99)", "rgb(211, 188, 180)", "rgb(255, 255, 255)", "rgb(255, 220, 90)"]


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

function checkLinkId() {
  if ($('.color-change p').attr('id') != null) {
    var index = getRgbIndex()
  } else {
    $('.color-change p').attr('id', '0')
    var index = 0
  }
  return index
}

function getRgbIndex() {
  var index = parseInt($('.color-change p').attr('id')) + 1
  if (index == rgbOptions.length) {
    index = 0;
  }
  return index
}

function raveTime(index) {
  $('body').animate({"background-color": rgbOptions[index]}, 40);
  index++
  if (index == rgbOptions.length) {
    index = 0;
  }
  setTimeout('raveTime('+index+')', 70);
}

$(document).ready(function(){
  setInterval('cursorAnimation()', 600);
  $caption = $('#caption');
  setTimeout('showCaptions()', 1000);

  $('.message a').on('click', function(e) {
    e.preventDefault()
    toggleMethods();
  })

  $('.color-change p').on('click', function(e) {
    e.preventDefault();
    var i = checkLinkId();
    $(this).attr('id', i.toString());
    $('body').animate({"background-color": rgbOptions[i]})
  })

  $('.rave').on('click', function(e){
    e.preventDefault();
    var i = checkLinkId();
    console.log(i)
    raveTime(i);
  })
});
