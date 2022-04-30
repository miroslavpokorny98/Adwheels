document.querySelector('.textContainer button').onmouseover = function() {
    document.querySelector(".kontaktImgHover").style.opacity = 1
    document.querySelector(".kontaktImg").style.opacity = 0
}

document.querySelector('.textContainer button').onmouseout = function() {
    document.querySelector(".kontaktImgHover").style.opacity = 0
    document.querySelector(".kontaktImg").style.opacity = 1
}