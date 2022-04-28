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
    
    quotes[quoteCurr].style.opacity = "0";
    qouteAuthors[quoteCurr].style.opacity = "0";
    
    setTimeout(function () {
        quotes[quoteNext].style.opacity = "1";
        qouteAuthors[quoteNext].style.opacity = "0.5";
    }, 250);  // must also change transition in css x2

    
}

