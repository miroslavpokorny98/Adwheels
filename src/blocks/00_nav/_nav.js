var myNav = document.querySelector('nav')

myNav.classList.add("transparentNav");

gsap.to("nav",{
  scrollTrigger: {
    trigger: ".heroImage",
    start: "1% top",
    // once: true,
    // toggleActions: "restart none none none",
    // onEnter onLeave onEnterBack onLeaveBack
    // markers: true,
    onEnter: function(){
      myNav.classList.toggle("whiteNav")
      myNav.classList.toggle("transparentNav")
    },
    onLeaveBack: function(){
      myNav.classList.toggle("whiteNav")
      myNav.classList.toggle("transparentNav")
    },
  }
})


if (window.innerWidth <= 768){
  burgerBtn = document.querySelector(".burgerMenuBtn")
  burgerBtn.onclick = function(){
    myNav.classList.toggle("expanded")
  } 
}