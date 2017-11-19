
var textInput = "";
var buttons = [];
var textArea = document.getElementById("textArea");
var textContainer = document.getElementById("textContainer");
var moodScore = document.getElementById("moodIn");
var threeW = document.getElementById("titleW");
//var photoArea = '<input type="file" accept="image/*">';
var w = "hi";
var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});
moodScore.value = $_GET['mood'];
threeW.value = $_GET['threeWords'];

function init() {
    document.getElementById("button0").click();
}

function openTab(evt, area) {
    // Declare all variables
    var i, tabcontent, tablinks, labels;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    labels = document.getElementsByClassName("label");
    for (i = 0; i < labels.length; i++) {
        labels[i].style.display = "none";
        for (j=0; j < labels[i].childNodes.length; j++) {
        labels[i].childNodes[j].style.display = "block";
        }
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(area).style.display = "block";
    var label = document.getElementById(area + 'Label')
    label.style.display = "block";
    for (i=0; i < label.childNodes.length; i++) {
        label.childNodes[i].style.display = "block";
    }

    evt.currentTarget.className += " active";
    if(area == "video" || area == "audio" || area == "photo")
        document.getElementById("submitInput").style.marginTop = "56%";
}

/*  function showPhoto() {
     textContainer.innerHTML = photoArea;
 } */
// window.onload = function(){
//     if(!window.location.hash){
//         window.location = window.location + '#loaded';
//         window.location.reload();
//     }
// }
init();
