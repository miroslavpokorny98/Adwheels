gsap.from(".realizaceParalax", {
    y: "40vh",
    scrollTrigger: {
        trigger: ".realizaceParalax",
        // start: "center bottom",
        start: "top bottom",
        end: "top top",
        // pin: true,
        scrub: true,
        // markers: true,
    }
});