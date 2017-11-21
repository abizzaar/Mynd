// GET method defintion
var $_GET = {};
document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

console.log($_GET);

var dayDayView = document.getElementById("dayDayView");
var dateDayView = document.getElementById("dateDayView");
var threeWordsDayView = document.getElementById("threeWordsDayView");
var bitmoji = document.getElementById("bitmojiImageDayView");

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var words = ["Inspired by talk", "Barely slept", "Awful problem set", "Arno’s birthday party!", "Got a job!", "Productive but boring", "Made a friend"];
var bitmojiNums = ["10", "4", "2", "8", "9", "6", "7"] 

// get + 23

// Initiliase images and get image based on value pased from before
function init(){
    if ($_GET["rowNumberClicked"] == "15") {
        dayDayView.innerHTML = days[7];
        dateDayView.innerHTML = "January " + 30 + ", 2017";
        threeWordsDayView.innerHTML =  $_GET["threeWords"];
        bitmoji.src = "Bitmojis/" + $_GET["moodScore"] + ".png";
    }
    else {
        dayDayView.innerHTML = days[$_GET["rowNumberClicked"]];
        dateDayView.innerHTML = "January " + (23 + parseInt($_GET["rowNumberClicked"])) +  ", 2017";
        threeWordsDayView.innerHTML =  words[$_GET["rowNumberClicked"]];
        bitmoji.src = "Bitmojis/" + bitmojiNums[$_GET["rowNumberClicked"]] + ".png";
}
    

}


init();
