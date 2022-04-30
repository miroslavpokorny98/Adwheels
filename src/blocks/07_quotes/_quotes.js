const cardNums = document.querySelector(".cardNums");
const quote = document.querySelector(".quote");
const quotes = document.querySelectorAll(".quote");
const qouteAuthors = document.querySelectorAll(".qouteAuthor");
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");

currentQuote = 0;

arrowRight.onclick = function () {
    var nextQuote = (currentQuote + 1) % quotes.length
    updateQuote(currentQuote, nextQuote)
    currentQuote = nextQuote
}

arrowLeft.onclick = function () {
    var nextQuote = 0
    if (currentQuote == 0){
        nextQuote = rotation.length - 1
    } else {
        nextQuote = (currentQuote - 1) % quotes.length
    }
    updateQuote(currentQuote, nextQuote)
    currentQuote = nextQuote
}

function updateQuote (quoteCurr, quoteNext) {
    cardNums.innerHTML = "0" + (quoteNext+1) + "<span>/0" + quotes.length + "</span>"
    
    quotes[quoteCurr].classList.remove("active");
    qouteAuthors[quoteCurr].classList.remove("active");

    quotes[quoteNext].classList.add("active");
    qouteAuthors[quoteNext].classList.add("active");
}

