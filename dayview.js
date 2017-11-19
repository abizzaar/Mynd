var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

console.log($_GET);

var imageHolder = document.getElementById("bitmoji-image");
var images = [];
function init(){
	for(var i = 0; i<10;i++){
    images[i] = '' + (i+1) + '.png';}
	imageHolder.src="Bitmojis/" + images[$_GET['moodScore']];
}

