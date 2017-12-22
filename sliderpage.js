//imp stuff
var images = [];
var imageHolder = document.getElementById("bitmoji-image");

function init(){
  if(screen.width <= 500)
    document.getElementById("descrOfDay").style.fontSize = "10px";
}

// Element for mood value
var moodScore = document.getElementById("moodIn");

// Slider value indicates the bitmoji element
var slider_value = document.getElementById("score");

// Slider represents the slider element
var slider = document.getElementById("slider");

// moodScore is the value of the mood input tag
moodScore.value = 9;

// Check function is to update the bitmoji as the slider is used
function check(){
  var checkValue = Math.round((slider.options.value/10));
  if(checkValue>1)
    checkValue--;
  moodScore.value = checkValue;
  imageHolder.src="Bitmojis/" + images[checkValue];
  // var imageHTML = "<img class='bitmoji-image' src='Bitmojis/" + images[checkValue] + "'>";
  // slider_value.innerHTML = imageHTML;
}

// Stop stop the image from changing every 0.001 ms
var dragImg = false;
function isStop(){
  dragImg = false;
}

function isChange(){
  dragImg = true;
}

function init(){
  for(var i = 0; i<10;i++){
    images[i] = '' + (i+1) + '.png';
  }
}


// window.setInterval(function(){
//   if(dragImg)
//     check();
// }, 10);


// jQuery for slider
(function($) {
  "use strict"; // Start of use strict

  $("#slider").roundSlider({
    radius: 0.35 * screen.width,
    circleShape: "half-bottom",
    sliderType: "min-range",
    showTooltip: false,
    drag: "check",
    change: "check",
    stop: "isStop",
    keyboardAction: false,
    value: 99
  });

})(jQuery); // End of use strict
init();

// when submit is clicked change to new page
var descrOfDay = "";
document.getElementById("submitButton").onclick = function() {submitClick()};

function submitClick() {
    descrOfDay = document.getElementById("descrOfDay").value;
    window.location= "inputpage.html";
}

function diaryEffect() {
  var diaryEntry = document.getElementById("diaryEntryHeader");
  diaryEntry.style.display = "initial";
  var diaryIcon = document.getElementById("diaryTextArea");
  diaryIcon.style.marginTop = 0.15*screen.width + 40;
  diaryIcon.style.visibility= "visible";
  var remainingHeight = screen.height - 0.15*screen.width - 40;
  diaryIcon.style.height = remainingHeight;
}

function closeDiary() {
  var diaryEntry = document.getElementById("diaryEntryHeader");
  var diaryIcon = document.getElementById("diaryTextArea");
  diaryIcon.style.height = "0";


  setTimeout(function() {
    diaryEntry.style.display = "none";
    diaryIcon.style.visibility= "hidden";
  }, 1300)
}



