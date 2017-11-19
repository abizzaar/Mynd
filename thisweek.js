var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
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

var lRow = document.getElementById("lastrow");
var cImg = document.getElementById("changeImg");
var cTitle = document.getElementById("changeTitle");
var images = [];
function init(){
	for(var i = 0; i<10;i++){
    images[i] = '' + (i+1) + '.png';
 	}
	cImg.src = "Bitmojis/" + images[$_GET['moodScore']];
	cTitle.innerText = $_GET['threeWords'];
	//lRow.style.display = "table-cell";
}

init();