if (window.innerWidth > 768){
    document.querySelector('.kontaktBtn').onmouseover = function() {
        document.querySelector(".kontakt .kontaktImgHover").style.opacity = 1
        document.querySelector(".kontakt .kontaktImg").style.opacity = 0
    }

    document.querySelector('.kontaktBtn').onmouseout = function() {
        document.querySelector(".kontakt .kontaktImgHover").style.opacity = 0
        document.querySelector(".kontakt .kontaktImg").style.opacity = 1
    }
}