gsap.from(".card3Container", {
    x: 2500,
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

gsap.fromTo(".card3Container",{x:0}, {
    x: -1300,
    scrollTrigger: {
        trigger: ".horizontalScroll .background",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
        // markers: true,
    }
});



