
var textInput = "";
var buttons = [];
var textArea = document.getElementById("textArea");
var textContainer = document.getElementById("textContainer");
//var photoArea = '<input type="file" accept="image/*">';
var w = "hi";
function init() {
    for (i=0;i<4;i++) {
        buttons[i] = (document.getElementById("button" + i));
    }
    buttons[0].style.height = window.getComputedStyle(buttons[1]).width;
    for (i=1;i<4;i++) {
        buttons[i].style.height = window.getComputedStyle(buttons[i]).width;
    }

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
}

/*  function showPhoto() {
     textContainer.innerHTML = photoArea;
 } */
window.onload = function(){
    if(!window.location.hash){
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}
init();
document.getElementById("button0").click();
