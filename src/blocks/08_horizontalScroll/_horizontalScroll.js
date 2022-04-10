card3Container = document.getElementsByClassName('.card3Container');

gsap.from(".card3Container", {
    x: 1200,
    scrollTrigger: {
        trigger: ".horizontalScroll",
        start: "-600 top",
        end: "top top",
        // pin: true,
        scrub: true,
        markers: true,
    }
});

gsap.to(".card3Container", {
    x: -1300,
    scrollTrigger: {
        trigger: ".horizontalScroll",
        start: "top top",
        end: "+=" + 2000,
        pin: true,
        scrub: true,
        markers: true,
    }
});



