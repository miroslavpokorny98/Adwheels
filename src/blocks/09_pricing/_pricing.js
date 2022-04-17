gsap.from(".card4Left", { 
    x: "500",
    // opacity: 0,
    duration: 1,
    
    scrollTrigger: {
        trigger: ".card4Left",
        start: "top bottom",
        ease: "power3.inOut",
        once: true,
        // toggleActions: "restart none none none",
        // onEnter onLeave onEnterBack onLeaveBack
        // markers: true,
    }
})

gsap.from(".card4Right", { 
    x: "-500",
    // opacity: 0,
    duration: 1,
    
    scrollTrigger: {
        trigger: ".card4Right",
        start: "top bottom",
        ease: "power3.inOut",
        once: true,
        // toggleActions: "restart none none none",
        // onEnter onLeave onEnterBack onLeaveBack
        // markers: true,
    }
})

gsap.to(".pricing", {
    y: "-40%",
    scrollTrigger: {
        trigger: ".pricing",
        // start: "center bottom",
        start: "top bottom",
        end: "top top",
        // pin: true,
        scrub: true,
        // markers: true,
    }
});