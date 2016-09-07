var animatorObject = {
  captionLength: 0,
  captionOptions: ["Oh, hello there.", "So this is my page.", "Hope you get what you need :)"],
  captionIndex: 0,
  rgbOptions: ["rgb(61, 183, 88)", "rgb(230, 79, 59)", "rgb(222, 77, 99)", "rgb(211, 188, 180)", "rgb(255, 255, 255)", "rgb(255, 220, 90)", "rgb(77, 222, 171)"],
  colorIndex: 0,
  currentlyRaving: false,

  cursorAnimation() {
    $('#cursor').animate({opacity: 0}, 400).animate({opacity: 1}, 400);
    setTimeout(this.cursorAnimation, 800)
    return "hello"
  },

  runCaptions() {
    debugger;
    this.cursorAnimation();
    $caption = $('#caption');
    setTimeout(this.showCaptions, 1000);
  },

  type() {
      $caption.html(captionToType.substr(0, captionLength++));
      if(captionLength < captionToType.length+1) {
          setTimeout('type()', 70);
      }
  },

  erase() {
      $caption.html(captionToType.substr(0, captionLength--));
      if(captionLength >= 0) {
          setTimeout('erase()', 50);
      }
  },

  => () 

  showCaptions() {
    captionToType = this.captionOptions[captionIndex];
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
  },

  toggleMethods() {
    $('.methods').toggle('slide');
  },

  switchRaveState() {
    if (currentlyRaving) {
      currentlyRaving = false
    } else {
      currentlyRaving = true
    }
  },

  checkRaveState() {
    if (currentlyRaving) {
      animateBackgroundColor(60);
      play();
      setTimeout('checkRaveState()', 100);
    } else {
      stopAndReset();
    }
  },

  animateBackgroundColor(speed) {
    if (colorIndex == rgbOptions.length) {
      colorIndex = 0;
    }
    $('html').animate({"background-color": rgbOptions[colorIndex]}, speed);
    colorIndex++
  },

  play() {
    document.getElementById("audio").play();
  },

  stopAndReset() {
    var audio = document.getElementById("audio");
    audio.pause();
    audio.currentTime = 0
  },
}



$(function(){
  animatorObject.runCaptions();

  $('.message a').on('click', function() {
    event.preventDefault()
    animatorObject.toggleMethods();
  })

  $('.color-change p.background').on('click', function() {
    event.preventDefault();
    animatorObject.animateBackgroundColor(350)
  })

  $('.rave').on('click', function(){
    event.preventDefault();

    $(this).siblings().removeClass('hidden');
    $(this).addClass('hidden')

    animatorObject.switchRaveState();
    animatorObject.checkRaveState();
  })
});
