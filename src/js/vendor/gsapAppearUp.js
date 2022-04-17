const targets = [".vlastnosti", ".dopady", ".quotes", ".realizace", ".klienti", ".kontakt", ".viceInfo"];

targets.forEach(el => {
    gsap.from(el, { 
        y: "35vh",
        opacity: 0,
        duration: 0.75,
        
        scrollTrigger: {
            trigger: el,
            start: "top 130%",
            ease: "power3.inOut",
            once: true,
            // toggleActions: "restart none none none",
            // onEnter onLeave onEnterBack onLeaveBack
            // markers: true,
        }
    })
});
