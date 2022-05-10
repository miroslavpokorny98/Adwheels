// // 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

var ytVideoContainer = document.querySelector(".heroImage .videoPopupContainer")

var windowWidth = window.innerWidth
var videoPopupHeight = window.innerHeight - 89 - 100
var videoPopupWidth = videoPopupHeight/9*16
if (windowWidth <= 768){
    videoPopupHeight = 457 //(windowWidth-48)/16*9 + 150
    videoPopupWidth = windowWidth-48
}

var videoPopup;
var videoReferenceDesktop;
function onYouTubeIframeAPIReady() {
    videoPopup = new YT.Player('player1', {
        height: '' + videoPopupHeight,
        width: '' + videoPopupWidth,
        videoId: document.getElementById("player1").dataset.code,
        events: {
        'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // event.target.playVideo();   
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    videoPopup.stopVideo();
}
// alert() 
document.querySelector(".videoClose").onclick = function(){
    closeYtVideo()
}

document.querySelector(".videoPopup").onclick = function(){
    closeYtVideo()
}

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		closeYtVideo()
	}
});

function closeYtVideo(){
    // alert()
    videoPopup.stopVideo();
    document.querySelector(".videoPopup").style.display = "none"
}

document.querySelector(".popup-youtube").onclick = function(){
    // alert()
    document.querySelector(".videoPopup").style.display = "block"
    videoPopup.playVideo();
}

document.querySelector(".videoLoad").onclick = function(){
    // alert()
    document.querySelector(".videoPopup").style.display = "block"
    videoPopup.playVideo();
}

document.querySelector(".videoPopup").style.display = "none"