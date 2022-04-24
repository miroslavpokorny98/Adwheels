gsap.from(".card3Container", {
    x: 2500,
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
    + (card3Arr.length-1)*32 
    - horizontalScrollContainer.offsetWidth

gsap.fromTo(".card3Container",{x:0}, {
    x: -horizontalScrollDistance,
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontalScroll .background",
        start: "top top",
        end: "bottom top", // need to scroll 100vh to complete
        pin: true,
        scrub: true,
        // markers: true,
    }
});
