var precistArr = document.querySelectorAll(".precist")

precistArr.forEach(element => {
    element.onmouseover = function() {
        gsap.to(element.lastElementChild, {x: 12, duration: 0.25})
    }
    element.onmouseout = function() {
        gsap.to(element.lastElementChild, {x: 0, duration: 0.25, ease: "out"})
    }
});

