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



function init() {
  for (var i = 0; i < 10; i++) {
    images[i] = "" + (i + 1) + ".png";
  }

  var tableClicked = $_GET["tableClicked"] == "true" ? true : false;
  if (tableClicked) {
    var newRow = table.insertRow(-1);
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
    thirdCell.innerHTML = $_GET["threeWords"];

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
