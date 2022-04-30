const vw = (coef) => window.innerWidth * (coef/100)
const vh = (coef) => window.innerHeight * (coef/100)

ScrollTrigger.matchMedia({
	// desktop
	"(min-width: 769px)": function() {
		gsap.from(".video2", {
            width: vw(95),
            height: vw(95)/16*9,
        
            scrollTrigger: {
                trigger: ".videoContainer",
                start: "top bottom",
                end: "+=" + 700,
                ease: "power3.out",
                scrub: true,
                // once: true,
                toggleActions: "restart none none none",
                // onEnter onLeave onEnterBack onLeaveBack
                // markers: true,
            }
        })
    }, 
	"all": function() {
		gsap.from(".detailyKampane", {
            y: 50,
            opacity: 0,
            duration: 1,
        
            scrollTrigger: {
                trigger: ".videoContainer",
                start: "top center",
                ease: "power3.out",
                once: true,
                // toggleActions: "restart none none none",
                // onEnter onLeave onEnterBack onLeaveBack
                // markers: true,
            }
        })
	}
});


var videoReferenceHeight = 457
var videoReferenceWidth = window.innerWidth-48

var videoReference;
document.querySelector(".player2Play").onclick = function() {
    videoReference = new YT.Player('player2', {
        height: '' + videoReferenceHeight,
        width: '' + videoReferenceWidth,
        videoId: 'PDFxZSny9tA',
        events: {
        'onReady': onVideoReferenceReady,
        // 'onStateChange': onPlayerStateChange
        }
    });
    document.querySelector(".player2Play").style.display = "none"
}

function onVideoReferenceReady(event) {
    event.target.playVideo();   
}


