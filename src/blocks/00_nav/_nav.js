// ScrollTrigger.normalizeScroll(true);

var myNav = document.querySelector('nav')

myNav.classList.add("transparentNav");

ScrollTrigger.matchMedia({
	// desktop
	"(max-width: 768px)": function() {
		
    // document.querySelector(".navButtons").style.display = "none"

    var expandNav = gsap.timeline({
      
      ease: "power3.Out",
      yoyoEase: true,
      onStart: function(){myNav.classList.add("expanded"); disableScroll() },
      onReverseComplete: function(){myNav.classList.remove("expanded"); enableScroll()}
    })

    expandNav.fromTo("nav", {height: 79}, {
      height: "100vh", 
      duration: 0.75,
    })
    expandNav.fromTo(".navButtons", {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.5
      }, "<0.5")
    expandNav.fromTo(".burger", {opacity: 1}, {opacity: 0, duration: 0.75}, "0")
    expandNav.fromTo(".cross", {opacity: 0}, {opacity: 1, duration: 0.75}, "0.5")
    expandNav.pause()

    if (window.innerWidth <= 768){
      burgerBtn = document.querySelector(".burgerMenuBtn")
      burgerBtn.onclick = function(){burgerExpandNav(burgerBtn)}
    }

    function burgerExpandNav(btn){
      expandNav.restart()
      btn.onclick = function(){burgerRetractNav(btn)}
    }
    function burgerRetractNav(btn){
      expandNav.reverse()
      btn.onclick = function(){burgerExpandNav(btn)}
    }
    
    function disableScroll() {
      // Get the current page scroll position
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

          // if any scroll is attempted, set this to the previous value
          window.onscroll = function() {
              window.scrollTo(scrollLeft, scrollTop);
          };
    }

    function enableScroll() {
      window.onscroll = function() {};
    }


  },
	"all": function() {
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
	}
});