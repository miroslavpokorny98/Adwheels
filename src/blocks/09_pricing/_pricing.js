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

const expandBtn = document.querySelector(".card4 .expand")
const expandBtnCross = document.querySelector(".card4 .expand img")
const card4Middle = document.querySelector(".card4Middle")
const pricingNumbers = document.querySelector(".pricingNumbers")
const card4MiddleChecks = document.querySelector(".card4MiddleChecks")


const startWidth = card4Middle.style.width
// const startWidth = 440

expandBtn.onclick = expandPricing


function expandPricing () {
    // card4Middle.classList.add("mystyle");
    // card4Middle.style.width = "100%"
    expandBtn.onclick = retractPricing
    // expandBtnCross.style.transform = rotate(0.5turn)
    gsap.to(".card4 .expand img", {rotation: 45})
    gsap.to(".card4Middle", {width: "100%", duration: 1, ease: "inOut"})
    pricingNumbers.style.display = "block"
    gsap.from(".pricingNumbers", {opacity: 0, duration: 1})
    card4MiddleChecks.style.width = "50%"
    
}

function retractPricing () {
    // card4Middle.classList.add("mystyle");
    // card4Middle.style.width = "440px"
    expandBtn.onclick = expandPricing
    gsap.to(".card4 .expand img", {rotation: 0})
    gsap.to(".card4Middle", {width: startWidth, duration: 1})
    pricingNumbers.style.display = "none"
    card4MiddleChecks.style.width = "100%"
}



