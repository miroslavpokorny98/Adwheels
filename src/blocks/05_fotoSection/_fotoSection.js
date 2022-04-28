// PC
var foto1MaxWidth = "80%"
var foto2MaxWidth = "58%"
var fotoSectionAnimationEnd = "bottom 90%"

// Mobile
if (window.innerWidth <= 768){
    foto1MaxWidth = 100*(window.innerWidth-48)/window.innerWidth + "%"
    foto2MaxWidth = 100*(window.innerWidth-48)/window.innerWidth + "%"
    // foto1MaxWidth = "100%"
    // foto2MaxWidth = "100%"
    fotoSectionAnimationEnd = "top 50%"
}

gsap.to(".fotoSectionImgDiv1", {
    // duration: 1,
    width: foto1MaxWidth,
    scrollTrigger: {
        trigger: ".fotoSectionImgDiv1",
        start: "top 90%",
        end: fotoSectionAnimationEnd,
        scrub: 1,
        // once: true,

        toggleActions: "restart none none none",
        // onEnter onLeave onEnterBack onLeaveBack
        // markers: true,
    }
})

gsap.to(".fotoSectionImgDiv2", {
    width: foto2MaxWidth,
    scrollTrigger: {
        trigger: ".fotoSectionImgDiv2",
        start: "top 90%",
        end: fotoSectionAnimationEnd,
        scrub: 1,
        // once: true,

        toggleActions: "restart none none none",
        // onEnter onLeave onEnterBack onLeaveBack
        // markers: true,
    }
})