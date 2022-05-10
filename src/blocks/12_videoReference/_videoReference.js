const vw = (coef) => window.innerWidth * (coef/100)
const vh = (coef) => window.innerHeight * (coef/100)

ScrollTrigger.matchMedia({
	// desktop
    "(max-width: 768px)": function() {
        document.querySelector(".player3Play").onclick = function() {
            loadVideoReference()
            document.querySelector(".player3Play").style.display = "none"
        }

        function onVideoReferenceReady(event) {
            event.target.playVideo();   
        }
    }, 
	"(min-width: 769px)": function() {        

        gsap.set(".videoContainer", {
            onStart: function(){alert();},
            scrollTrigger: {
                trigger: ".videoContainer",
                start: "top bottom",
                once: true,
                // toggleActions: "restart none none none",
                // onEnter onLeave onEnterBack onLeaveBack
                markers: true,
            }
        })

		gsap.from(".videoContainer", {
            width: vw(95),
            height: vw(95)/16*9,
            // onStart: function(){document.querySelector("#player2").src += "&autoplay=1"},
            onStart: function(){loadVideoReference()},
            scrollTrigger: {
                trigger: ".videoContainer",
                start: "top bottom",
                end: "+=" + 700,
                ease: "power3.out",
                scrub: true,
                // once: true,
                // toggleActions: "restart none none none",
                // onEnter onLeave onEnterBack onLeaveBack
                // markers: true,
            }
        })
    }, 
	"all": function() {
		gsap.from(".exploreDetails", {
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

var videoReference;

function loadVideoReference() {
    videoReference = new YT.Player('player3', {
        height: '',// + videoReferenceHeight,
        width: '',// + videoReferenceWidth,
        videoId: document.getElementById("player3").dataset.code,
        muted: true,
        events: {
        'onReady': onVideoReferenceReady,
        // 'onStateChange': onPlayerStateChange
        }
    });
}

function onVideoReferenceReady(event) {
    event.target.mute();
    event.target.playVideo();   
}