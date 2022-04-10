


var myNav = document.querySelector('nav')
// myNav.classList.add("transparentNav")

window.onscroll = function() {myFunction()};
myNav.setAttribute("class", "transparentNav");
function myFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    myNav.setAttribute("class", "whiteNav");
  } else {
    myNav.setAttribute("class", "transparentNav");
  }
}

// gsap.to("nav", {
//     className:"transparentNav",
//     // duration: 1,
//     scrollTrigger: {
//         trigger: ".map",
//         start: 0,
//         markers: true,
//         // toggleClass: "black"
//         // toggleActions: "play none none none"
//                         onEnter onLeave onEnterBack onLeaveBack
//     }
    
// })