const targets1 = [".vlastnosti", ".dopady", ".quotes", ".reklamaVPohybu"];

targets1.forEach(el => {
    gsap.from(el, { 
        y: "35vh",
        opacity: 0,
        duration: 0.75,
        
        scrollTrigger: {
            trigger: el,
            start: "top 125%",
            ease: "power3.inOut",
            once: true,
            // toggleActions: "restart none none none",
            // onEnter onLeave onEnterBack onLeaveBack
            // markers: true,
        }
    })
});

const targets2 = [".klienti", ".kontakt", ".viceInfo"];

targets2.forEach(el => {
    gsap.from(el, { 
        y: "35vh",
        opacity: 0,
        duration: 0.75,
        
        scrollTrigger: {
            trigger: el,
            start: "top 150%",
            ease: "power3.inOut",
            once: true,
            // toggleActions: "restart none none none",
            // onEnter onLeave onEnterBack onLeaveBack
            // markers: true,
        }
    })
});