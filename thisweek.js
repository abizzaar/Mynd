var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
  function decode(s) {
    return decodeURIComponent(s.split("+").join(" "));
  }

  $_GET[decode(arguments[1])] = decode(arguments[2]);
});

console.log($_GET);


$(document).click(function(event) {
  var text = $(event.target).text();
  console.log(text);
});

var images = [];
var table = document.getElementById("table");

// use this stuff in later implementations
var currDay = 0;
var days = ["S", "M", "T", "W", "T", "F", "S"];
var rowNumberThisWeek = document.getElementById("rowNumberThisWeek");
var bitNumberThisWeek = document.getElementById("bitNumberThisWeek");
var buttonThisWeek = document.getElementById("thisWeekButton")

$('#table tr').on('click', function () {
  rowNumberThisWeek.value = $(this).index();
  bitNumberThisWeek.value = $_GET["moodScore"];
  location.href="dayview.html";
  buttonThisWeek.click();
})

function newRowClicked() {
  rowNumberThisWeek.value = "15";
  bitNumberThisWeek.value = $_GET["moodScore"];
  location.href="dayview.html";
  buttonThisWeek.click();
}


function init() {
  for (var i = 0; i < 10; i++) {
    images[i] = "" + (i + 1) + ".png";
  }

  rowNumberThisWeek.value = 5;

  var tableClicked = $_GET["tableClicked"] == "true" ? true : false;
  if (tableClicked) {
    var newRow = table.insertRow(-1);
    newRow.id = "newRow";
    newRow.addEventListener('click', newRowClicked);

    var firstCell = newRow.insertCell();
    firstCell.className = "firstColumnDay";

    var dateDiv = document.createElement("div");
    dateDiv.className = "dateText";
    dateDiv.innerHTML = 30;
    firstCell.appendChild(dateDiv);

    var dayDiv = document.createElement("div");
    dayDiv.className = "dayText";
    dayDiv.innerHTML = "S";
    firstCell.appendChild(dayDiv);

    var secondCell = newRow.insertCell();
    secondCell.className = "thirdColumnBitmoji";

    var imgContent = document.createElement("img");
    imgContent.src = "Bitmojis/" + images[$_GET["moodScore"]];
    imgContent.className = "bitmojiImageInTable";
    secondCell.appendChild(imgContent);
    
    var thirdCell = newRow.insertCell();
    thirdCell.className = "fourthColumnText";

    var leftWordsDiv = document.createElement("div");
    leftWordsDiv.style.cssFloat = "left";
    leftWordsDiv.innerHTML = $_GET["threeWords"];
    var rightIconsDiv = document.createElement("div");
    rightIconsDiv.style.cssFloat = "right";
    rightIconsDiv.style.marginRight = "4%";
    thirdCell.appendChild(leftWordsDiv);
    thirdCell.appendChild(rightIconsDiv);

    if ($_GET["photo"] != "") {
        var icon = document.createElement("i");
        icon.className = "material-icons";
        icon.innerHTML = "photo_camera";
        rightIconsDiv.appendChild(icon);
    }
    if ($_GET["video"] != "") {
        var icon2 = document.createElement("i");
        icon2.className = "material-icons";
        icon2.innerHTML = "videocam";
        rightIconsDiv.appendChild(icon2);
    }
    if ($_GET["audio"] != "") {
        var icon3 = document.createElement("i");
        icon3.className = "material-icons";
        icon3.innerHTML = "keyboard_voice";
        rightIconsDiv.appendChild(icon3);
    }


    if ($_GET["moodScore"] > 1) {
        secondCell.style.background = "#DDEEF4";

        var percentOfSecondBlock = (14.3 * ($_GET["moodScore"] - 2));
        thirdCell.style.background = "linear-gradient(to right, #DDEEF4 " + String(percentOfSecondBlock) + "%, white 0%)";
       
    }
    else {
        var percentOfFirstBlock = (33 * ($_GET["moodScore"] + 1));

        secondCell.style.background = "linear-gradient(to right, #DDEEF4 " + String(percentOfFirstBlock) + "%, white 0%)";
    }
  }
}

init();
