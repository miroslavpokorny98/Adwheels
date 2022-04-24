gsap.to(".fotoSectionImgDiv1", {
    // duration: 1,
    width: "80%",
    scrollTrigger: {
        trigger: ".fotoSectionImgDiv1",
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
        // once: true,

        toggleActions: "restart none none none",
        // onEnter onLeave onEnterBack onLeaveBack
        // markers: true,
    }
})

gsap.to(".fotoSectionImgDiv2", {
    width: "58%",
    scrollTrigger: {
        trigger: ".fotoSectionImgDiv2",
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
        // once: true,

        toggleActions: "restart none none none",
        // onEnter onLeave onEnterBack onLeaveBack
        // markers: true,
    }
})