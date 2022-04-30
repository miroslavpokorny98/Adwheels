var windowWidth = window.innerWidth
var card3Spacing = 32
var HSScrollIn = 2500
if (windowWidth <= 768){
    card3Spacing = 16
    HSScrollIn = 768
}


gsap.from(".card3Container", {
    x: HSScrollIn,
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontalScroll .background",
        // start: "center bottom",
        start: "top bottom",
        end: "top top",
        // pin: true,
        scrub: true,
        // markers: true,
    }
});

var card3Arr = document.querySelectorAll(".card3")
// var card3 = document.querySelector(".card3")
var horizontalScrollContainer = document.querySelector(".horizontalScroll .background .container")
var horizontalScrollDistance = 
    card3Arr.length*card3Arr[0].offsetWidth 
    + (card3Arr.length-1)*card3Spacing 
    - horizontalScrollContainer.offsetWidth

gsap.fromTo(".card3Container",{x:0}, {
    x: -horizontalScrollDistance,
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontalScroll .background",
        start: "top top",
        end: "bottom top", // need to scroll 100vh to complete
        pin: true,
        anticipatePin: 1,
        scrub: true,
        // markers: true,
    }
});
