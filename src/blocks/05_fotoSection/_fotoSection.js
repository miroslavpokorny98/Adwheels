gsap.to(".fotoSectionImgDiv1", {
    // duration: 1,
    width: 1532,
    scrollTrigger: {
        trigger: ".fotoSectionImgDiv1",
        // start: "top 80%",
        end: "bottom 90%",
        scrub: 2,
        once: true,
        markers: true,
        // toggleClass: "black"
        toggleActions: "play none none none"
                  // onEnter onLeave onEnterBack onLeaveBack
    }
})

gsap.to(".fotoSectionImgDiv2", {
    width: 1116,
    scrollTrigger: {
        trigger: ".fotoSectionImgDiv2",
        // start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
        once: true,
        // markers: true,
    }
})