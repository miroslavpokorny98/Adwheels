gsap.from(".highwaysContainer", {
    with: 0,
    height: 0,
    scrollTrigger: {
        trigger: ".mapContainer",
        // start: "center bottom",
        start: "top 40%",
        end: "top top",
        // pin: true,
        scrub: true,
        // markers: true,
    }
});

// var card3Arr = document.querySelectorAll(".card3")
// // var card3 = document.querySelector(".card3")
// var horizontalScrollContainer = document.querySelector(".horizontalScroll .background .container")
// var horizontalScrollDistance = 
//     card3Arr.length*card3Arr[0].offsetWidth 
//     + (card3Arr.length-1)*32 
//     - horizontalScrollContainer.offsetWidth

gsap.fromTo(".mapContainer img",{
    scale: 1,
    }, {
    scale: 0.7,
    ease: "none",

    scrollTrigger: {
        trigger: ".mapContainer",
        start: "top top",
        end: "bottom top", // need to scroll 100vh to complete
        pin: true,
        scrub: true,
        markers: true,
    }
});
