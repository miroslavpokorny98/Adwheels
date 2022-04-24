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

// paralax
gsap.to(".PricingParalax", {
    y: "-40vh",
    scrollTrigger: {
        trigger: ".PricingParalax",
        // start: "center bottom",
        start: "top bottom",
        end: "top top",
        // pin: true,
        scrub: true,
        // markers: true,
    }
});

const expandBtn = document.querySelector(".card4 .expand")
const expandBtnCross = document.querySelector(".card4 .expand img")
const card4Middle = document.querySelector(".card4Middle")
const pricingNumbers = document.querySelector(".pricingNumbers")
const card4MiddleChecks = document.querySelector(".card4MiddleChecks")


const startWidth = card4Middle.style.width
// const startWidth = 440

expandBtn.onclick = expandPricing

var expandPricingTl = gsap.timeline();
expandPricingTl.to(".card4Middle", {width: "100%", duration: 0.75, ease: "inOut",})
expandPricingTl.to(".card4 .expand img", {rotation: 45, duration: 0.5, onStart: () => { pricingNumbers.style.display = "block"}}, "<")
expandPricingTl.fromTo(".pricingNumbers", {opacity: "0"}, {opacity:"1", duration: 0.5}, "-=0.35");
expandPricingTl.pause();


function expandPricing () {
    expandPricingTl.restart();
    expandBtn.onclick = retractPricing
}

function retractPricing () {
    expandPricingTl.reverse();
    expandBtn.onclick = expandPricing
}

gsap.to(".expand", {
    scaleX: 1.2,
    scaleY: 1.2,

    duration: 0.5,

    repeat: 5,
    yoyo: true,

    scrollTrigger: {
        trigger: ".pricing",
        start: "top 40%",
        end: "top top",
        // once: true,
        toggleActions: "restart none none none",
        // onEnter onLeave onEnterBack onLeaveBack
        // markers: true,
    }
})



