const vw = (coef) => window.innerWidth * (coef/100)
const vh = (coef) => window.innerHeight * (coef/100)

gsap.from(".video2", {
    width: vw(95),
    height: vw(95)/16*9,

    scrollTrigger: {
        trigger: ".videoContainer",
        start: "top bottom",
        end: "+=" + 700,
        ease: "power3.out",
        scrub: true,
        // once: true,
        toggleActions: "restart none none none",
        // onEnter onLeave onEnterBack onLeaveBack
        // markers: true,
    }
})

gsap.from(".detailyKampane", {
    y: 50,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".videoContainer",
        start: "top center",
        ease: "power3.out",
        // once: true,
        toggleActions: "restart none none none",
        // onEnter onLeave onEnterBack onLeaveBack
        // markers: true,
    }
})

document.querySelector('.textContainer button').onmouseover = function() {
    document.querySelector(".kontaktImgHover").style.opacity = 1
    document.querySelector(".kontaktImg").style.opacity = 0
}

document.querySelector('.textContainer button').onmouseout = function() {
    document.querySelector(".kontaktImgHover").style.opacity = 0
    document.querySelector(".kontaktImg").style.opacity = 1
}

