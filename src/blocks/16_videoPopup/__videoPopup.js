// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

var ytVideoContainer = document.querySelector(".heroImage .container")

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '' + ytVideoContainer.offsetWidth/16*9,
        width: '' + ytVideoContainer.offsetWidth,
        videoId: 'PDFxZSny9tA',
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
    player.stopVideo();
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
    player.stopVideo();
    document.querySelector(".videoPopup").style.display = "none"
}

document.querySelector(".videoPopup").style.display = "none"