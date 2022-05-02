var mapScrollIn = gsap.timeline({
    scrollTrigger: {
        trigger: ".mapContainer",
        start: "center 80%",
        end: "top top",
        scrub: 0.5,
        // markers: true,
    }
})

mapScrollIn.fromTo(".hScrollIn path",{
    drawSVG: "0%",
    }, {
    drawSVG: "100%",
});



var mapScrollOut = gsap.timeline({
    scrollTrigger: {
        trigger: ".mapContainer",
        start: "top top",
        end: "bottom top", // need to scroll 100vh to complete
        pin: true,
        scrub: 0.5,
        // anticipatePin: 3,
        // markers: true,
    }
})

var initMapScale = 1.2
var endMapScale = 0.8
var windowWidth = window.innerWidth
if (windowWidth <= 2048){
    initMapScale = 1.4
    endMapScale = 0.7
}
if (windowWidth <= 1920){
    initMapScale = 1.2
}
if (windowWidth <= 1440){
    initMapScale = 0.9
}
if (windowWidth <= 768){
    initMapScale = (window.innerWidth-2*24)/768
    endMapScale = initMapScale-0.1*initMapScale/0.4
}



mapScrollOut.fromTo([".mapContainer img", ".mapContainer svg"],{
    scale: initMapScale,
    }, {
    scale: endMapScale,
    ease: "none",
    duration: 4,
});

mapScrollOut.fromTo(".hScrollOut path",{
    drawSVG: "0%",
    }, {
    drawSVG: "100%",
    duration: 4,
    },
    "<"
);

mapScrollOut.to(".mapCz",{
    opacity: 0,
    duration: 1,
    },
    "<"
);

mapScrollOut.fromTo(".mapEurope",{
    opacity: 0,
    }, {
    opacity: 1,
    duration: 2,
    },
    "<"
);

mapScrollOut.to(".map h2",{
    opacity: 0,
    duration: 0.5,
    },
    "<"
);