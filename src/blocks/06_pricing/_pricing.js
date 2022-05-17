const expandBtn = document.querySelector(".card4 .expand")
const expandBtnCross = document.querySelector(".card4 .expand img")
const card4Middle = document.querySelector(".card4Middle")
const pricingNumbers = document.querySelector(".pricingNumbers")
const card4MiddleChecks = document.querySelector(".card4MiddleChecks")
const showMoreBtns = document.querySelectorAll(".showMore")
const showLessBtns = document.querySelectorAll(".showLess")

ScrollTrigger.matchMedia({
	// desktop
	"(min-width: 769px)": function() {
        // pricingNumbers.classList.add("hidden")

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
        var expandPricingTl = gsap.timeline();
        expandPricingTl.to(".card4Middle", {width: "100%", duration: 0.75, ease: "inOut",})
        expandPricingTl.to(".card4 .expand img", {rotation: 45, duration: 0.5, onStart: () => { pricingNumbers.style.display = "block"}}, "<")
        expandPricingTl.fromTo(".pricingNumbers", {opacity: 0}, {opacity: 1, duration: 0.5}, "-=0.35");
        expandPricingTl.pause();
        expandBtn.onclick = expandPricing

        function expandPricing () {
            expandPricingTl.restart();
            expandBtn.onclick = retractPricing
        }

        function retractPricing () {
            expandPricingTl.reverse();
            expandBtn.onclick = expandPricing
        }
    }, 

    "(max-width: 768px)": function() {
        pricingNumbers.classList.add("hidden")
        expandBtn.onclick = showPricingNumbers

        function showPricingNumbers () {
            expandCard4(showMoreBtns[1])
            
            expandBtn.style.transform = "rotate(45deg)"

            card4MiddleChecks.classList.add("hidden")
            pricingNumbers.classList.remove("hidden")

            expandBtn.onclick = hidePricingNumbers
        }

        function hidePricingNumbers () {
            expandBtn.style.transform = "rotate(0deg)"

            card4MiddleChecks.classList.remove("hidden")
            pricingNumbers.classList.add("hidden")

            expandBtn.onclick = showPricingNumbers
        }

        showMoreBtns.forEach(btn => {
            btn.onclick = function(){expandCard4(this)}
        });
        showLessBtns.forEach(btn => {
            btn.onclick = function(){retractCard4(this)}
        });

        expandCard4(showMoreBtns[1])

        function expandCard4(btn){
            // console.log("expand")
            // console.dir(btn)
            btn.onclick = function(){retractCard4(this)}
            
            btn.previousElementSibling.style.opacity = 1
            btn.closest('.card4').style.height = "508px"

            btn.firstElementChild.innerText = "méně"
            btn.lastElementChild.style.transform = "rotate(180deg)"
        }

        function retractCard4(btn){
            console.log("retract")
            console.dir(btn)
            btn.onclick = function(){expandCard4(this)}
            btn.previousElementSibling.style.opacity = 0

            btn.closest('.card4').style.height = ""

            btn.firstElementChild.innerText = "více"
            btn.lastElementChild.style.transform = "rotate(0deg)"
        }
    },

	"all": function() {
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
	}
});








