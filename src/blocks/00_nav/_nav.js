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
