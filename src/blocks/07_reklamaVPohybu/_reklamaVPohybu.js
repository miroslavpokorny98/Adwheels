if (window.innerWidth > 768){
    document.querySelector('.callToAction').onmouseover = function() {
        document.querySelector(".reklamaVPohybu .kontaktImgHover").style.opacity = 1
        document.querySelector(".reklamaVPohybu .kontaktImg").style.opacity = 0
    }

    document.querySelector('.callToAction').onmouseout = function() {
        document.querySelector(".reklamaVPohybu .kontaktImgHover").style.opacity = 0
        document.querySelector(".reklamaVPohybu .kontaktImg").style.opacity = 1
    }
}