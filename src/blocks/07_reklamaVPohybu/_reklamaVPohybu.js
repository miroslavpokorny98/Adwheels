document.querySelector('.rozjetBtn').onmouseover = function() {
    document.querySelector(".reklamaVPohybu .kontaktImgHover").style.opacity = 1
    document.querySelector(".reklamaVPohybu .kontaktImg").style.opacity = 0
}

document.querySelector('.rozjetBtn').onmouseout = function() {
    document.querySelector(".reklamaVPohybu .kontaktImgHover").style.opacity = 0
    document.querySelector(".reklamaVPohybu .kontaktImg").style.opacity = 1
}