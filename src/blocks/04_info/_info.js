let informations = document.querySelectorAll(".information")
// let infoImgWidth = document.querySelector(".infoImgDiv").style.width

let lastInfo = 0;

informations.forEach((info, index) => {
    let infoSelector = gsap.utils.selector(info)
    // infoSelector("h4")[0].addEventListener("click", function(){rotateInfo(informations, index)})
    info.addEventListener("click", function(){rotateInfo(informations, index)})
})

function rotateInfo(informations, clickedIndex){
    if (clickedIndex == lastInfo){
        return;
    }

    let revealTimeline = revealTimelineConstructor(informations, clickedIndex, lastInfo)
    let hideTimeline = hideTimelineConstructor(informations, clickedIndex, lastInfo)

    if (clickedIndex != lastInfo){
        hideTimeline.play()
        revealTimeline.play()
    }
    
    lastInfo = clickedIndex
}

const infoTextHeight = document.querySelector(".infoText").offsetHeight

function revealTimelineConstructor(informations, clickedIndex, lastInfo){
    let revealInfoSelector = gsap.utils.selector(informations[clickedIndex])
    // let hideInfoSelector = gsap.utils.selector(informations[lastInfo])
    let infoImgDivReveal = ".infoImgDiv:nth-child(" + (clickedIndex+1) + ")"
    let infoImgDivHide = ".infoImgDiv:nth-child(" + (lastInfo+1) + ")"

    let revealTimeline = gsap.timeline();
    revealTimeline.fromTo(revealInfoSelector("span"), {opacity: 0}, {opacity: 0.04, ease: "out", duration: 0.5})
    revealTimeline.to(revealInfoSelector("h4"), {color: "#33266B", ease: "out", duration: 0.5}, "<")
    revealTimeline.fromTo(revealInfoSelector(".infoText"), 
        {opacity: 0, y: 50, height: 0}, 
        {opacity: 0.8, y: 0, height: infoTextHeight, ease: "out", duration: 0.5},
        "<"
    )
    revealTimeline.to(".infoScroll", {
        height: 25*(clickedIndex+1) + "%", 
        ease: "out", 
        duration: 0.5
    }, "<")
    revealTimeline.fromTo(".purpleTransition", {x: 457}, {x: 0, ease: "Out", duration: 0.75}, "<")
    revealTimeline.fromTo(infoImgDivHide, 
        {width: 457}, 
        {width: 0, ease: "Out", duration: 0.75, onStart: function(){document.querySelector(infoImgDivHide + " img").style.float = "left"}}, 
        "<",
    )
    revealTimeline.fromTo(".purpleTransition", 
        {width: 457}, 
        {width: 0, ease: "inOut", duration: 0.75}, 
        "-=0.5"
    )
    revealTimeline.fromTo(infoImgDivReveal, 
        {width: 0, x: 457}, 
        {width: 457, x: 0, ease: "inOut", duration: 0.75, onStart: function(){document.querySelector(infoImgDivReveal + " img").style.float = "right"}}, 
        "<"
    )
    revealTimeline.pause()

    return revealTimeline;
}

function hideTimelineConstructor(informations, clickedIndex, lastInfo){
    // let revealInfoSelector = gsap.utils.selector(informations[clickedIndex])
    let hideInfoSelector = gsap.utils.selector(informations[lastInfo])
    let hideTimeline = gsap.timeline();
    hideTimeline.fromTo(hideInfoSelector("span"), {opacity: 0.04}, {opacity: 0, ease: "out", duration: 0.5})
    hideTimeline.to(hideInfoSelector("h4"), {color: "#3A3A3A", ease: "out", duration: 0.5}, "<")
    hideTimeline.fromTo(hideInfoSelector(".infoText"), 
        {opacity: 0.8, y: 0, height: infoTextHeight}, 
        {opacity: 0, y: -50, height: 0, ease: "out", duration: 0.5},
        "<"
    )
    hideTimeline.pause()

    return hideTimeline
}


let infoInitTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".infoImages",
        start: "top 80%",
        ease: "power3.inOut",
        once: true,
        // toggleActions: "restart none none none",
        // onEnter onLeave onEnterBack onLeaveBack
        // markers: true,
    }
});

infoInitTL.fromTo(".purpleTransition", {x: 457}, {x: 0, ease: "Out", duration: 0.75}, "<")
infoInitTL.fromTo(".purpleTransition", 
    {width: 457}, 
    {width: 0, ease: "inOut", duration: 0.75}, 
    "-=0.5"
)
infoInitTL.fromTo(".infoImgDiv:nth-child(1)", 
    {width: 0, x: 457}, 
    {width: 457, x: 0, ease: "inOut", duration: 0.75, onStart: function(){document.querySelector(".infoImgDiv:nth-child(1) img").style.float = "right"}}, 
    "<"
)
infoInitTL.from(".infoList", {y: "20vh", opacity: 0, duration: 0.7}, "<")
infoInitTL.from(".infoScrollBar", {y: "20vh", opacity: 0, duration: 0.7}, "<")
